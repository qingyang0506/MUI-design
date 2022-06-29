import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

const UserBox = styled(Box)({
    display: "flex",
    alignItems: 'center',
    gap: 10,
    mb: 10
})

export default function Add() {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Tooltip title="Add" sx={{
                position: 'fixed',
                bottom: 30,
                left: { xs: "cal(50%-25px)", md: '30px' },
            }}
                onClick={() => {
                    setOpen(true);
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" textAlign={'center'} color="gray" fontSize={20}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            sx={{ width: 30, height: 30 }}
                        >
                        </Avatar>
                        <Typography variant='h6' fontWeight={500}>QingyangLi</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            marginTop: '30px',
                            width: '100%'
                        }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder={"what's on your mid?"}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </Box>
    )
}
