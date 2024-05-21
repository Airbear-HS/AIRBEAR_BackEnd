import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import AppLayout from './Layout/AppLayout';
import { Home } from './component/Home';
import Test from './component//Test';
import Login from './component/member/Login';
import Signup from './component/member/Signup';
import Login_Success from './component/member/Login_Success';
import Login_Fail from './component/member/Login_Fail';
import Service from './component/nav/Service';
import Process from './component/nav/Process';
import Community from './component/nav/Community';
import Interview from './component/nav/Interview';
import Recruiting from './component/nav/Recruiting';
import Advice from './component/main/Advice';
import Health from './component/main/Health';
import Papago from './component/nav/Papago';
import Cabin from './component/nav/Cabin';
import Intern from './component/nav/Intern';
import Interview_Real from './component/nav/Interview_Real';
import Mypage_real from './component/member/Mypage_real';
import Facebear from './component/game/Facebear';
import Exam from './component/nav/Exam';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setLoggedIn(true);
    }else{
      setLoggedIn(false)
    }
  }, []);

  // 로그인 상태에 따라 헤더를 변경하는 함수
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
      <div>
        <AppLayout>
          <Routes>
            <Route path="/service" element={<Service />} />
            <Route path="/process" element={<Process />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/interview" element={loggedIn ? <Interview /> : <Navigate to="/login" />} />
            <Route path="/recruiting" element={<Recruiting />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            {/* 로그인 상태에 따라 Login_Success 또는 Login_Fail 페이지를 보여줌 */}
            {loggedIn ? (
                <Route path="/login" element={<Login_Success />} />
            ) : (
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            )}
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login_Fail" element={<Login_Fail />} />

            <Route path="/Advice" element={<Advice />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Papago" element={<Papago />} />
            <Route path="/Cabin" element={<Cabin />} />
            <Route path="/Intern" element={<Intern />} />
            <Route path="/Interview_Real" element={<Interview_Real />} />
            <Route path="/Mypage_real" element={<Mypage_real />} />
            <Route path="/Facebear" element={<Facebear />} />
            <Route path="/Exam" element={<Exam />} />
          </Routes>
        </AppLayout>
      </div>
  );
}

export default App;