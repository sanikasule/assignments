import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { stocksData } from './data/stocksData'
import StocksList from './components/StocksList'

function App() {
  return (
    <div>
      <StocksList data={stocksData}/>
    </div>
  )
}

export default App
