import React, { useState, useRef, useEffect } from 'react'
import CardPresent from './CardPresent'

export const Context = React.createContext()

const CardContainer = ()=>{
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [gitHub, setGitHub] = useState(null)
    const [fileName, setFileName] = useState(null)
    const resumeFileRef = useRef()
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [gitHubError, setGitHubError] = useState(false)
    const [fileError, setFileError] = useState(null)
    const [checked, setChecked] = useState(false);
    const [acessButton, setAcess] = useState(false)

    if(firstName && !firstNameError && lastName && !lastNameError && email && !emailError && fileName && !fileError && checked && !acessButton) {
        setAcess(true)
    }
    const handleChack = (event) => {
      setChecked(event.target.checked);
      setAcess(false)
    }
    const changeHandle = (e)=>{
        switch(e.target.name){
            case 'firstName':
            case 'lastName':{
                const current = e.target.value
                if(e.target.name === 'lastName') setLastName(current)
                else setFirstName(current)
                let hasError = false
                // Проверяет все значение инпута и если в нем есть хоть одна цифра, выкидывает ошибку
                for(let i = 0; i < current.length;i++){
                    if(!isNaN(+current[i])) hasError = true
                }
                if(hasError){
                    if(e.target.name === 'lastName') setLastNameError('В имени могут быть только буквы')
                    else setFirstNameError('В имени могут быть только буквы') 
                    setAcess(false)
                } else {
                    if(e.target.name === 'lastName') setLastNameError(false)
                    else setFirstNameError(false) 
                    setAcess(false)
                }
                break
            }
            case 'email':{
                const current = e.target.value
                setEmail(current)
                let hasDog = false
                if(!current) hasDog = true

                for(let i = 0; i<current.length; i++){
                    if(current[i]==='@') hasDog = true
                }
                if(!hasDog){
                    setEmailError('Пожалуйста укажите электронную почту')
                    setAcess(false)
                }else{
                    setEmailError(false)
                }
                break
            }
            case 'gitHub':{
                const regexp = new RegExp('^https://github.com')
                const current = e.target.value
                setGitHub(current)
                let result = current.match(regexp)
                if(!result && current) setGitHubError('Проверьте правильность ссылки')
                else setGitHubError(false)
                break
            }
            case 'file':{
                setFileName(resumeFileRef.current.files[0].name)
                const fileSizeMB = resumeFileRef.current.files[0].size/1024/1024
                if(fileSizeMB>16){
                    setFileError(true)
                    setAcess(false)
                } else {
                    setFileError(false)
                }
                break
            }
            default:
                break
        }
    }
    const cancelHandle = () => {
        setFileName(null)
        setAcess(false)
    }
    return <>
        <Context.Provider value = {{changeHandle, cancelHandle, handleChack, acessButton,
            checked, firstNameError, lastNameError, emailError, gitHubError, resumeFileRef, fileName, fileError}}>
            <CardPresent />
        </Context.Provider>
        </>
}

export default CardContainer