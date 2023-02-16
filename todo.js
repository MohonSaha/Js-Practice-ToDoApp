let count = 0;
document.getElementById('input-btn').addEventListener("click", function(){
  const myInputValue = document.getElementById('input-value').value;
  if(myInputValue){
    count ++;
  const parent = document.getElementById("content-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
                   <td>${count}</td>
                   <td>${myInputValue}</td>
                   <td> 
                   <button class="btn btn-danger">Delete</button>
                   <button class="btn btn-success">Done</button>
                   </td>

  `;
  parent.appendChild(tr);
}
else{
  alert("Please ass new item !!!")
}


})