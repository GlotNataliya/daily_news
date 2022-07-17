import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { format } from 'date-fns'
import '../components/stylesheets/newscasts/newscasts'
import Header from "../components/Header"

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
      <Header />
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
                      <Link to={`./newscasts/${newscast.attributes.id}`} className="header__home">{newscast.attributes.title}</Link>
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
