import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error";
import Resume from "./components/Resumes/Resume1.js";
import Resume2 from "./components/Resumes/Resume2.js"

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={Loader}>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Home/>}/>
                <Route path="/resume1" element={<Resume/>}/>
                <Route path="/resume2" element={<Resume2/>}/>
                {/*Error Page*/}
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>
)

export default Router;
