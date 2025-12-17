import { useState } from 'react'
import QuestionsList from './components/QuestionsList.jsx'
import Quizzes from "./components/Quizzes.jsx";
import FlowCards from "./components/FlowCards.jsx";
import {Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <>
      <ul className={"nav align-items-center justify-content-center"}>
        <li className={"nav-item"}><Link className="nav-link active" aria-current="page" to={"/"}>Questions</Link></li>
        <li className={"nav-item"}><Link className="nav-link active" aria-current="page" to={"/quiz"}>Quiz</Link></li>
        <li className={"nav-item"}><Link className="nav-link active" aria-current="page" to={"/cart"}>FlowCard</Link></li>
      </ul>
      <div className={"m-3"}>
        <Routes>
          <Route path="/cart" element={<FlowCards/>}/>
          <Route path="/quiz" element={<Quizzes/>}/>
          <Route path="/" element={<QuestionsList/>}/>
        </Routes>
      </div>

    </>
  )
}

export default App
