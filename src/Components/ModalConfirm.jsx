import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'547px',
    height:'244px'
  },
}));

export default function TransitionsModal({handleCloseConfirm, openModalConfirm, firstName, handleCloseConfirmWithNull}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModalConfirm}
        onClose={handleCloseConfirm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalConfirm}>
            <form onSubmit = {handleCloseConfirmWithNull}>
            <Grid className = {classes.paper} style = {{textAlign:'center'}}>
                <Grid container justify = 'center' style = {{position:'relative', marginTop:'40px', marginBottom:'8px'}}>
                    <Typography variant = 'h6' >Спасибо {firstName}!</Typography>
                    <ClearIcon onClick = {handleCloseConfirm} style = {{position:'absolute', right:0, cursor:'pointer'}} />
                </Grid>
            <Typography style = {{marginBottom:'40px'}}>Мы скоро свяжемся с вами</Typography>
            <Button color = 'primary' variant = 'contained' type = 'submit' style = {{width:'360px', height:'40px'}}>Понятно</Button>
            </Grid>
            </form>
        </Fade>
      </Modal>
    </div>
  );
}