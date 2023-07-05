

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