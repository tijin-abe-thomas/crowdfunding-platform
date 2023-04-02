import { ChangeEvent, useState } from "react";
import {
  Box,
  Grid,
  Radio,
  FormControlLabel,
  Typography,
  Card,
  CardHeader,
  Divider,
  lighten,
  CardActionArea,
  CardContent,
  Tooltip,
  IconButton,
  Avatar,
  styled,
} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import CampaignCard from ""
import NextLink from "next/link";
import React, { useEffect } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import { BigNumber } from "bignumber.js";
import Crowdfunding from "../../../../../build/contracts/Crowdfunding.json";
import CampaignCard from "./CampaignCard";
const web3 = new Web3("http://localhost:7545");
const contractAddress = Crowdfunding.networks[5777].address;
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(contractAbi, contractAddress);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardLogo = styled("img")(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);

function MyCards() {
  const data = {
    savedCards: 7,
  };

  const [selectedValue, setSelectedValue] = useState("a");
  const [account, setAccount] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [displayTotal, setDisplayTotal] = useState(null);
  const [displayFailed, setDisplayFailed] = useState(null);
  const [campaigns, setCampaigns] = useState(null);
  const [deadline, setDeadline] = useState(null);

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
    console.log(account);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);

    const network = await provider.getNetwork();
    console.log(network);

    const crowdfunding = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );

    if (account == (await crowdfunding.manager())) {
      const campaigns = [];
      const noOfCampaigns = await crowdfunding.noOfCampaigns();
      const total = parseInt(noOfCampaigns.toString());
      for (var i = 0; i < total; i++) {
        const campaign = await crowdfunding.campaigns(i + 1);
        campaigns.push(campaign);
      }
      console.log(campaigns);
      setCampaigns(campaigns);
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <Card>
      <CardHeader
        subheader={data.savedCards + " campaigns"}
        title="Your campaigns"
      />
      <Divider />
      {campaigns && (
        <Box p={3}>
          <Grid container spacing={3}>
            <CampaignCard item = {item}/>
            {/* <Grid item xs={12} sm={6}>
              <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
                <Box display="flex" alignItems="center">
                  <CardLogo
                    src="/static/images/placeholders/logo/visa.png"
                    alt="Visa"
                  />
                  <Box>
                    <Typography variant="h3" fontWeight="normal">
                      {campaigns[0].title}
                    </Typography>
                    <Typography variant="subtitle2">
                      Expires:{" "}
                      <Typography component="span" color="text.primary">
                        {

                        }
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  pt={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                ></Box>
              </CardCc>
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <Tooltip arrow title="Click to add a new card">
                <CardAddAction>
                  <CardActionArea sx={{ px: 1 }}>
                    <CardContent>
                      <NextLink
                        href="/dashboards/crypto/createCampaign"
                        passHref
                      >
                        <AvatarAddWrapper>
                          <AddTwoToneIcon fontSize="large" />
                        </AvatarAddWrapper>
                      </NextLink>
                    </CardContent>
                  </CardActionArea>
                </CardAddAction>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      )}
    </Card>
  );
}

export default MyCards;
