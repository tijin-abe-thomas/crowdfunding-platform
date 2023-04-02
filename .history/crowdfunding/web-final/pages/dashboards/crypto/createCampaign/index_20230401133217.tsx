import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NextLink from "next/link";
import PageTitleWrapper from "@/components/PageTitleWrapper";
import {
  Button,
  Container,
  Grid,
  Card,
  Typography,
  CardContent,
  Divider,
} from "@mui/material";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BigNumber } from "bignumber.js";

// import { useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers';
// import { useStateContext } from 'C:/Users/91905/Desktop/blockchain-crowdfunding/tokyo/pages/dashboards/crypto/contexts/index.js';

import Head from "next/head";
import SidebarLayout from "@/layouts/SidebarLayout";
import PageTitle from "@/components/PageTitle";
import DashboardCrypto from "..";
import FormField from "./FormField";
// import { useStateContext } from './contractInfo.js';

import { ethers } from "ethers";
import Web3 from "web3";
import Crowdfunding from "../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json";
import config from "config.json";
const tokens = (n) => {
  return ethers.utils.parseUnits(n, "ether");
};
const web3 = new Web3("http://localhost:8545");
// const StateContext = createContext();
const smartContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(contractAbi, smartContractAddress);

async function createCampaign(
  id: string,
  title: string,
  description: string,
  location: string,
  category: string,
  minContribution: BigNumber,
  goal: BigNumber,
  deadline: BigNumber
): Promise<void> {
  const accounts = await web3.eth.getAccounts(); // get the current user's account
  console.log(accounts[0]);
  await contract.methods
    .uploadCampaign(
      id,
      title,
      description,
      location,
      category,
      minContribution,
      goal,
      deadline
    )
    .send({ from: accounts[0], gas: 500000 }); // call the setName function and send the transaction
    console.log("hi")
}

function CreateCampaign() {
  // //   const navigate = useNavigate();

  // // const { createCampaign } = useStateContext();
  // const [form, setForm] = useState({
  //   name: '',
  //   id: '',
  //   title: '',
  //   description: '',
  //   location: '',
  //   category: '',
  //   minContribution: '',
  //   goal: '',
  //   campaignDeadline: ''
  //   // image: ''
  // });

  // const handleFormFieldChange = (fieldName, e) => {
  //   setForm({ ...form, [fieldName]: e.target.value });
  // };

  // const [provider, setProvider] = useState(null);
  // const [account, setAccount] = useState(null);
  // const [crowdfunding, setCrowdfunding] = useState(null);
  // const [campaigns, setCampaigns] = useState(null);

  // const loadBlockchainData = async () => {
  //   const accounts = await window.ethereum.request({
  //     method: 'eth_requestAccounts'
  //   });
  //   const account = ethers.utils.getAddress(accounts[0]);
  //   setAccount(account);
  //   console.log(accounts);

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   setProvider(provider);
  //   console.log(provider);

  //   const network = await provider.getNetwork();
  //   console.log(network);

  //   const crowdfunding = new ethers.Contract(
  //     smartContractAddress,
  //     contractAbi,
  //     provider
  //   );
  //   setCrowdfunding(crowdfunding);
  //   console.log(crowdfunding);

  //   console.log(await provider.getCode(smartContractAddress));

  //   const campaigns = [];
  //   for (var i = 0; i < 6; i++) {
  //     const campaign = await crowdfunding.campaigns(i + 1);
  //     campaigns.push(campaign);
  //   }
  //   setCampaigns(campaigns);
  //   console.log(campaigns);
  // };

  // useEffect(() => {
  //   loadBlockchainData();
  // }, []);

  // const uploadCampaign = async (form) => {
  //   try {
  //     const accounts = await web3.eth.getAccounts();
  //     console.log(ethers.utils.parseUnits(form.minContribution, 'ether'))
  //     const data = await contract.methods
  //       .uploadCampaign(
  //         parseInt(form.id),
  //         form.title,
  //         form.description,
  //         form.location,
  //         form.category,
  //         ethers.utils.parseUnits(form.minContribution, 'ether'),
  //         ethers.utils.parseUnits(form.goal, 'ether'),
  //         parseInt(form.deadline) * 86400 // deadline,
  //       )
  //       .send({ from: accounts[0] });
  //     await data.wait()
  //     console.log('contract call success', data);
  //   } catch (error) {
  //     console.log('contract call failure', error);
  //   }
  // };

  // const getCampaigns = async () => {
  //   return campaigns;
  // };

  const handleSubmit = async () => {
    //id: string, title: string, description: string, location: string, category: string, minContribution: BigNumber, goal: BigNumber, deadline: BigNumber
   
    // const idInput = document.getElementById("id-campaign") as HTMLInputElement;
    // const id = new BigNumber(idInput.value);

    const noOfCampaigns = await contract.methods.noOfCampaigns();
    const total = parseInt(noOfCampaigns.toString())

    const titleInput = document.getElementById(
      "title-campaign"
    ) as HTMLInputElement;
    const title = titleInput.value;

    const descriptionInput = document.getElementById(
      "description-campaign"
    ) as HTMLInputElement;
    const description = descriptionInput.value;

    const locationInput = document.getElementById(
      "location-campaign"
    ) as HTMLInputElement;
    const location = locationInput.value;

    const categoryInput = document.getElementById(
      "category-campaign"
    ) as HTMLInputElement;
    const category = categoryInput.value;

    const mincontributionInput = document.getElementById(
      "minContribution-campaign"
    ) as HTMLInputElement;
    const mincontribution = mincontributionInput.value;
    // const y = ethers.utils.parseUnits(mincontribution, 'ether');
    // const temp1 = ethers.utils.formatUnits(y.toString(), "ether")
    const minContribution = new BigNumber(mincontribution)

    const goalInput = document.getElementById(
      "goal-campaign"
    ) as HTMLInputElement;
    const Goal = goalInput.value;
    // const x = ethers.utils.parseUnits(Goal, 'ether');
    // const temp = ethers.utils.formatUnits(x.toString(), "ether") ;
    const goal = new BigNumber(Goal)

    const deadlineInput = document.getElementById(
      "deadline-campaign"
    ) as HTMLInputElement;
    const Deadline = parseInt(deadlineInput.value)*86400 + Date.now();
    const deadline = new BigNumber(Deadline);

    const event = await createCampaign(
      total.toString(),
      title,
      description,
      location,
      category,
      minContribution,
      goal,
      deadline
    );
    console.log(event)
  };

  return (
    <>
      <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
        <PageTitleWrapper>
          <PageTitle
            heading="Start a Campaign"
            subHeading="Give details for campaigns you wish to post on the platform"
            docs="https://material-ui.com/components/text-fields/"
          />
        </PageTitleWrapper>
        <Container maxWidth="sm">
          <Card sx={{ textAlign: "center", mt: 3, p: 4, alignItems: "start" }}>
            <Box
              component="form"
              id="form-name"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "50ch",
                  textAlign: "center",
                },
              }}
              noValidate
              autoComplete="off"
            >
              {/* <TextField
                required
                id="id-campaign"
                type="number"
                label="Campaign ID"
                placeholder="Enter your Campaign ID"
                defaultValue=""
              />
              <br />
              <br /> */}
              <TextField
                required
                id="title-campaign"
                label="Campaign Title"
                placeholder="Enter the title of your campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="description-campaign"
                label="Campaign Description"
                placeholder="Enter the description of your campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="location-campaign"
                label="Campaign Location"
                placeholder="Enter the location of your campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="category-campaign"
                label="Campaign Category"
                placeholder="Enter the category of your campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="minContribution-campaign"
                type="number"
                label="Minimum Contribution"
                placeholder="Enter the minimum contribution required for the campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="goal-campaign"
                type="number"
                label="Goal"
                placeholder="Enter the goal of the campaign"
                defaultValue=""
              />
              <br />
              <br />
              <TextField
                required
                id="deadline-campaign"
                type="number"
                label="Deadline (in Days)"
                placeholder="Enter the deadline (in Days)"
                defaultValue=""
              />
              {/* <WagmiConfig client={wagmiClient}>
                  </WagmiConfig>
                  <Web3Modal
                    projectId="f0aaa836ea9062cd065f2d98738c714e"
                    ethereumClient={ethereumClient}
                  />
                  <br/>
                  <w3m-core-button icon="hide" label="Connect Wallet" balance="hide"></w3m-core-button> */}
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "50ch",
                    textAlign: "center",
                  },
                }}
              >
                <Button onClick={handleSubmit} variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      </div>
    </>
  );
}

CreateCampaign.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateCampaign;
