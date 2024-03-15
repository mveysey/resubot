import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home_Resume.jsx";
import Home2 from "./pages/Home/Home_CoverLetter.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Resume from "./components/Resumes/Resume1.js";
import Resume2 from "./components/Resumes/Resume2.jsx";
import Resume3 from "./components/Resumes/Resume3.jsx";
import Resume4 from "./components/Resumes/Resume4.jsx";
import Help from "./pages/Help/Help.jsx";
import ChatbotPage from "./pages/ChatBot/Chatbot.jsx";
import Templates from "./pages/Templates/Templates.jsx";
import Register from "./pages/Register/Register.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";
import Loading from "./pages/Loading/Loading.jsx";
import CreateResume from "./pages/CreateResume/CreateResume.jsx";
import FinalResume from "./pages/FinalResume.jsx";
import ProtectedRoute from "./common/protectedRoute.js"; 
import CreateCoverletter from "./pages/CreateCoverLetter/Coverletter.jsx";
import CardSlider from "./components/TemplateSlider/Slider.jsx";
import CoverLetter from './components/CoverLetterTemplates/Coverletter_Templates.jsx';


const Router = () => (
    <BrowserRouter>
        <Suspense fallback={Loader}>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Landing/>}/>
                <Route path="/profile_resume" element={<Home/>}/>
                <Route path="/profile_coverletter" element={<Home2/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/resume1" element={<Resume/>}/>
                <Route path="/resume2" element={<Resume2/>}/>
                <Route path="/resume3" element={<Resume3/>}/>
                <Route path="/resume4" element={<Resume4/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/chatbot" element={<ChatbotPage/>}/>
                <Route path="/templates" element={<Templates/>}/>
                <Route path="/preferences" element={<Preferences/>}/>
                <Route path="/create_resume" element={<CreateResume/>}/>
                <Route path="/create_coverletter" element={<CreateCoverletter/>}/>
                <Route path="/loading" element={<Loading/>}/>
                <Route path="/finalresume" element={<FinalResume/>}/>
                <Route path="/slider" element={<CardSlider/>} />
                <Route path="/coverletter" element={<CoverLetter/>} />

                {/*Error Page*/}
                <Route path="*" element={<Error/>}/>

            </Routes>
        </Suspense>
    </BrowserRouter>
)

export default Router;
