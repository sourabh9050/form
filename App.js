import React,{useState} from 'react'
import "./Style.css"
import Left from './Left'
import Balance from './Balance'
import History from './History'
import AddTransaction from './AddTransaction'
import Context from './Context'
const App = () => {
  const[ob,setob]=useState([])
  return (
    <div>
     
      <Context.Provider value={{"fetch":ob,"insert":setob}}>
           <h2>Expense Tracker</h2>
           <Left/>
          <Balance/>
          <History/>
          <AddTransaction/>
      </Context.Provider>
    </div>
  )
}

export default App
