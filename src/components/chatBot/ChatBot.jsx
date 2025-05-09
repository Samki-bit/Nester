import axios from 'axios'
import React from 'react'
import { data } from 'react-router-dom'

function ChatBot() {

    async function generateResponse() {
        console.log("Generating response...")
        const response = await axios({
            method: 'POST',
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBMf3M79msdHusaneQS2kxfkx-dxLTR4CA',
            data: {
                "contents": [{
                "parts":[{"text": "Hello, how are you?"}],
                }]

            },
        })
        console.log(response['data']['candidates']['0']['content']['parts']['0']['text'])
    }
  return (
    <div>
        <button onClick={generateResponse} className='btn btn-primary'>Generate Response</button>
    </div>
  )
}

export default ChatBot