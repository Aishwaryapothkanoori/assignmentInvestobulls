import React, { useEffect, useState } from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'

function CustomTable() {
    const [data, setData] = useState([]) 
useEffect(()=>{
    const fetchData = async()=>{
        try{
            let Response = await axios.get("http://localhost:3205/fetch2");
            console.log(Response)
            setData(Response.data)
     

        }catch(err){
            throw err
         }
    }
    fetchData();
})
  return (
    <div>
       <Table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>batchno</th>
            <th>qualification</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item)=>(<tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.batchno}</td>
        <td>{item.qualification}</td>
        <td><button className='btn btn-primary'>delete</button></td>
        <td><button className='btn btn-primary'>update</button></td>
        

    </tr>))}
    </tbody>
</Table>
    </div>
  )
}

export default CustomTable