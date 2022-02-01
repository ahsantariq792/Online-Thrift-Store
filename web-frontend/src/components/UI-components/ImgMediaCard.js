import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../App.css"
import { Link } from 'react-router-dom'


export default function ImgMediaCard(props) {
  console.log("image", props.image)
  return (
    <Card className="card-main" sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        alt={props.title}
        height="190"
        image={props.image}
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div" className="cardtitle">
          {props.title}
        </Typography>
        <Typography variant="h6">
          {props.make}
        </Typography>
        <Typography variant="h6" className="cardprice">
          Rs {props.price}
        </Typography>
        {/* <Typography variant="h6">
          Condition: {props.condition}
        </Typography> */}
      </CardContent>
      <CardActions className="order-btn">
        <Link to={`/dash/${props.id}`}>
          <Button variant="contained" className="order">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
