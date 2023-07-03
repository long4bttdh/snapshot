import React,{ useState } from 'react';
import {Image} from 'antd'

function Birds() {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <div style={{height:"70px",textAlign:"center",lineHeight:"70px", fontWeight:"bold"}}>Birds Pictures</div>
            <div style={{display:"flex", flexWrap:"wrap", width:"100%", padding:"10px"}}>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.ptwKO_DARqumRU_ejvDVdwHaFx?w=261&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        onClick={() => setVisible(true)}
                    />
                    
                </div>
                <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.ptwKO_DARqumRU_ejvDVdwHaFx?w=261&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://th.bing.com/th/id/OIP.J6GuD4jdhoMhOs9BbZf0DQHaFj?w=271&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://th.bing.com/th/id/OIP.kWQkF1zm5koKNE1c2YJ_8gHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        </Image.PreviewGroup>
                    </div>
            </div>
        </div>
    )
}

export default Birds