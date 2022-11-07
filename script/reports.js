window.addEventListener("load", getUser);
let isLoading = true;
let isError = false;

let token = JSON.parse(localStorage.getItem("token"));
let count1 = 0,
  count2 = 0,
  count3 = 0;
function getUser() {
  if (!token) {
    return (window.location.href = "login.html");
  }
  if (isLoading) {
  }

  fetch(`https://floating-crag-24295.herokuapp.com/users`)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((el) => {
        count1++;
        if(el.profession.toLowerCase()=='student'){
            count2++
        }
        if(el.profession.toLowerCase()!=='student'){
            count3++
        }
        
      });
      displayData()
      isLoading = false;
      isError = false;
    })
    .catch((err) => {
      isError = true;
      if (isError) {
      }
    });
}

let appendData = document.querySelector(".appendEmp");
function displayData() {
  let Row = document.createElement("tr");
  let tr1 = document.createElement("td");
  let tr2 = document.createElement("td");
  let tr3 = document.createElement("td");
  tr1.innerText = count1;
  tr2.innerText = count2;
  tr3.innerText = count3;
  Row.append(tr1, tr2, tr3);
  appendData.append(Row);
}
