// https://reqres.in/api/login
// eve.holt@reqres.in
//cityslicka

 function login(e){
    e.preventDefault()
    let form=document.querySelector("form")
    let email=form.email.value;
    let password=form.password.value;
 
 let user={
    email,
    password,
 }

 fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(user),
 })
   .then((res)=>res.json())
   .then((res)=>{
    if(res.token){
        localStorage.setItem("token",JSON.stringify(res.token));
        window.location.href="data.html"
    }
   })
}