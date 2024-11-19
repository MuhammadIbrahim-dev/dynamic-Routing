import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>header</h1>
        <ul><li> <Link to={'/'}>home</Link> </li>
        <li> <Link to={'/about'}>about</Link> </li>
        <li> <Link to={'/blog'}>blog</Link> </li>
        </ul>
    </div>
  )
}
