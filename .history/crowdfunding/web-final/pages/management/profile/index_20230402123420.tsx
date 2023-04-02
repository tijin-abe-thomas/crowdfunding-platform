import Head from "next/head";
import SidebarLayout from "@/layouts/SidebarLayout";
import Footer from "@/components/Footer";

import { Grid, Container } from "@mui/material";

import ProfileCover from "@/content/Management/Users/details/ProfileCover";
import RecentActivity from "@/content/Management/Users/details/RecentActivity";
import Feed from "@/content/Management/Users/details/Feed";
import PopularTags from "@/content/Management/Users/details/PopularTags";
import MyCards from "@/content/Management/Users/details/MyCards";
import Addresses from "@/content/Management/Users/details/Addresses";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import User from "../../../build/contracts/User.json";

const web3 = new Web3("http://localhost:7545"); // initialize web3 with your Ethereum provider URL
const contractAddress = User.networks[5777].address; // replace with the actual address of your deployed smart contract
const contractAbi = User.abi; // import the ABI of your smart contract

const profileContract = new web3.eth.Contract(contractAbi, contractAddress);

async function getName(id: string): Promise<string> {
  const result = await profileContract.methods.getName(id).call(); // call the getName function and get the result
  return result;
}

function ManagementUserProfile() {
  const [account, setAccount] = useState(null);

  const fetchDetails = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(acounts[0]);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  const user = {
    savedCards: 7,
    name: getName(account),
    coverImg: "/static/images/2.png",
    avatar: "/static/images/2.png",
  };

  return (
    <>
      <Head>
        <title>User Details - Management</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          {/* <Grid item xs={12} md={8}>
            <Feed />
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid> */}
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          {/* <Grid item xs={12} md={5}>
              <Addresses />
            </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
