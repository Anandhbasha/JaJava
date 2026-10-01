import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewImage from './NewImage'

const App = () => {
  // const [info, setInfo] = useState([])
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const res = await axios.get("http://localhost:3561/studentRegister")
  //     if(!res){
  //       log("No data found")
  //     }
  //     else{
  //       setInfo(await res.data.data)
  //     }
  //   }
  //   fetchData()
  // },[])
  // console.log(info)
  return (
    <div className='App'>
      {/* {info.map((x)=>(
        <>
          <p>{x.id}</p>
          <p>{x.studentName}</p>
          <p>{x.studentAge}</p>
          <p>{x.studentCourse}</p>
          <p>{x.courseDuration}</p>
          <p>{x.studentEmail}</p>
        </>
      ))} */}
      <NewImage/>
    </div>
  )
}


export default App