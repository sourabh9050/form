import React, { useContext, useEffect } from 'react'
import Context from './Context'


const History = () => {
  var{fetch,insert}=useContext(Context)


   function Delete(index)
   {
     fetch.splice(index,1)
     insert([...fetch])
   }
  return (
    <div>
      <h3>History</h3>
  <ul id="list" className="list">
    {fetch.reverse().map(function(obj,index){
      if(parseInt(obj.Amount)>0){
        return(
          <li  key={index} className='plus'>
            {obj.Text}
            <span>{obj.Amount}</span><button className="delete-btn" onClick={()=>Delete(index)}>x</button>
            </li>
        )
      }
      else
      {
        return(
          <li className="minus">
    {obj.text}
           <span>{obj.Amount}</span><button className="delete-btn" onClick={()=>Delete(index)}>x</button>
          </li>  
        )
      }
    })
}
  </ul>
    </div>
  )
}

export default History
