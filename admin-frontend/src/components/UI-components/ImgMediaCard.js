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
    <Card className="card-main" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.title}
        height="190"
        image={props.image}
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
          Title: {props.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.make}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Condition: {props.condition}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {props.price}
        </Typography>
      </CardContent>
      <CardActions className="order-btn">

        <Link to = {`/loan_details/${props.id}`} style={{textDecoration: "none"}}>
          <Button variant="contained" className="order" color="success">See Details</Button>
        </Link>


      </CardActions>
    </Card>
  );
}
