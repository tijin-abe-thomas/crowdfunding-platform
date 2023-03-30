import React, { useEffect, useContext, createContext } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import Crowdfunding from '../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json';
import config from 'config.json';

const web3 = new Web3('http://localhost:8545');
const StateContext = createContext();
const smartContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(
  contractAbi,
  '0x5FbDB2315678afecb367f032d93F642f64180aa3'
);

export const StateContextProvider = ({ children }) => {
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
      config[network.chainId].Crowdfunding.address,
      Crowdfunding,
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
      const data = await contract.methods
        .uploadCampaign(
          form.id,
          form.title,
          form.description,
          form.location,
          form.category,
          form.minContrbution,
          form.goal,
          form.deadline * 86400 // deadline,
        )
        .send({ from: account });
      console.log('contract call success', data);
    } catch (error) {
      console.log('contract call failure', error);
    }
  };

  const getCampaigns = async () => {
    return campaigns;
  };

  return (
    <StateContext.Provider
      value={{
        account,
        contract,
        uploadCampaign,
        getCampaigns
      }}
    ></StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
