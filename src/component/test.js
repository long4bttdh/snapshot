// import React, {useState, useEffect} from "react"
// import axios from "axios";

// const Home = () => {
//     const [mountain, setMoutain] = useState([]);
//     useEffect(()=>{
//         loadMountain();
//     },[]);
// const loadMountain = async () =>{
//     const result = await axios.get("http://localhost:3000/mountain");
//     setMoutain(result.data);
// }
// return (
//     <div>
//         <tbody>
//             {mountain.map((Mountain)=>{
                
//             })}
//         </tbody>
//     </div>
// )
// }




let tbody= document.getElementsByClassName("img")
console.log(tbody)


fetch("http://localhost:3000/mountain")
    .then(res=>res.json())
    .then(data=>{
        data.map(data=>{
            console.log(data.id)
            tbody.innerHTML= tbody.innerHTML+`
            <div style={{padding:"7px"}} className='test'>
                xdfg
                
            </div>
            `
        })
    });


function images(url){
    let td = document.createElement('tr');
    td.innerHTML=`
    <div style={{padding:"7px"}} className='test'>
        xdfg
        
    </div>
    `
}