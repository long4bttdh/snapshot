import React,{ useState } from 'react';
import { Input,Button, Space,Image} from 'antd'
import Content from "./component/Content"


function Body() {
    
    const [content,setContent] = useState("Mountain Pictures")
    const Main = Content(content)
    return(
        <div style={{width:"70%",margin:"auto" }}>
            <div style={{height:"50px", textAlign:"center",fontFamily:" Fantasy", fontSize:"24px" }}>SnapShot</div>
            <div style={{height:"50px",marginRight:"70px", marginLeft:"30px"}}><Input placeholder="Search..." /></div>
            <div style={{height:"50px",textAlign:"center" }}>
            <Space direction="vertical">
                <Space wrap>
                    <Button onClick={()=>{setContent("Mountain Pictures")}}
                         style={{backgroundColor:"black"}} type="primary">Mountain</Button>
                    <Button onClick={()=>{setContent("Beaches Pictures")}}
                         style={{backgroundColor:"black"}} type="primary">Beaches</Button>
                    <Button onClick={()=>{setContent("Birds Pictures")}}
                         style={{backgroundColor:"black"}} type="primary">Birds</Button>
                    <Button onClick={()=>{setContent("Food Pictures")}}
                         style={{backgroundColor:"black"}} type="primary">Food</Button>
                </Space>
            </Space>
            </div>
            {Main}
            
            
            
        </div>
        
    )
}

export default Body