import React, { useEffect, useState } from 'react'

import './ShowDate.css'

const ShowDate = () => {
    
  
  const [clock, setClock] = useState(() => "");
  const [date, setDate] =useState(() => "")
  
  useEffect(() => {
    setInterval(() => {
          const data = new Date();
          let day = data.getDay();
          switch (day) {
              case 0 : day = "Sunday"; break;
              case 1 : day = "Monday"; break;
              case 2 : day = "Tuesday"; break;
              case 3 : day = "Wednesday"; break;
              case 4 : day = "Thursday"; break;
              case 5 : day = "Friday"; break;
              case 6 : day = "Saturday"; break;
              default: day = "~unknown~"
          }
          setDate(day);
          setClock(data.toLocaleTimeString());
        }, 1000)
    }, [])

    
  return (
    <div className='show-date'>
      <p>{date}</p>
      <p>{clock}</p>
    </div>
  )
}

export default ShowDate