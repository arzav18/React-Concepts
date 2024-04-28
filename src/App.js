import React from 'react';
import { Routes, Route, Link, useParams} from 'react-router-dom';

const Home = () => {
  return <div>I am home</div>
}

const About = () => {
  return <div>I am about</div>
}

const Contact = () => {
  return <div>I am contact</div>
}

const Profile = () => {
  const {userName} = useParams();
  return <div>Hello User: {userName}</div>
}

const App = () => {


    return <>
    <Link to="/">Travel Home </Link>
    <Link to="/about">Travel About </Link>
    <Link to="/contact">Travel Contact </Link>
    <Link to="/profile/arzav18">Travel Profile </Link>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/profile/:userName" element={<Profile />} />
    </Routes>
    </>
}

export default App