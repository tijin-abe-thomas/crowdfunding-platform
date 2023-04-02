import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import Section from '@/content/Dashboards/Crypto/Section';
import CampaignBox from '@/content/Dashboards/Crypto/CampaignBox.js';
import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
// import Wallets from '@/content/Dashboards/Crypto/Wallets';
// import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';
// import Crowdfunding from '@/abis/Crowdfunding.json';
import Contract from "../../../../build/contracts/Crowdfunding.json"

import config from 'config.json';
// import Web3 from 'node_modules/web3/dist/web3.min.js'
import TextField from '@mui/material/TextField';
import Web3 from 'web3';
import { BlockHeader, Block } from 'web3-eth'; // ex. package types
const Crowdfunding = Contract.abi
const smartContractAddress =Crowdfunding.networks[5777].address;
function DashboardCrypto() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [crowdfunding, setCrowdfunding] = useState(null);
  const [women, setWomen] = useState(null);
  const [child, setChild] = useState(null);
  const [labour, setLabour] = useState(null);
  const [campaigns, setCampaigns] = useState(null);
  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);
  const [balance, setBalance] = useState(null);

  const [transactions, setTransations] = useState(null);
  const togglePop = (item) => {
    console.log('toggle');
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
    console.log(accounts);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    console.log(provider);

    const ethbalance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(ethbalance));
    
    const network = await provider.getNetwork();
    console.log(network);

    const crowdfunding = new ethers.Contract(
      config[network.chainId].Crowdfunding.address,
      Crowdfunding,
      provider
    );
    setCrowdfunding(crowdfunding);
    console.log(crowdfunding);

    console.log(await provider.getCode(smartContractAddress));
    const campaigns = [];

    const noOfCampaigns = await crowdfunding.noOfCampaigns();
    const total = parseInt(noOfCampaigns.toString())
    console.log(parseInt(noOfCampaigns.toString()))

    for (var i = 0; i < total; i++) {
      const campaign = await crowdfunding.campaigns(i + 1);
      campaigns.push(campaign);
    }

    console.log(campaigns);
    console.log(crowdfunding.manager)
    setCampaigns(campaigns);

    const transactions = [];
    for (var i = 0; i < total; i++) {
      const transaction = await crowdfunding.contributorContributions(
        account,
        i
      );
    const temp = transaction;
    console.log(temp);
      transactions.push(transaction);
    }
    setTransations(transactions);
    console.log(transactions);
    
    const women = campaigns.filter(
      (campaign) => campaign.category === 'women rights'
    );
    console.log(women);
    setWomen(women);
    const child = campaigns.filter(
      (campaign) => campaign.category === 'child rights'
    );
    console.log(child);
    setChild(child);
    const labour = campaigns.filter(
      (campaign) => campaign.category === 'labour rights'
    );
    console.log(labour);
    setLabour(labour);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <ul className="nav__links">
          <li>
            <a href="#Clothing & Jewelry">women rights</a>
          </li>
          <li>
            <a href="#Electronics & Gadgets">children rights</a>
          </li>
          <li>
            <a href="#Toys & Gaming">labour rights</a>
          </li>
        </ul>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            {account && <AccountBalance balance={balance} />}
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid> */}
          {/* <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid> */}
          <Grid item xs={12}>
            <>
              {women && child && labour && (
                // <WatchList campaigns/>
                <Section
                  title="All campaigns"
                  items={campaigns}
                  togglePop={togglePop}
                />
              )}
              {women && child && labour && (
                // <WatchList campaigns/>
                <Section
                  title="Campaigns related to Women Rights"
                  items={women}
                  togglePop={togglePop}
                />
              )}
              {women && child && labour && (
                // <WatchList campaigns/>
                <Section
                  title="Campaigns related to Child Rights"
                  items={child}
                  togglePop={togglePop}
                />
              )}
              {women && child && labour && (
                // <WatchList campaigns/>
                <Section
                  title="Campaigns related to Labour Rights"
                  items={labour}
                  togglePop={togglePop}
                />
              )}
            </>

            {toggle && (
              <CampaignBox
                item={item}
                provider={provider}
                account={account}
                crowdfunding={crowdfunding}
                togglePop={togglePop}
              />
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
