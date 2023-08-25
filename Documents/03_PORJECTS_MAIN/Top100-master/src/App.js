import { Routes, Route, Switch } from 'react-router-dom';
import {React} from 'react';
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Top100 from "./Components/Top100";

import './App.css';
import Welcome from "./Components/Welcome";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";
import Howtobuy from "./Components/Howtobuy";
import Influtofollow from "./Components/Influtofollow";



const App = () => {
    return (
        <div>
        <Navbar></Navbar>
        <HomePage></HomePage>
        <Welcome></Welcome>
        <Top100></Top100>
    <Routes>
    {/* <Route exact path="/" element={<Welcome/>} /> */}
    <Route exact  path="/Tokenomics" element={<Tokenomics/>} />
    <Route exact  path="/Roadmap" element={<Roadmap/>} />
</Routes>
</div>
    );
}

export default App;
