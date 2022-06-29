
import {
    Box,
} from '@mui/material'
import React from 'react'
import Post from './Post'


export default function Feed() {
    return (
        <Box
            flex={4}
            p={2}

        >
           <Post urls1="https://material-ui.com/static/images/cards/paella.jpg"/> 
           <Post urls1="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> 
           <Post urls1="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"/> 
           <Post urls1="https://material-ui.com/static/images/cards/paella.jpg"/> 
        </Box>
    )
}
