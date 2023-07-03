import React,{ useState } from 'react';
import {Image} from 'antd'
import { hover } from '@testing-library/user-event/dist/hover';
import "./hover-img.css"


function Mountain() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [visible6, setVisible6] = useState(false);

    return(
        <div>
            <div style={{height:"70px",textAlign:"center",lineHeight:"70px", fontWeight:"bold", fontSize:"30px"}}>Mountain Pictures</div>
            <div style={{display:"flex", flexWrap:"wrap", width:"100%", padding:"10px"}}>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        
                        preview={{ visible: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.ptwKO_DARqumRU_ejvDVdwHaFx?w=261&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                        
                    />
                        
                </div>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        preview={{ visible2: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.sqwq1PlM23VQmQc32Tr8KAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible2(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        preview={{ visible3: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.Z_70xI0yhcbHLTylPEEr8AAAAA?w=238&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible3(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        preview={{ visible4: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.tEAYB3d6Pxa0_WxP_I9BfgHaDV?w=289&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible4(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        preview={{ visible5: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.Fg4ubEANd0299dE6MLQM1wHaE6?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible5(true)}
                    />
                    
                </div>
                <div style={{padding:"7px"}} className='test'>
                    <Image
                        preview={{ visible6: false }}
                        width={200}
                        src="https://th.bing.com/th/id/OIP.bBu0pD1RhnBOBa07ZJ3a5QHaF7?w=226&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible6(true)}
                    />
                    
                </div>
                <div style={{ display: 'none' }} className='test'>
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

export default Mountain