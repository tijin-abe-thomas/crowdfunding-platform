import { useContext } from 'react';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Button,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
import Web3 from "web3";
import User from "../../../build/contracts/User.json";

const web3 = new Web3("http://localhost:7545"); // initialize web3 with your Ethereum provider URL
const contractAddress = User.networks[5777].address; // replace with the actual address of your deployed smart contract
const contractAbi = User.abi; // import the ABI of your smart contract

const profileContract = new web3.eth.Contract(contractAbi, contractAddress);

async function getName(id: address): Promise<string> {
  const result = await profileContract.methods.getName(id).call(); // call the getName function and get the result
  return result;
}
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ethers } from 'ethers';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderMenu from './Menu';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [account, setAccount] = useState(null);
  // const navigate = useNavigate();
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <HeaderMenu />
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        {/* {account ? (
          // navigate('create-campaign')
          <NextLink href="/createCampaign" passHref>
            <Button
              className={currentRoute === '/createCampaign' ? 'active' : ''}
              disableRipple
              component="a"
            >
              Create Campaign
            </Button>
          </NextLink>
        ) : (
          <button
            type="button"
            className="nav__connect"
            onClick={connectHandler}
          >
            Connect
          </button>
        )} */}

        {account ? (
          <NextLink href="/dashboards/crypto/createCampaign" passHref>
          <Button
            className={currentRoute === '/createCampaign' ? 'active' : ''}
            disableRipple
            component="a"
          >
            Create Campaign
          </Button>
        </NextLink>
        ) : (
          <button
            type="button"
            className="nav__connect"
            onClick={connectHandler}
          >
            Connect
          </button>
        )}

        <HeaderUserbox />

        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
