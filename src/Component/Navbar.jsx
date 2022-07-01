
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem, Modal } from '@mui/material'
import React, { createRef, useState } from 'react'
import { Pets, Mail, Notifications, ManageSearch, Error, Done } from '@mui/icons-material'

const StyleToolbar = styled(Toolbar)(({theme})=>({
    display: "flex",
    justifyContent: "space-between",
}));

const Search = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 350,
    height: 210,
    borderRadius: 5,
    boxShadow: 24,
    backgroundColor: "background.paper",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [open1, setOpen1] = useState(false);
    const [st, setSt] = useState(false);
    const Ref = createRef();
    return (
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase  inputRef={Ref} sx={{ width: '80%',color:"gray"}} placeholder='search...' onChange={(e) => {
                        setInput(e.target.value);
                    }} />
                    <ManageSearch sx={{
                        color: 'blue',
                        zIndex: 999,
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                        onClick={() => {
                            
                            if (input.trim() === "") {
                                setOpen1(true);
                                setSt(false);
                            } else {
                                setOpen1(true);
                                setSt(true);
                            }
                            Ref.current.value = "";
                        }} />
                </Search>
                <Modal
                    open={open1}
                    onClose={() => {
                        setOpen1(false);
                        setInput("");
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {
                        st ? (
                            <Box sx={style} textAlign={'center'} >
                                <Done color='success' sx={{marginRight:"5px"}}/>
                                <Typography variant='h6' fontWeight={100} color="gray">{input}</Typography>
                            </Box>
                        ) : (
                            <Box sx={style} textAlign={'center'} >
                                <Error color="error" sx={{ marginRigth: "5px" }} />
                                <Typography variant='h6' fontWeight={100} color="gray">Please enter the content</Typography>
                            </Box>
                        )
                    }

                </Modal>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => {
                        setOpen(true);
                    }}
                        sx={{
                            width: 30,
                            height: 30,
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                        src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                </Icons>
            </StyleToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    position: "absolute",
                    top: 35,
                    right: 25,
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
