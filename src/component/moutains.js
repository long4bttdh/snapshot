import React,{ useState } from 'react';
import {Image} from 'antd'

function Mountain() {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <div style={{height:"70px",textAlign:"center",lineHeight:"70px", fontWeight:"bold"}}>Mountain Pictures</div>
            <div style={{display:"flex", flexWrap:"wrap", width:"100%", padding:"10px"}}>
            <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.ptwKO_DARqumRU_ejvDVdwHaFx?w=261&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.ptwKO_DARqumRU_ejvDVdwHaFx?w=261&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://th.bing.com/th/id/OIP.J6GuD4jdhoMhOs9BbZf0DQHaFj?w=271&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://th.bing.com/th/id/OIP.kWQkF1zm5koKNE1c2YJ_8gHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.sqwq1PlM23VQmQc32Tr8KAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.sqwq1PlM23VQmQc32Tr8KAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.Z_70xI0yhcbHLTylPEEr8AAAAA?w=238&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.Z_70xI0yhcbHLTylPEEr8AAAAA?w=238&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.tEAYB3d6Pxa0_WxP_I9BfgHaDV?w=289&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.tEAYB3d6Pxa0_WxP_I9BfgHaDV?w=289&h=157&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.Fg4ubEANd0299dE6MLQM1wHaE6?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.Fg4ubEANd0299dE6MLQM1wHaE6?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div style={{padding:"7px"}}>
                    <Image
                        preview={{ visible: false }}
                        width={100}
                        src="https://th.bing.com/th/id/OIP.bBu0pD1RhnBOBa07ZJ3a5QHaF7?w=226&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                        <Image src="https://th.bing.com/th/id/OIP.bBu0pD1RhnBOBa07ZJ3a5QHaF7?w=226&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                        </Image.PreviewGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mountain