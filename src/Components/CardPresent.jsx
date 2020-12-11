import React, { useState } from 'react'
import {Button, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField, Typography, Checkbox} from '@material-ui/core'
import useStyles from '../styles/styles'
import AddIcon from '@material-ui/icons/Add';

const CardPresent = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

    return <>
        <Typography className = {classes.title}>Анкета соискателя</Typography>
        <Typography className = {classes.title} style = {{top:'206px', fontSize:'22px'}}>Личные данные</Typography>
        <Grid container className = {classes.nameContainer}>
            <Typography className = {classes.name}>Имя *</Typography>
            <Typography className = {classes.name}>Фамилия *</Typography>
        </Grid>
        <Grid container className = {classes.nameContainer} style ={{top:'292px'}}>
            <TextField label = 'Имя' variant = 'outlined' className = {classes.inputs}></TextField>
            <TextField label = 'Фамилия' variant = 'outlined' className = {classes.inputs}></TextField>
        </Grid>
        <Typography className = {classes.name} style = {{position:'absolute',top:'380px', left:'256px'}}>Электронная почта *</Typography>
        <Grid container className = {classes.nameContainer} style = {{top:'404px'}}>
            <TextField variant = 'outlined' className = {classes.inputs} style = {{marginRight:'80px'}} label = 'Электронная почта'></TextField>
            <Button style = {{width:'256px'}}>
                <AddIcon style={{position:'absolute', left:0}}/>
                <Typography className = {classes.resume}> Загрузить резюме</Typography>
            </Button>
        </Grid>
        <Grid container className = {classes.maleContainer} style = {{top:'492px', height:'38px'}}>
            <Typography className = {classes.maleTitle}>Пол *</Typography>
            <Typography className = {classes.maleTypography}>укажите пол</Typography>
        </Grid>
        <Grid container className = {classes.maleContainer} style = {{top:'557px'}}>
            <RadioGroup row aria-label="gender" name="gender1">
                <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                <FormControlLabel style = {{position:'absolute', left:'174px'}} value="male" control={<Radio />} label="Женский" />
            </RadioGroup>
        </Grid>
        <Typography className = {classes.maleTitle} style = {{top:'624px', left:'256px', height:'38px', width:'928px'}}>GitHub</Typography>
        <Grid className = {classes.nameContainer} style = {{top:'686px'}}>
            <Typography className = {classes.name}>Вставьте ссылку на GitHub</Typography>
            <TextField label = 'Вставьте ссылку на GitHub' variant = 'outlined' style = {{width:'256px', height:'40px', marginBottom:'44px'}}></TextField>
            <Grid container style = {{marginBottom:'48px'}}>
                <Checkbox color = 'primary' checked = {checked} onChange = {handleChange} style = {{marginRight:'8px'}} />
                <Typography className = {classes.name} style = {{width:'294px' }}>* Я согласен с <Link>политикой конфиденциальности</Link></Typography>
            </Grid>
            <Button style = {{width:'360px',height:'40px'}}>Отправить</Button>
        </Grid>
        
    </>
}

export default CardPresent