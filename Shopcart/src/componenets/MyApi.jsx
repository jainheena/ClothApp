import './MyApi.css'
import React,{useState,useEffect} from "react";
import axiox from "axios";

const Card=(props)=>{
    <div className='card'>
        <img className='img' src={props.image} alt={props.image||'Image'} />
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    </div>   
} 
const CardContainer=(props)=>(
    <div className='cards-container'>
        {
            props.cards.map((card)=>(
                <Card title={card.title}
                      description={card.description}
                      image={card.image}
                      price={card.price}
                />  
            ))
        }
    </div>
)

function MyApi() { 
    const url="https://fakestoreapi.com/products";
    const [data,setData]=useState([]);
    const fetchInfo= async ()=>{
        return axiox.get(url).then((res)=>
        setData(res.data));
    }
    useEffect(()=>{
        fetchInfo();
    },[]);
  return (
    <div className='myApi'>
        {data.map((dataObj,index)=>{
            return(
                <div>
                    <CardContainer cards={dataObj}/>
                </div>
            )
        })}
    </div>
  ),[]
}

export default MyApi