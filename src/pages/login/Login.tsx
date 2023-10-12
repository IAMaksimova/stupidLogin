import React, {ChangeEvent, useState} from 'react';
import {Button, Checkbox, TextField} from "@mui/material";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {blue} from "@mui/material/colors";
import logo from '../../assets/T_white.webp'
import {S} from './Login_Styles'
import axios from 'axios';
import {NavLink} from "react-router-dom";


type UserType = {
    login: string
    password: string
}

export const Login = () => {

    //ТЕСТ--------------------- hehehehe
    const [testStore, setStore] = useState<UserType[]>([])
    const [password, setPassword] = useState('')
    const [login, setId] = useState("")
    const [error, setError] = useState(false)
    const changeErrorStatus = () => {
        if (login || password) {
            setError(false)
        }
    }

    const onChangeIDHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.currentTarget.value)
        changeErrorStatus()
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        changeErrorStatus()
    }
    // const cleaner = () => {
    //     setId('')
    //     setPassword('')
    // }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:8000/authorisation', {login, password}).then((response) => {
            console.log(response["data"])})
    }

    const onClickTest = () => {
        const trimId = login.trim()
        const trimPass = password.trim()
        if (trimId && trimPass) {
            setError(false)
            const obj = {login: trimId, password: trimPass}
            setStore([...testStore, obj])
           // cleaner()
        } else {
            setError(true)
        }

    }


    return (
        <S.Login>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'} wrap={'wrap'}
                             style={{minHeight: '100vh'}}>
                    <FlexWrapper align={'center'} gap={'20px'}>
                        <S.WhiteLogo src={logo} alt={'Логотип РУТ(МИИТ)'}/>
                        <S.TitleLog>Добро пожаловать</S.TitleLog>
                    </FlexWrapper>

                    <S.FormWrapper>
                        <S.Form action={''} method={'post'} onSubmit={handleSubmit} >
                            <S.Legend>Авторизация</S.Legend>
                            <TextField
                                id="outlined"
                                name='login'
                                label="ID"
                                helperText="Введите ID"
                                value={login}
                                onChange={onChangeIDHandler}
                                error={error}
                                color={error ? 'warning' : 'success'}
                            />
                            <TextField
                                type="password"
                                label="Password"
                                helperText="Введите пароль"
                                value={password}
                                onChange={onChangePasswordHandler}
                                error={error}
                                color={error ? 'warning' : 'success'}
                            />

                            <FlexWrapper style={{maxWidth: '77%'}} align={'center'} gap={'1px'}>
                                <Checkbox sx={{
                                    '&.Mui-checked': {
                                        color: blue[900],
                                    }
                                }}/>
                                <S.Memo>Запомнить меня</S.Memo>
                            </FlexWrapper>

                            <NavLink to={'/admin/'}>
                                <Button type={'submit'} onClick={onClickTest} variant="outlined"
                                        endIcon={<ChevronRightIcon/>}
                                        sx={S.buttonStyle}>
                                    вход
                                </Button>
                            </NavLink>
                        </S.Form>
                    </S.FormWrapper>
                </FlexWrapper>
            </Container>
        </S.Login>
    );
};

