import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./pages/login/Login";
import {GlobalStyled} from "./styles/Global.styled";
import {Admin} from "./pages/admin/Admin";
import {User} from "./pages/user/User";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <GlobalStyled/>
                <Routes>
                    <Route element={<Login/>} path={'/testlogin'}/>
                    <Route element={<Admin/>} path={'/admin/'}/>
                    <Route element={<User/>} path={'/user/'}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
