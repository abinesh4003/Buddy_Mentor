import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Mentee from './pages/mentee/Mentee';
import Industries from './pages/industries/Industries';
import Institution from './pages/Institutions/Institution';
import AboutUs from './pages/about_us/AboutUs';
import ContactUs from './pages/contact_us/Contact';
import MenteeRegister from './pages/register/MenteeRegister';
import IndustryRegister from './pages/register/IndustryRegister';
import InstitutionRegister from './pages/register/InstitutionRegister';
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ChapterPage from './pages/chapter/ChapterPage';
import SessionPlanPage from './pages/session_plan/SessionPlanPage';
import SessionPage from './pages/session/SessionPage';



function App() {
  return (
    <div className="App min-h-screen flex flex-col">
        <BrowserRouter >
           <ScrollToTop />
           <Navbar/>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/mentees" element={<Mentee/>}/>
                <Route path='/industries' element={<Industries/>}/>
                <Route path='/institutions' element={<Institution/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contact' element={<ContactUs/>}/>

                {/* Register & login */}
               
                <Route path='/register/mentee' element={<MenteeRegister/>}/>
                <Route path='/register/industry' element={<IndustryRegister/>}/>
                <Route path='/register/institution' element={<InstitutionRegister/>}/>
                <Route path='/login' element={<Login/>} />

                {/* Dashbord mentoring Circle */}

                <Route path='/dashboard' element={<Dashboard/>}/>

                {/* chapter view */}
                <Route path="/chapter/:subjectId/:moduleId/:chapterId" element={<ChapterPage />} />
                
                {/* session plan */}
                 <Route path="/chapter/:subjectId/:moduleId/:chapterId/sessionplan" element={<SessionPlanPage />} />
                 <Route path="/session/:subjectId/:moduleId/:chapterId/:sessionId" element={<SessionPage />} />
                 
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
