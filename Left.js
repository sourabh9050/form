import React, { useContext } from 'react'
import Context from './Context'

const Left = () => {
  var{fetch,insert}=useContext(Context)
var total=0;

  fetch.map(function(obj){
     var Total=parseInt(obj.Amount)
     total=total+Total
     
  })
  return (
    <div>
       <h4>Your Balance</h4>
    <h1>₹{total}</h1>
    </div>
  )
}

export default Left
