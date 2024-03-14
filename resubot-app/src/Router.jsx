import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import Loading from "./pages/Loading/Loading.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Education from "./pages/Education/Education.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Customize from "./pages/Customize/Customize.jsx";
import FinalResume from "./pages/FinalResume.jsx";
import CreateResume from "./pages/CreateResumes/Resumes.jsx";
import ProtectedRoute from "./common/protectedRoute.js"; 
import Coverletter from "./pages/CoverLetter/Coverletter.jsx";

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
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/customize" element={<Customize/>}/>
                <Route path="/loading" element={<Loading/>}/>
                <Route path="/finalresume" element={<FinalResume/>}/>
                <Route path="/resumes" element={<CreateResume/>}/>
                <Route path="/coverletter" element={<Coverletter/>}/>

                {/*Error Page*/}
                <Route path="*" element={<Error/>}/>

            </Routes>
        </Suspense>
    </BrowserRouter>
)

export default Router;
