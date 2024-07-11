import { useState } from 'react'
import './styles.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import UserPage from './components/user-page/UserPage'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <UserPage />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
