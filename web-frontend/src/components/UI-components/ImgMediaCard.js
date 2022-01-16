import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../App.css"

export default function ImgMediaCard(props) {
  return (
      <Card className="card-main" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="190"
          image={props.link}
        />
        <CardContent className="cardcontent">
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
        <CardActions className="order-btn">
          <Button variant="contained" className="order">Order Now</Button>
        </CardActions>
      </Card>
  );
}
