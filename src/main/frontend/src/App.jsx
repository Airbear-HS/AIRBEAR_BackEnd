import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Techniques from './component/nav/Techniques';
import Interview from './component/nav/Interview';
import Recruiting from './component/nav/Recruiting';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // 로그인 상태에 따라 헤더를 변경하는 함수
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/process" element={<Process />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/interview" element={<Interview />} />
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
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
