import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import TextField from "@mui/material/TextField";
// Components
// import Rating from './Rating'
import BigNumber from "bignumber.js";
import { getValue } from "@mui/system";
// import Web3 from 'node_modules/web3/dist/web3.min.js';
import Web3 from "web3";

import Crowdfunding from "../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json";
import config from "config.json";

const web3 = new Web3("http://localhost:8545");
const tokens = (n) => {
  return ethers.utils.parseEther(n);
};
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(
  contractAbi,
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

const Product = ({ item, provider, account, crowdfunding, togglePop }) => {
  const [contribution, setContribution] = useState(null);
  const [hasContributed, setHasContributed] = useState(false);
  const [deadline, setDeadline] = useState(null);
  const [amount, setAmount] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [manager, setManager] = useState(null);

  const fetchDetails = async () => {
    const campaigns = [];
    for (var i = 0; i < 6; i++) {
      const campaign = await crowdfunding.campaigns(i + 1);
      campaigns.push(campaign);
    }
    setManager(await crowdfunding.manager());

    const deadline = parseInt(item.campaignDeadline.toString());
    setDeadline(deadline);
    // console.log(deadline);
    deadline > Date.now() ? setIsOpen(true) : setIsOpen(false);

    // console.log("dead",deadline)
    // console.log(Date.now())

    // const events = await crowdfunding.queryFilter("paidCampaign");
    // const campaignContributions = events.filter(
    //   (event) =>
    //     event.args.contributor_ === account &&
    //     event.args.id_.toString() === item.ID.toString()
    // );

    // if (campaignContributions.length === 0) return;

    // const contribution = await crowdfunding.campaignContributions(
    //   item.id,
    //   campaignContributions[0].args.id_
    // );
    // setContribution(contribution);
  };

  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);

    return remainingDays.toFixed(0);
  };

  const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);

    return percentage;
  };

  const forwarderOrigin = "http://localhost:8545";

  const initialize = () => {
    const onboardButton = document.getElementById("product__buy");

    const isMetaMaskInstalled = () => {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

    const onClickInstall = () => {
      onboardButton.innerText = "Onboarding in progress";
      onboardButton.disabled = true;
      onboarding.startOnboarding();
    };

    const onClickConnect = async () => {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error(error);
      }
    };
    const MetaMaskClientCheck = () => {
      if (!isMetaMaskInstalled()) {
        onboardButton.innerText = "Click here to install MetaMask!";
        onboardButton.onclick = onClickInstall;
        //The button is now disabled
        onboardButton.disabled = true;
      } else {
        onboardButton.innerText = "Connect";
        onboardButton.onclick = onClickConnect;
        onboardButton.disabled = false;
      }
    };

    MetaMaskClientCheck();
  };

  const buyHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    // console.log(accounts[0]);

    // let input = (document.getElementById('userInput') as HTMLInputElement)
    //   .value;
    let input = document.getElementById("userInput").value;
    // let amount = BigNumber.toString()
    const amount = tokens(input);
    setAmount(amount);
    console.log(input, typeof input);
    console.log(item.ID.toString())
    // const x = parseInt(item.id.toString())
    
    var etherAmount = web3.utils.toBN(
      input
    );
    var weiValue = web3.utils.toWei(etherAmount, "ether");
    contract.methods.payCampaign(parseInt(item.ID.toString())).send({ from: accounts[0], value: weiValue });

    console.log(camp)


    // Buy item...
    // let wallet = new ethers.Wallet(
    //   '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
    // );
    // let walletSigner = wallet.connect(provider);
    // let currentGasPrice = provider.getGasPrice();
    // let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
    // console.log(ethers.utils.parseEther(input));

    // // const web3 = new Web3(
    // //   new Web3.providers.HttpProvider('http://127.0.0.1:8545/')
    // // );
    // const accountNonce =
    //   '0x' +
    //   (await provider.getTransactionCount(
    //       '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    //       'latest'
    //     )
    //   ).toString(16);
    // const tx = {
    //   nonce: accountNonce,
    //   from: accounts[0],
    //   to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    //   value: ethers.utils.parseEther(input),
    //   gasLimit: ethers.utils.hexlify('0x300000'), // 100000
    //   gasPrice: ethers.utils.hexlify('0x30000000'),
    // };
    // walletSigner.sendTransaction(tx).then((transaction) => {
    //   console.dir(transaction);
    //   alert('Send finished!');
    // });

    // const accounts = await web3.eth.getAccounts();
    // console.log(contract);
    // await contract.methods
    //   .payCampaign(item.id)
    //   .send({ from: accounts[0] });

    // console.log(typeof(ethers.utils.formatUnits(amount, 'ether')))
    // let transaction = await crowdfunding
    //   .connect(accounts[0])
    //   .payCampaign(item.id, { value: ethers.utils.formatUnits(input, 'ether')});

    // await transaction.wait();

    // setHasContributed(true);
  };

  useEffect(() => {
    fetchDetails();
  }, [hasContributed]);

  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <img src="/static/images/2.png" alt="Product" />
        </div>
        <div className="product__overview">
          <h1>{item.title}</h1>

          {/* <Rating value={item.rating} /> */}

          <hr />

          <h3>{item.location}</h3>

          <h2>
            Goal : {ethers.utils.formatUnits(item.goal.toString(), "ether")} ETH
          </h2>

          <hr />
          <h2>
            Pledged Amount :{" "}
            {ethers.utils.formatUnits(item.pledgedAmt.toString(), "ether")} ETH
          </h2>
          {/* <h3>{deadline}</h3> */}
          <hr />
          <h2>Overview</h2>

          <p>{item.description}</p>
        </div>

        <div className="product__order">
          {/* <h1>{ethers.utils.formatUnits(item.goal.toString(), 'ether')} ETH</h1>
           */}
  
          <h3>
            <strong>Campaign Deadline:</strong>
          </h3>
          <h3>
            <strong>
              {new Date(deadline).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </strong>
          </h3>
          <br />
          <h3>
            <strong>
              Campaign Manager:
            </strong>
          </h3>
          <h3>
          {manager.slice(0,5)+"..."+manager.slice(25,30)}
          </h3>
          <br/>
          <h3>
            <strong>Minimum contribution: </strong>
          </h3>
          <h3>
            <strong>
              {ethers.utils.formatUnits(
                item.minContribution.toString(),
                "ether"
              )}{" "}
              ETH
            </strong>
          </h3>
          {/* {item.stock > 0 ? (
            <p>In Stock.</p>
          ) : (
            <p>Out of Stock.</p>
          )} */}
          <br />
          {deadline > Date.now() ? (
            <p>Contributions open!</p>
          ) : (
            <p>Contributions closed!</p>
          )}

          <br />
          {isOpen && (
            <>
              <TextField
                id="userInput"
                type="number"
                label="Contribution Amount"
                variant="outlined"
              />
              <br />
              {/* <input id="userInput" type="text" placeholder="Amount" /> */}
              <button className="product__buy" onClick={buyHandler}>
                Contribute Now!
              </button>
            </>
          )}
          <br />
          {contribution && (
            <div className="product__bought">
              Contributed on <br />
              <strong>
                {new Date(
                  Number(contribution.time.toString() + "000")
                ).toLocaleDateString(undefined, {
                  weekday: "long",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </strong>
            </div>
          )}
          <p>made with cheems </p>
        </div>

        <button onClick={togglePop} className="product__close">
          <img src="/static/images/close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default Product;
