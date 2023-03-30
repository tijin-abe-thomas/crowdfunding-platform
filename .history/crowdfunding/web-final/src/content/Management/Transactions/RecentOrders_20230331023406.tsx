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

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
    console.log(account);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const ethbalance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(ethbalance).toString());

    const network = await provider.getNetwork();

    const crowdfunding = new ethers.Contract(
      smartContractAddress,
      contractAbi,
      provider
    );
    setCrowdfunding(crowdfunding);

    const campaigns = [];
    for (var i = 0; i < 6; i++) {
      const campaign = await crowdfunding.campaigns(i + 1);
      campaigns.push(campaign);
    }
    setCampaigns(campaigns);

    const cryptoOrders = [];
    const transactions = [];
    for (var i = 0; i < 6; i++) {
      const transaction = await crowdfunding.contributorContributions(
        account,
        i+1
      );
      const deadline = parseInt(campaigns[i].campaignDeadline.toString());
      setDeadline(deadline);
      console.log(deadline)

      deadline < Date.now() ? setIsClosed(true) : setIsClosed(false);
      console.log(isClosed)
      isClosed && campaigns[i].pledgedAmt < campaigns[i].goal
        ? setStatus("failed")
        : setStatus("completed");
      isClosed == false
        ? setStatus("pending")
        : campaigns[i].pledgedAmt < campaigns[i].goal
        ? setStatus("failed")
        : setStatus("completed");

      console.log(status);
      const cryptoOrder = {
        id: i.toString(),
        status: status,
        title: campaigns[i].title,
        description: campaigns[i].description,
        sourceName: account,
        sourceDesc: balance,
        amountCrypto: ethers.utils.formatUnits(transaction.toString(), "ether"),
      };
      console.log(cryptoOrder);
      cryptoOrders.push(cryptoOrder);
    }

    setTransations(transactions);
    setCryptoOrders(cryptoOrders);
  };

  useEffect(() => {
    loadBlockchainData();
    console.log("hi");
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
