import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import './styles/tailwind.css'
import './styles/index.sass'
import './styles/app.sass'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
