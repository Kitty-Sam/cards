import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Test from "./Component/Test";

function App() {
  return (
    <div>
      {/*<div>
        <NavLink to={'/login'}>login</NavLink>---
        <NavLink to={'/registration'}>registration</NavLink>---
        <NavLink to={'/profile'}>profile</NavLink>---
        <NavLink to={'/'}>Test page</NavLink>---
        <NavLink to={'/recover'}>recover</NavLink>---
        <NavLink to={'/404'}>404</NavLink>
      </div>
*/}


      // why not
      <Routes>
        <Route path={'/login'} element={<div><h1>login</h1></div>}/>
        <Route path={'/registration'} element={<div><h1>registration</h1></div>}/>
        <Route path={'/profile'} element={<div><h1>profile</h1></div>}/>
        <Route path={'/*'} element={<div style={{textAlign: "center"}}><h1>404:page NOT found</h1></div>}/>
        <Route path={'/recover'} element={<div><h1>recover password</h1></div>}/>
        <Route path={'/newPassword'} element={<div><h1>add new password</h1></div>}/>
        <Route path={'/'} element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
