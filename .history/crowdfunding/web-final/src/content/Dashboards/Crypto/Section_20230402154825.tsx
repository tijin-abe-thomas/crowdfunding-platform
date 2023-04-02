import { ethers } from 'ethers';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Web3 from "web3";
const web3 = new Web3("http://localhost:7545");
import Crowdfunding from '../../../../build/contracts/Crowdfunding.json'
const contractAddress = Crowdfunding.networks[5777].address;
const contractAbi = Crowdfunding.abi;
const contract = new web3.eth.Contract(
  contractAbi,
  contractAddress
);

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// Components
// import Rating from './Rating'

const Section = ({ title, items, togglePop }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleVote = (id) => {
    console.log("voting", id);
    contract.methods
  }

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
                <h4>
                  Goal Amount :{' '}
                  {ethers.utils.formatUnits(item.goal.toString(), 'ether')}
                </h4>
                <h4>
                  Pledged Amount :{' '}
                  {ethers.utils.formatUnits(
                    item.pledgedAmt.toString(),
                    'ether'
                  )}
                </h4>
              </CardContent>
            </div>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick = {() => {
                handleVote(item.ID)
              }}>
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
