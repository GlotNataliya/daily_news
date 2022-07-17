import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__home">Home</Link>
          {/* <Link to="/admins/sign_in" className="header__admin">Admin</Link> */}
        </div>
      </div>
    </header>
  )
}

export default Header
