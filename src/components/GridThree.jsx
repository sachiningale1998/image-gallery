import React, { useState } from 'react'
import { useEffect } from 'react'
import "../styles/gridThree.css"

const GridThree = (props) => {
    const {data} = props;
    const [newData, setNewData] = useState([])
    useEffect(()=>{
        if(data){
            console.log('data: ', data);
            setNewData(data)
        }
    }, [data])
  return (
    <div className="gridContainer">
        {newData.map((el , index)=>{
            return(
                <div key={index} className="gridChild">
                    <img src={el.src.portrait} alt={el.alt} />
                </div>
            )
        })}
    </div>
  )
}

export default GridThree