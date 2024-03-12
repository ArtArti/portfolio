import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { I18nextProvider} from 'react-i18next';
import i18n from './i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}/>
    </I18nextProvider>
 
)
