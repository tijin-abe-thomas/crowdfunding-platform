import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  useTheme,
  styled,
} from "@mui/material";

import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import { BigNumber } from "bignumber.js";
import Crowdfunding from "../../../../../build/contracts/Crowdfunding.json";
const web3 = new Web3("http://localhost:7545");
const contractAddress = Crowdfunding.networks[5777].address;
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(contractAbi, contractAddress);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`
);

function RecentActivity() {
  const theme = useTheme();
  const [account, setAccount] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [displayTotal, setDisplayTotal] = useState(null);

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
    console.log(account);

    const noOfCampaigns = await contract.methods.noOfCampaigns().call();
    const total = parseInt(noOfCampaigns.toString());
    console.log(parseInt(noOfCampaigns.toString()));

    const contributions = [];
    const display
    for (var i = 0; i < total; i++) {
      const contribution = await contract.methods.contributorContributions(
        account,
        i
      );
      contributions.push(contribution);

    }
    setContributions(contributions);


  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <Card>
      <CardHeader title="Recent Activity" />
      <Divider />
      <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <ShoppingBagTwoToneIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h3">Contributions</Typography>

          <Box pt={2} display="flex">
            <Box pr={8}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Total
              </Typography>
              <Typography variant="h2">485</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Failed
              </Typography>
              <Typography variant="h2">8</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <FavoriteTwoToneIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h3">Liked</Typography>

          <Box pt={2} display="flex">
            <Box pr={8}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Products
              </Typography>
              <Typography variant="h2">64</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Lists
              </Typography>
              <Typography variant="h2">15</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <StarTwoToneIcon />
        </AvatarPrimary> */}
      {/* <Box pl={2} flex={1}>
          <Typography variant="h3">Reviews</Typography>

          <Box pt={2} display="flex">
            <Box pr={8}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Total
              </Typography>
              <Typography variant="h2">654</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontSize: `${theme.typography.pxToRem(16)}` }}
              >
                Useful
              </Typography>
              <Typography variant="h2">21</Typography>
            </Box>
          </Box>
        </Box> */}
      {/* </Box> */}
    </Card>
  );
}

export default RecentActivity;
