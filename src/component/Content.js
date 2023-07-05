import React,{ useState } from 'react';
import {Image} from 'antd'
import "./hover-img.css"

function Content(item) {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <div style={{height:"70px",textAlign:"center",lineHeight:"70px", fontWeight:"bold", fontSize:"30px"}}>{item}</div>
            <div className="img" id="tbody" style={{display:"flex", flexWrap:"wrap", width:"100%", padding:"10px"}}>
                <div style={{padding:"7px"}} className='test'>
                <Image
                    preview={{ visible: false }}
                    width={200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    onClick={() => setVisible(true)}
                />
                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>
                    
                </div>
            </div>
            
        </div>

    )
};


export default Content