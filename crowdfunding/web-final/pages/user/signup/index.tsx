import {
    Box,
    Card,
    Typography,
    Container,
    Divider,
    Button,
    styled,
    // OutlinedInput,
    // Grid,
    // CardHeader,
    // CardContent
  } from '@mui/material';
  
  import Head from 'next/head';
  import type { ReactElement } from 'react';
  import BaseLayout from 'src/layouts/BaseLayout';
  // import Link from 'next/link';
  import { useEffect } from 'react';
  
  import TextField from '@mui/material/TextField';
  
  // import {
  //   EthereumClient,
  //   modalConnectors,
  //   walletConnectProvider,
  // } from "@web3modal/ethereum";
  
  // import { Web3Modal } from "@web3modal/react";
  // import { configureChains, createClient, WagmiConfig } from "wagmi";
  // import { arbitrum, mainnet, polygon, localhost } from "wagmi/chains";
  // import { useAccount } from 'wagmi';
  // import { useRouter } from 'next/router';

  // import * as $ from "jquery";

  // import { default as Web3 } from 'web3';

//Moralis Authentication Imports
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

//Smart Contract
import Web3 from 'web3';
import User from "../../../build/contracts/User.json";
import { redirect } from 'next/dist/server/api-utils';

const web3 = new Web3("http://localhost:7545"); // initialize web3 with your Ethereum provider URL
const contractAddress = "0xc2E9D037aA566025d7830C1e38A6D47aBF3B5AD1"; // replace with the actual address of your deployed smart contract
const contractAbi = User.abi; // import the ABI of your smart contract

const profileContract = new web3.eth.Contract(contractAbi, contractAddress); 

async function setName(id: string, name: string): Promise<void> {
  const accounts = await web3.eth.getAccounts(); // get the current user's account
  await profileContract.methods.setName(id, name).send({ from: accounts[0] }); // call the setName function and send the transaction
}

async function getName(id: string): Promise<string> {
  const result = await profileContract.methods.getName(id).call(); // call the getName function and get the result
  return result;
}
  
  // const chains = [arbitrum, mainnet, polygon, localhost];
  
  // // Wagmi client
  // const { provider } = configureChains(chains, [
  //   walletConnectProvider({ projectId: "f0aaa836ea9062cd065f2d98738c714e" }),
  // ]);
  // const wagmiClient = createClient({
  //   connectors: modalConnectors({
  //     projectId: "f0aaa836ea9062cd065f2d98738c714e",
  //     version: "2", // or "2"
  //     appName: "web3Modal",
  //     chains,
  //   }),
  //   provider,
  // });
  
  
  // const ethereumClient = new EthereumClient(wagmiClient, chains);
  
  const MainContent = styled(Box)(
    () => `
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
  `
  );
  
  const TopWrapper = styled(Box)(
    ({ theme }) => `
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(6)};
  `
  );
   
  function Status404() {


    //Moralis Authentication
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
    console.log("Point handleAuth");
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });
    // redirect user after success authentication to '/user' page

    interface FormData {
      name: string;
    }

    class Form {
      private formData: FormData = { name: ''};
    
      constructor(
        private formElement: HTMLFormElement,) {
        this.formElement.addEventListener('submit', this.onSubmit.bind(this));
      }
    
      private onSubmit(event: Event): void {
        event.preventDefault();
        console.log("Point onSubmit");       
    
        const formData = new FormData(this.formElement);
        this.formData = {
          name: formData.get('name-signup') as string,
        };
    
        console.log(this.formData); // do something with the data
      }

      public getName(): string | null {
        return this.formData.name;
      }

    }

    const formElement = document.querySelector('#form-name') as HTMLFormElement;
    const form = new Form(formElement);

    const userName = form.getName()

    const { url } = await signIn("moralis-auth", {
        message,
        signature,
        redirect: false,
        callbackUrl: "/management/profile",
      });

    console.log(setName(account, userName))
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };


  
    // const { address, isConnected } = useAccount()
    // console.log(address);
    // console.log(isConnected);

    const   router = useRouter();
      
      // useEffect(() => {
      //   if (isConnected == true){
      //     setTimeout(()=>{
      //       router.push('/management/profile');
      //     }, 0)
      //     console.log("Connected!");
      // }}, [isConnected]);
    
    return (
      <>
        <Head>
          <title>User Sign Up Page</title>
        </Head>
        <MainContent>
          <TopWrapper>
            <Container maxWidth="md">
              <Box textAlign="center">
                <img alt="404" height={180} src="/static/images/user/login.svg" />
                <Typography variant="h2" sx={{ my: 2 }}>
                  User Sign Up
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 4 }}
                >
                  Please enter your login credentials to continue.
                </Typography>
              </Box>
              <Container maxWidth="sm">
                <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                <Box
                    component="form"
                    id='form-name'
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '50ch', textAlign: 'center'}
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        required
                        id="name-signup"
                        label="Name"
                        placeholder='Enter your name'
                        defaultValue=""
                      />
                    </div>
                    <div>
                    <Button onClick={handleAuth} variant="contained" type="submit">
                      Sign Up with Metamask
                    </Button> 
                    </div>
                  </Box>
                  {/* <WagmiConfig client={wagmiClient}>
                  </WagmiConfig>
                  <Web3Modal
                    projectId="f0aaa836ea9062cd065f2d98738c714e"
                    ethereumClient={ethereumClient}
                  />
                  <br/>
                  <w3m-core-button icon="hide" label="Connect Wallet" balance="hide"></w3m-core-button> */}
                  <Divider sx={{ my: 3 }}>OR</Divider>
                  <Button href="/user/login" variant="outlined">
                    Go back
                  </Button>               
                  </Card>
              </Container>
            </Container>
          </TopWrapper>
        </MainContent>
      </>
    );
  }
  
  export default Status404;
  
  Status404.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
  };
  