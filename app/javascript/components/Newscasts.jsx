import React from 'react'
import { useEffect, useState } from "react"
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import '../components/stylesheets/newscasts/newscasts'

const Newscasts = () => {
  const [newscasts, setNewscasts] = useState([]);

  useEffect(() => {
    fetch(`./newscasts`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((newscasts) => { setNewscasts(newscasts) })
  }, []);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__home">Home</Link>
            <Link to="/admins/sign_in" className="header__admin">Admin</Link>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
            <h1 className="intro-title">Last News</h1>
            {newscasts.map((newscast) => {
              return (
                <div key={newscast.id}>
                  <div className="intro__item">
                    <div className='intro-time'>
                      <time>{format(Date.parse(newscast.attributes.created_at), 'dd/MM/yyyy')}</time>
                      <h2 className="intro-item__title">{newscast.attributes.title}</h2>
                    </div>
                    <p>{newscast.attributes.description}</p>
                    <div className="intro-item__image"><img src={newscast.attributes.image} alt="img" /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newscasts
