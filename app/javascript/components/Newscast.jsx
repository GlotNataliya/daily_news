import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import '../components/stylesheets/main'
import '../components/stylesheets/newscasts/newscast'
import Header from './Header'

const Newscast = () => {
  const [newscast, setNewscast] = useState({});
  const { id } = useParams()

  useEffect(() => {
    fetch(`/newscasts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => { setNewscast(res) })
  }, [])

  return (
    <div>
      <Header />
      <div className="container">
        <div className='newscast'>
          <h1 className='newscast-title'>{newscast.title}</h1>
          <div>
            <img src={newscast?.image?.url} alt="img" className='newscast-image'/>
          </div>
          <div className='newscast-description'>
            {newscast.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newscast
