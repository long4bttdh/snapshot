import React,{ useState,useEffect } from 'react';
import {Image} from 'antd'
import "./hover-img.css"
import axios from 'axios';

function Content(item) {
    const [visible, setVisible] = useState(false);
    const [images,setImages] =useState([]);
    const urlDB = "http://localhost:3000/"+item
    async function getData(){
        const dataReturn = await axios.get(urlDB)
        return dataReturn
    }
    useEffect( ()=>{
        const fetchData = async ()=>{
        const {data} = await getData();
        const urlImages = data.map(item=>{
            return item.imagePreviewUrl
        })
        setImages(urlImages)
      }
         fetchData()
    },[urlDB])

    return(
        <div>
            <div style={{height:"70px",textAlign:"center",lineHeight:"70px", fontWeight:"bold", fontSize:"30px"}}>{item} Pictures</div>
            <div style={{display:"flex", flexWrap:"wrap", width:"100%", padding:"10px"}}>       
                    {images.map((item,index)=>{
                        console.log(urlDB)
                        return(
                            <div className='test' style={{padding:"7px"}}>
                                <Image
                                    width={200}
                                    src={item}
                                    key={index}
                                    onClick={() => setVisible(true)}
                                />
                            </div>    
                        )
                        
                    })}
            </div>
            
        </div>

    )
                
};


export default Content