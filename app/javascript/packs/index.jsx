import React from "react";
import { BrowserRouter as Router} from "react-router-dom"
import { createRoot } from 'react-dom/client';
import App from "../components/App";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container);
  root.render(
    <Router>
      <App/>
    </Router>
  );
})
