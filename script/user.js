
function registration(e){
    e.preventDefault()
    let form=document.querySelector("form")
    let name=form.name.value;
    let age=form.age.value;
    let place=form.place.value;

    let batch_name=document.querySelector("#batch").value.toUpperCase();
    let profession=document.querySelector("#profession").value.toUpperCase()

    let user={
        name,
        age,
        place,
        batch_name,
        profession
    }
   console.log(user)

    fetch("https://floating-crag-24295.herokuapp.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        if(res!==""){
            alert("successfully registered")
        }
      })
        .catch((err)=>{
            console.log(err,"err")
        })


}