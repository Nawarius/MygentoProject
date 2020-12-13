import React, { useContext, useState } from 'react'
import {Button, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField, Typography, Checkbox, Paper, IconButton} from '@material-ui/core'
import useStyles from '../styles/styles'
import AddIcon from '@material-ui/icons/Add';
import {Context} from './CardContainer'
import ClearIcon from '@material-ui/icons/Clear';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const CardPresent = () => {
    const classes = useStyles()
    const {changeHandle, firstNameError, lastNameError, emailError, acessButton,
        gitHubError, resumeFileRef, fileName, fileError, cancelHandle, handleChack, checked} = useContext(Context)
    

    return <>
    
    <Grid className = {classes.mainContainer}>
        <Grid xs = {12}><Typography className = {classes.title} style = {{marginBottom:'48px'}}>Анкета соискателя</Typography></Grid>
        <Grid xs = {12}><Typography className = {classes.title} style = {{fontSize:'22px', marginBottom:'24px'}}>Личные данные</Typography></Grid>

        <Grid container style = {{marginBottom:'48px'}}>
            <Grid className = {classes.nameContainer}>
                <Grid item xs = {12}><Typography className = {classes.name}>Имя *</Typography></Grid>
                <Grid item xs = {12}>
                    <TextField size = 'small' placeholder = 'Имя' variant = 'outlined' error = {firstNameError} helperText = {firstNameError}
                        className = {classes.inputs} name = 'firstName' onChange = {changeHandle}>
                    </TextField>
                </Grid>
            </Grid>
            <Grid className = {classes.nameContainer} >
                <Grid item xs = {12}><Typography className = {classes.name}>Фамилия *</Typography></Grid>
                <Grid item xs = {12}>
                    <TextField  size = 'small' placeholder = 'Фамилия' variant = 'outlined' className = {classes.inputs}
                        name = 'lastName' onChange = {changeHandle} error = {lastNameError} helperText = {lastNameError}>
                    </TextField>
                </Grid>
            </Grid>
        </Grid>

        <Grid container style = {{marginBottom:'48px'}}>
            <Grid className = {classes.nameContainer}>
                <Grid item xs = {12}><Typography className = {classes.name}>Электронная почта *</Typography></Grid>
                <Grid item xs = {12}>
                    <TextField size = 'small' variant = 'outlined' className = {classes.inputs} style = {{marginRight:'80px'}} 
                        placeholder = 'Электронная почта' name = 'email' onChange = {changeHandle} error = {emailError} helperText = {emailError}>
                    </TextField>
                </Grid>
            </Grid>
        {!fileName && 
            <Button component = 'label' style = {{width:'256px',marginTop:'22px'}}>
                <input type="file" ref = {resumeFileRef} id="icon-button-file" name = 'file' hidden onChange = {changeHandle}/>
                <AddIcon style={{position:'absolute', left:0}}/>
                <Typography className = {classes.resume}> Загрузить резюме</Typography>
            </Button>
        }   
        {fileName &&
            <Grid container alignItems = 'center' style = {{position:'relative',width:'256px',marginTop:'22px'}}>
                <AttachFileIcon />
                <Typography style = {{color:fileError?'red':'blue'}}>{fileName}</Typography>
                <IconButton style = {{position:'absolute', right:0}} onClick = {cancelHandle}><ClearIcon /></IconButton>
            </Grid>
        }
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
            <Grid item xs = {12}><TextField size = 'small' placeholder = 'Вставьте ссылку на GitHub' name = 'gitHub'
                    variant = 'outlined' className = {classes.inputs} style = {{marginBottom:'44px'}} error = {gitHubError} helperText = {gitHubError} onChange = {changeHandle}
                />
            </Grid>
            <Grid container style = {{marginBottom:'48px'}}>
                <Grid item xs = {1}><Checkbox color = 'primary' checked = {checked} onChange = {handleChack} style = {{marginRight:'8px', width:'16px', height:'16px', color:'#1890FF' }} /></Grid> 
                <Grid item xs = {11}><Typography className = {classes.name} style ={{width:'294px', marginTop:'6px'}}>* Я согласен с 
                    <Link style ={{cursor:'pointer'}} >политикой конфиденциальности</Link>
                    </Typography>
                </Grid>
            </Grid>
            {!acessButton && <Button variant="contained" color="primary" disabled style = {{width:'360px',height:'40px'}}>Отправить</Button>}
            {acessButton && <Button variant="contained" color="primary" style = {{width:'360px',height:'40px'}}>Отправить</Button>}
        </Grid>
    </Grid>
    
        
    </>
}

export default CardPresent