import React from "react"
import { Routes, Route } from "react-router-dom"
import Newscasts from "../components/Newscasts"
import NotFound from "./NotFound";
import Newscast from "../components/Newscast"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Newscasts />} />
      <Route path="/newscasts/:id" element={< Newscast />} />
      <Route path="/admins/sign_in" />
      <Route exact path="/admin_user/newscasts" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
