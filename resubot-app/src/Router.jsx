import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Resume from "./components/Resumes/Resume1.js";
import Resume2 from "./components/Resumes/Resume2.js"
import Help from "./pages/Help/Help.jsx";
import ChatbotPage from "./pages/ChatBot/Chatbot.jsx";
import Templates from "./pages/Templates/Templates.jsx";
import Register from "./pages/Register/Register.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={Loader}>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/resume1" element={<Resume/>}/>
                <Route path="/resume2" element={<Resume2/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/chatbot" element={<ChatbotPage/>}/>
                <Route path="/templates" element={<Templates/>}/>
                <Route path="/preferences" element={<Preferences/>}/>
                {/*Error Page*/}
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
)

export default Router;
