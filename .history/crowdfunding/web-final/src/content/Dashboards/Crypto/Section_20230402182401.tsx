import { ethers } from "ethers";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Rating from '@mui/material/Rating';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Web3 from "web3";
import { useEffect, useState } from "react";
const web3 = new Web3("http://localhost:7545");
import Crowdfunding from "../../../../build/contracts/Crowdfunding.json";
import { VolunteerActivismOutlined } from "@mui/icons-material";
const contractAddress = Crowdfunding.networks[5777].address;
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(contractAbi, contractAddress);

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Components
// import Rating from './Rating'

const Section = ({ title, items, campaigns, togglePop }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [votes, setVotes] = useState(null);

  const handleVote = async (item) => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    console.log("voting", item.ID.toString());
    contract.methods.vote(parseInt(item.ID.toString())).send({ from: accounts[0] });
    console.log("item votes",item.voteCount.toString())
    
    console.log("votes percentage",votes[parseInt(item.ID.toString())])
  };

  const fetchDetails = async () => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const crowdfunding = new ethers.Contract(
    //   smartContractAddress,
    //   Crowdfunding,
    //   provider
    // );

    const noOfCampaigns = await contract.methods.noOfCampaigns().call();
    const total = parseInt(noOfCampaigns.toString());
    let totalVotes = 0;
    console.log(typeof(totalVotes))

    for(var i=0; i<total; i++)
    {
      let x = parseInt(campaigns[i].voteCount.toString())
      totalVotes += x
    }

    let votes = []
    for(var i=0; i<items.length;i++)
    {
      votes.push(parseInt(items[i].voteCount.toString())/ totalVotes);
    }
    setVotes(votes);
    console.log("fsdhkaf",votes)
    console.log("total votes",totalVotes);
  }
  useEffect(() => {
    fetchDetails();
  },[]);

  return (
    <div className="cards__section">
      <h3 id={title}>{title}</h3>

      <hr />

      <div className="cards">
        {items.map((item, index) => (
          <Card sx={{ maxWidth: 345 }}>
            <div
              className="campaignCard"
              key={index}
              onClick={() => togglePop(item)}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <div
                    className="campaignCard"
                    key={index}
                    // onClick={() => togglePop(item)}
                  >
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                }
                title={item.title}
                subheader={item.location}
              />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/2.png"
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description.slice(0, 150)}
                </Typography>
                <br />
                <br />
                <h4>
                  Goal Amount :{" "}
                  {ethers.utils.formatUnits(item.goal.toString(), "ether")}
                </h4>
                <h4>
                  Pledged Amount :{" "}
                  {ethers.utils.formatUnits(
                    item.pledgedAmt.toString(),
                    "ether"
                  )}
                </h4>
              </CardContent>
            </div>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  handleVote(item);
                }}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Section;
