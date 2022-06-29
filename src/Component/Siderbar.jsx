import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
} from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


export default function Siderbar(props) {
    const {setMode,mode} = props;
    return (
        <Box
            
            flex={1}
            p={2}
            sx={{
                display: { xs: 'none', sm: 'block' }
            }}
        >
            <Box position={'fixed'}>
                <List direction="column">
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#pages">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#groups">
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#marketplace">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#friends">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#setting">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        padding: '8px 0',
                    }}>
                        <ListItemButton component='a' href="#profile">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={()=>{
                                mode==='dark'? setMode('light'):setMode("dark")
                            }}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
