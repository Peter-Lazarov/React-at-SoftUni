import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import Pricing from './components/Pricing'
import About from './components/About'
import Developers from './components/Developers'
import NotFound from './components/NotFound'
import Articles from './components/Articles'
import ArticlesDetails from './components/ArticlesDetails'
import ContactUs from './components/ContactUs'
import OurTeam from './components/OurTeam'

function App() {

  return (
    <>
      {/* <h1 className='text-3x1 font-bold underline'>React router</h1> */}
      <div className="bg-white">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='our-team' element={<OurTeam />} />
            <Route path='contact-us' element={<ContactUs />} />
          </Route>
          <Route path='/developers' element={<Developers />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:articleId' element={<ArticlesDetails />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
