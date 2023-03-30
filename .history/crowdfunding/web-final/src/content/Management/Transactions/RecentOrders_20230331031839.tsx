import { Card } from "@mui/material";
import { CryptoOrder } from "@/models/crypto_order";
import RecentOrdersTable from "./RecentOrdersTable";
import { subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import Crowdfunding from "../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json";
import { ethers } from "ethers";

const smartContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractAbi = Crowdfunding.abi;

function RecentOrders() {
  const [cryptoOrders, setCryptoOrders] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [crowdfunding, setCrowdfunding] = useState(null);
  const [campaigns, setCampaigns] = useState(null);
  const [transactions, setTransations] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [isClosed, setIsClosed] = useState(null);
  const [status, setStatus] = useState(null);
  // const cryptoOrders: CryptoOrder[] = []

  // const temp: CryptoOrder[] = [
  //   {
  //     id: '10',
  //     status: 'completed',
  //     title: '',
  //     description: '',
  //     sourceName: '',
  //     sourceDesc: '',
  //     amountCrypto: 0
  //   }
  // ];

  const helperFunc = async (isClosed, campaign) => {
    // isClosed && campaign.pledgedAmt < campaign.goal
    //   ? setStatus("failed")
    //   : setStatus("completed");

    // !isClosed
    //   ? setStatus("pending")
    //   : campaign.pledgedAmt < campaign.goal
    //   ? setStatus("failed")
    //   : setStatus("completed");

    if(!isClosed){
      setStatus("pending")
    }  
    else
    {
      if(campaign.pledgedAmt < campaign.goal)
      setStatus("failed")
      else
      setStatus("completed")
    }
  };


  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <Card>
      {cryptoOrders && (
        <RecentOrdersTable
          cryptoOrders={cryptoOrders}
          account={account}
          balance={balance}
        />
      )}
    </Card>
  );
}

export default RecentOrders;
