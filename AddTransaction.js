import React, { useContext, useState } from 'react'
import Context from './Context'

const AddTransaction = () => {
 var{fetch,insert}=useContext(Context)
  const[Obj,SetObj]=useState({
    Text:"",
    Amount:"",
  })
  function set(event)
  {
    
    SetObj({...Obj,[event.target.name]:event.target.value})
  }
  function Add(){
    if(fetch=='')
    {
      insert([Obj])
    }
    else{
      insert(fetch=>[...fetch,Obj]);
    }
  }
  return (
    <div>
       <h3>Add new transaction</h3>
        <form id="form">
    <div className="form-control">

      <label htmlFor="text">Text</label>
      <input onChange={set} type="text" name="Text" placeholder="Enter text..." />
    
    </div>
    <div className="form-control">

      <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
      <input onChange={set} type="number" name="Amount" placeholder="Enter amount..." />

    </div>
    
     <button type='button' onClick={Add} className="btn" >Add transaction</button>
  </form>
    </div>
  )
}

export default AddTransaction
