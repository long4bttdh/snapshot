import React,{ useState } from 'react';
import { Input,Button, Space,Image} from 'antd'
import Mountain from './component/moutains';
import Beaches from './component/beaches';
import Birds from './component/birds';
import Food from './component/food';

function Body() {
    const [visible, setVisible] = useState(false);
    const [content,setContent] = useState(<Mountain handleClick={(item)=>{setContent(item)}}/>)
    return(
        <div style={{width:"70%",margin:"auto" }}>
            <div style={{height:"50px", textAlign:"center",fontFamily:" Fantasy", fontSize:"24px" }}>SnapShot</div>
            <div style={{height:"50px",marginRight:"70px", marginLeft:"30px"}}><Input placeholder="Search..." /></div>
            <div style={{height:"50px",textAlign:"center" }}>
            <Space direction="vertical">
                <Space wrap>
                    <Button onClick={({key})=>{setContent(<Mountain handleClick={(item)=>{setContent(item)}}/>)}}
                         style={{backgroundColor:"black"}} type="primary">Mountain</Button>
                    <Button onClick={({key})=>{setContent(<Beaches handleClick={(item)=>{setContent(item)}}/>)}}
                         style={{backgroundColor:"black"}} type="primary">Beaches</Button>
                    <Button onClick={({key})=>{setContent(<Birds handleClick={(item)=>{setContent(item)}}/>)}}
                         style={{backgroundColor:"black"}} type="primary">Birds</Button>
                    <Button onClick={({key})=>{setContent(<Food handleClick={(item)=>{setContent(item)}}/>)}}
                         style={{backgroundColor:"black"}} type="primary">Food</Button>
                </Space>
            </Space>
            </div>
            
            {content}
            
        </div>
        
    )
}

export default Body