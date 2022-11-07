window.addEventListener("load",getUser);

let token=JSON.parse(localStorage.getItem("token"))
let container=document.querySelector("#container")
let sabdata;
let isLoading = true;
let isError = false;
function getUser(){
    if(!token){
        return window.location.href="login.html"
    }
    if(isLoading){
        container.innerText="isLoading";
    }
    
        fetch("https://floating-crag-24295.herokuapp.com/users")
          .then((res)=>res.json())
          .then((res)=>{
            displayData(res)
          })
          .catch((err)=>{
            isError=true;
            console.log(err)
            if(isError){
            container.innerText="isError"
            }
          })
    
}

function displayData(data){
    console.log(data);
    container.innerText=null;
    data.forEach(({id,age,name,place,profession,batch_name})=>{
        let main=document.createElement("div")
        let name1=document.createElement("p")
        let age1=document.createElement("p")
        let place1=document.createElement("p")
        let profession1=document.createElement("p")
        let batch1=document.createElement("p")
        let image=document.createElement("img")

        let dltbtn=document.createElement("div")
        dltbtn.style.cursor="pointer"
        dltbtn.setAttribute("class","fa-solid fa-trash")
        dltbtn.addEventListener("click",()=>{
            deleteFn(id)
        })
        
        let edtbtn=document.createElement("div")
         edtbtn.setAttribute("class","fa-sharp fa-solid fa-pen-to-square")
         edtbtn.addEventListener("click",()=>{
            let edit1 = { id, age, name, place, profession, batch_name }
            localStorage.setItem("user",JSON.stringify(edit1))
            window.location="edit.html"
         })
         
         image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qxSjTpvBX8vpBSnyCmvt2VIP2TDOwzYNFQ&usqp=CAU"
         name1.innerText=name;
         age1.innerText=age;
         place1.innerText=place;
         profession1.innerText=profession;
         batch1.innerText=batch_name
         main.append(image,name1,age1,place1,profession1,batch1,dltbtn,edtbtn);
         container.append(main)
    })
}

function deleteFn(id){
    fetch(`https://floating-crag-24295.herokuapp.com/users/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        getUser()
    })
}

const Filter=(e)=>{
    let val=document.querySelector("#filter").value.toUpperCase()
    fetch(`https://floating-crag-24295.herokuapp.com/users?_sort=age&_order=${val}`)
     .then((res)=>res.json())
     .then((res)=>{
        displayData(res)
     })
     .catch((err)=>{
        console.log(err)
     })
}
const serachQuery = (e) => {
    let q = document.querySelector(".query").value;
    
    fetch(`https://floating-crag-24295.herokuapp.com/users?q=${q}`)
      .then((res) => res.json())
      .then((res) => {
        displayData(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

const Pricesort = (e) => {
    var select1 = document.querySelector("#Pricesort").value;
    console.log(select1);
    fetch(
      `https://floating-crag-24295.herokuapp.com/users?_sort=age&_order=${select1}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        displayData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };