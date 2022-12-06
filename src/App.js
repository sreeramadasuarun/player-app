import React from 'react'
import { Routes, Route } from "react-router-dom"
import Contact from './Componets/Contact';
import Home from './Componets/Home';
// import About from './Componets/About';
import NavLink from "./Componets/Navlinks"
import Success from './Componets/Success';
import Notfound from './Componets/404error';
import Projects from './Componets/projects';
import Featuredproject from './Componets/featured-project';
import Presentprojects from './Componets/present-projects';
import Users from './Componets/users';
import Userdetails from './Componets/Userdetails';
import Movieslist from "./Movies/Movieslist";
import Movies from './Movies/Movies';
import Drinks from './Drinksapi/Drinks';
import Drinkslist from './Drinksapi/Drinkslist';
import Person from './practise/Person';
import Persondetails from './practise/Persondetails';
import Login from './login/Login';
import Logout from './login/Logout';
import { Authprovider } from './login/auth';
import PrivateRoute from "./login/PrivateRoute"


const Lazyabout = React.lazy(() => import("./Componets/About"))



const App = () => {

  return (
    <Authprovider>
      <NavLink />
      <br />


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<React.Suspense fallback="Loading...."><Lazyabout /></React.Suspense>} />
        <Route path="/Success" element={<Success />} />

        <Route path="/Projects" element={<Projects />}>
          <Route path="Featuredproject" element={<Featuredproject />} />
          <Route path="Presentprojects" element={<Presentprojects />} />
        </Route >

        <Route path="*" element={<Notfound />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:userid" element={<Userdetails />} />

        <Route path="/Movies" element={<PrivateRoute><Movies /></PrivateRoute>} />

        <Route path="/Movies/:Movieid" element={<PrivateRoute><Movieslist /></PrivateRoute>} />

        <Route path="/Drinks" element={<Drinks />} />

        <Route path="/Drinks/:tailid" element={<Drinkslist />} />

        <Route path="/Person" element={<Person />} />

        <Route path="/Person/:personid" element={<Persondetails />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes >

    </Authprovider >
  )
}


export default App;