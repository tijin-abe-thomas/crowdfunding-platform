import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  OutlinedInput,
  styled,
  Grid,
  CardHeader,
  CardContent
} from '@mui/material';

import Head from 'next/head';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'next/link';
import { useEffect } from 'react';

import TextField from '@mui/material/TextField';

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

const web3 = new Web3("http://localhost:8545"); // initialize web3 with your Ethereum provider URL
const contractAddress = "0x33Cea73a47d1c5572A063987d81b6B455F91677A"; // replace with the actual address of your deployed smart contract
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

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);


function SignIn() {

  const [error, setError] = useState<string | null>(null);


  //Moralis Authentication
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
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
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/management/profile",
    });

    const existingUser = await userGet(account);

    if (existingUser === '') {
        // Throw error if user does not exist
        setError('Account does not exist! Please sign up to continue');
    } else {
        // set error if user already exists
        const userRef = existingUser;
        const encodedVariable = encodeURIComponent(userRef);
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('userRef', encodedVariable);
        const queryString = urlSearchParams.toString();
        push(`${url}?${queryString}`);
    }

    
    const userName = await userGet(account);
    console.log(account)
    console.log(userName)
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
  };

  const userGet = async (account: string) => {
    // code to interact with smart contract and set name and address
    const userName = getName(account);
    return userName
  };
  
  return (
    <>
      <Head>
        <title>User Login Page</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center">
              <img alt="404" height={180} src="/static/images/user/login.svg" />
              <Typography variant="h2" sx={{ my: 2 }}>
                User Login
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
              {/* <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch', textAlign: 'center'}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Username"
                      placeholder='Enter your username'
                      defaultValue=""
                    />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete=""
                    />
                  </div>
                </Box> */}
                <Typography color="error" variant="caption">
                      {error}
                </Typography>
                <Button onClick={handleAuth} variant="contained">
                  Login with Metamask
                </Button>  
                {/* <WagmiConfig client={wagmiClient}>
                </WagmiConfig>
                <Web3Modal
                  projectId="f0aaa836ea9062cd065f2d98738c714e"
                  ethereumClient={ethereumClient}
                />
                <br/>
                <w3m-core-button icon="hide" label="Connect Wallet" balance="hide"></w3m-core-button> */}
                <Divider sx={{ my: 2 }}>OR</Divider>
                <Button href="/user/signup" variant="outlined">
                  Sign Up
                </Button>               
                </Card>
            </Container>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
