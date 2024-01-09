import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'

const Balance = () => {
  var{fetch,insert}=useContext(Context)
  var income=0
  var expense=0
  fetch.map(function(obj){
    if(parseInt(obj.Amount)>0){
      income=(income+parseInt(obj.Amount));
    }
    else{expense=(expense+parseInt(obj.Amount))}

  })
  return (
    <div>
      <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+₹{income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-₹{expense}</p>
    </div>
  </div>
    </div>
  )
}

export default Balance
