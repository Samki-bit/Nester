import React from 'react'
import Navbar from '../components/navbar/navbar'
import DigitalClock from '../components/digitalClock/digitalClock'
import ChatBot from '../components/chatBot/ChatBot'
import Todo from '../components/todo/Todo'

function Home() {
  return (
    <>
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <DigitalClock/>
        <Todo/>
    </div>
    </>
  )
}

export default Home