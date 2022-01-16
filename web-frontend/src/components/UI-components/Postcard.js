import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import '../../App.css'

import ModeCommentIcon from '@mui/icons-material/ModeComment';


export default function PostCard(props) {
    const { post, email, name, time } = props;


    return (
        <div className="postcard">
            <Card sx={{ maxWidth: "80%" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {name[0]}
                        </Avatar>
                    }

                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }


                    id="post-name"
                    title={name}
                    subheader={time}

                />
                <hr style={{width:"100%"}}/>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" id="post-item">
                        
                        {post}
                    </Typography>
                </CardContent>




                <CardActions>
                    <div className="cardfooter">    
                        <IconButton className="cardicon" aria-label="React">
                            <ThumbUpAltIcon style={{marginRight:"40px"}} />
                        </IconButton>
                        <IconButton className="cardicon" aria-label="Comment">
                            <ModeCommentIcon style={{marginRight:"40px"}} />
                        </IconButton>
                        <IconButton className="cardicon" aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </div>
                </CardActions>

            </Card>
        </div>
    );
}