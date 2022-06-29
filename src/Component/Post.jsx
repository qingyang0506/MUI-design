import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';
import { Favorite, Share, MoreVert, FavoriteBorder } from '@mui/icons-material';

export default function Post(props) {

    const {urls1} = props;
    
    return (
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        QL
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={urls1}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>

            </CardActions>
        </Card>
    )
}
