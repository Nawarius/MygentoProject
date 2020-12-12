import React, { useState } from 'react'
import {Button, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField, Typography, Checkbox, Paper} from '@material-ui/core'
import useStyles from '../styles/styles'
import AddIcon from '@material-ui/icons/Add';


const CardPresent = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

    return <>
    
    <Grid className = {classes.mainContainer}>
        <Grid xs = {12}><Typography className = {classes.title} style = {{marginBottom:'48px'}}>Анкета соискателя</Typography></Grid>
        <Grid xs = {12}><Typography className = {classes.title} style = {{fontSize:'22px', marginBottom:'24px'}}>Личные данные</Typography></Grid>

        <Grid container style = {{marginBottom:'48px'}}>
            <Grid className = {classes.nameContainer}>
                <Grid item xs = {12}><Typography className = {classes.name}>Имя *</Typography></Grid>
                <Grid item xs = {12}><TextField size = 'small' placeholder = 'Имя' variant = 'outlined' className = {classes.inputs}></TextField></Grid>
            </Grid>
            <Grid className = {classes.nameContainer} >
                <Grid item xs = {12}><Typography className = {classes.name}>Фамилия *</Typography></Grid>
                <Grid item xs = {12}><TextField  size = 'small' placeholder = 'Фамилия' variant = 'outlined' className = {classes.inputs}></TextField></Grid>
            </Grid>
        </Grid>

        <Grid container style = {{marginBottom:'48px'}}>
            <Grid className = {classes.nameContainer}>
                <Grid item xs = {12}><Typography className = {classes.name}>Электронная почта *</Typography></Grid>
                <Grid item xs = {12}><TextField size = 'small' variant = 'outlined' className = {classes.inputs} style = {{marginRight:'80px'}} placeholder = 'Электронная почта'></TextField></Grid>
            </Grid>
            <Button style = {{width:'256px', marginTop:'22px'}}>
                <AddIcon style={{position:'absolute', left:0}}/>
                <Typography className = {classes.resume}> Загрузить резюме</Typography>
            </Button>
        </Grid>

        <Grid style = {{marginBottom:'48px'}}>
            <Grid container item xs = {12} className = {classes.nameContainer}>
                <Typography className = {classes.maleTitle}>Пол *</Typography>
                <Typography className = {classes.maleTypography}>укажите пол</Typography>
            </Grid>
            <Grid item xs = {12} container className = {classes.nameContainer}>
                <RadioGroup row aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                    <FormControlLabel style = {{position:'absolute', left:'174px'}} value="male" control={<Radio />} label="Женский" />
                </RadioGroup>
            </Grid>
        </Grid>

        <Grid>
            <Grid item xs = {12}><Typography className = {classes.title} style ={{fontSize:'22px'}}>GitHub</Typography></Grid>
            <Grid item xs = {12}><Typography className = {classes.name}>Вставьте ссылку на GitHub</Typography></Grid>
            <Grid item xs = {12}><TextField size = 'small' placeholder = 'Вставьте ссылку на GitHub' variant = 'outlined'className = {classes.inputs} style = {{marginBottom:'44px'}} /></Grid>
            <Grid container style = {{marginBottom:'48px'}}>
                <Checkbox color = 'primary' checked = {checked} onChange = {handleChange} style = {{marginRight:'8px', width:'16px', height:'16px', color:'#1890FF' }} /> 
                <Typography className = {classes.name} style ={{width:'294px', marginTop:'6px'}}>* Я согласен с <Link>политикой конфиденциальности</Link></Typography>
            </Grid>
            <Button disabled style = {{width:'360px',height:'40px'}}>Отправить</Button>
        </Grid>
    </Grid>
    
        
    </>
}

export default CardPresent