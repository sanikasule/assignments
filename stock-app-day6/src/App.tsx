import StockCard from './components/StockCard'
import DataTable from './components/dataTable'
import type { Stock } from './types/stock.types'
import { stocks } from './data/stockData'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <div>
      <h1>Stock trading app</h1>
      <StockCard stock={stocks[0]}/>
      <br />
      <DataTable<Stock> data={stocks}
        rowKey='id'
        columns={[
          {key: 'symbol', header: 'Symbol'},
          {key: 'price', header: 'Price', render: (val) => `$${Number(val).toFixed(2)}`},
          {key: 'changePct', header: 'Change %', render: (val) => {
            const n = Number(val);
            return <span style={{color: n>=0 ? 'green' : 'red'}}>
              {n>=0 ? '+' : ''}{n.toFixed(2)}%
            </span>
          }},
        ]}
        />
    </div>
  )
}

export default App
