import React from "react";
import { createRoot } from 'react-dom/client';
import App from "../components/App";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <App tab="home"/>
  );
})

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
