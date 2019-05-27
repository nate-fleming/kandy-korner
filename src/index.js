import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import KandyKorner from './components/KandyKorner'



ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'))