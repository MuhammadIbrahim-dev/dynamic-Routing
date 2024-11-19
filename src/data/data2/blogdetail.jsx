import React from 'react'
import { useLocation } from 'react-router-dom';
import { blogs } from './blogs';
import Header from '../Header';

export default function Blogdetail() {
  let uselocation = useLocation();
  let currrentid = uselocation.pathname.split('/')[2]
  let currrentdetail = blogs.filter((v)=>v.id==currrentid)[0]
  console.log(currrentdetail)
  return (
    <div>
      <Header/>
      <h1>{currrentdetail.title}</h1>
      <p>{currrentdetail.body}</p>
    </div>
  )
}
