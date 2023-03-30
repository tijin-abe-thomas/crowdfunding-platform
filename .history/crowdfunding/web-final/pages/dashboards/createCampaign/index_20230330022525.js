import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NextLink from 'next/link';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from '@/components/Footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
// import { ethers } from 'ethers';
// import { useStateContext } from 'C:/Users/91905/Desktop/blockchain-crowdfunding/tokyo/pages/dashboards/crypto/contexts/index.js';

import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import DashboardCrypto from '..';
import FormField from './FormField';
// import { useStateContext } from './contractInfo.js';

import { ethers } from 'ethers';
import Web3 from 'web3';
import Crowdfunding from '../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json';
import config from 'config.json';
const tokens = (n) => {
  return ethers.utils.parseUnits(n, 'ether');
};
const web3 = new Web3('http://localhost:8545');
// const StateContext = createContext();
const smartContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(
  contractAbi,
  '0x5FbDB2315678afecb367f032d93F642f64180aa3'
);

function CreateCampaign() {
  //   const navigate = useNavigate();

  // const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    id: '',
    title: '',
    description: '',
    location: '',
    category: '',
    minContribution: '',
    goal: '',
    campaignDeadline: ''
    // image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [crowdfunding, setCrowdfunding] = useState(null);
  const [campaigns, setCampaigns] = useState(null);

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

    const network = await provider.getNetwork();
    console.log(network);

    const crowdfunding = new ethers.Contract(
      smartContractAddress,
      contractAbi,
      provider
    );
    setCrowdfunding(crowdfunding);
    console.log(crowdfunding);

    console.log(await provider.getCode(smartContractAddress));

    const campaigns = [];
    for (var i = 0; i < 6; i++) {
      const campaign = await crowdfunding.campaigns(i + 1);
      campaigns.push(campaign);
    }
    setCampaigns(campaigns);
    console.log(campaigns);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const uploadCampaign = async (form) => {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(ethers.utils.parseUnits(form.minContribution, 'ether'))
      const data = await contract.methods
        .uploadCampaign(
          parseInt(form.id),
          form.title,
          form.description,
          form.location,
          form.category,
          ethers.utils.parseUnits(form.minContribution, 'ether'),
          ethers.utils.parseUnits(form.goal, 'ether'),
          parseInt(form.deadline) * 86400 // deadline,
        )
        .send({ from: accounts[0] });
      await data.wait()
      console.log('contract call success', data);
    } catch (error) {
      console.log('contract call failure', error);
    }
  };

  const getCampaigns = async () => {
    return campaigns;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    console.log(typeof(parseInt(form.id)))
    uploadCampaign(form);
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

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <Divider />
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="w-full mt-[65px] flex flex-col gap-[30px]"
                  >
                    {/* <Box
                      component=""
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                      }}
                      noValidate
                      autoComplete="off"
                    > */}

                    <h3>Your Name*</h3>
                    <FormField
                      placeholder="John Doe"
                      inputType="text"
                      isTextArea={false}
                      value={form.name}
                      handleChange={(e) => handleFormFieldChange('name', e)}
                    />

                    <h3>Campaign ID *</h3>
                    <FormField
                      placeholder="123"
                      inputType="number"
                      isTextArea={false}
                      value={form.id}
                      handleChange={(e) => handleFormFieldChange('id', e)}
                    />
                    <h3>Campaign Title *</h3>
                    <FormField
                      placeholder="John Doe"
                      inputType="text"
                      isTextArea={false}
                      value={form.title}
                      handleChange={(e) => handleFormFieldChange('title', e)}
                    />
                    <h3>Campaign Description *</h3>
                    <FormField
                      placeholder="Describe"
                      isTextArea
                      value={form.description}
                      inputType="text"
                      handleChange={(e) =>
                        handleFormFieldChange('description', e)
                      }
                    />

                    <h3>Campaign Location *</h3>
                    <FormField
                      placeholder="Mumbai"
                      inputType="text"
                      value={form.location}
                      isTextArea={false}
                      handleChange={(e) => handleFormFieldChange('location', e)}
                    />
                    <h3>Campaign Category *</h3>
                    <FormField
                      placeholder="Women Rights"
                      inputType="text"
                      isTextArea={false}
                      value={form.category}
                      handleChange={(e) => handleFormFieldChange('category', e)}
                    />
                    <h3>Campaign Deadline in days*</h3>
                    <FormField
                      placeholder="60"
                      inputType="number"
                      isTextArea={false}
                      value={form.campaignDeadline}
                      handleChange={(e) =>
                        handleFormFieldChange('campaignDeadline', e)
                      }
                    />

                    <h3>Minimum Contribution *</h3>
                    <FormField
                      placeholder="500"
                      inputType="number"
                      isTextArea={false}
                      value={form.minContribution}
                      handleChange={(e) =>
                        handleFormFieldChange('minContribution', e)
                      }
                    />
                    <h3>Campaign Goal *</h3>
                    <FormField
                      placeholder="200000"
                      inputType="number"
                      value={form.goal}
                      isTextArea={false}
                      handleChange={(e) => handleFormFieldChange('goal', e)}
                    />

                    <Button
                      sx={{ margin: 1 }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      //   onClick={() => {
                      //     handleSubmit();
                      //   }}
                    >
                      Submit Campaign
                    </Button>
                  </form>
                  {/* </Box> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

CreateCampaign.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateCampaign;
