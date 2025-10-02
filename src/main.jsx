
import { createRoot } from 'react-dom/client'
import Card from './Card.jsx'
import React from 'react'
createRoot(document.getElementById('root')).render(<>
<h1 style={{ color: 'white', textAlign: 'center', paddingTop: '30px' }}>Information card</h1>
<Card/>

</>
)

