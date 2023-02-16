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
                   <button class="btn btn-danger delete-btn">Delete</button>
                   <button class="btn btn-primary done-btn">Done</button>
                   </td>

  `;
  parent.appendChild(tr);
  document.getElementById('input-value').value = ''

}
else{
  alert("Please ass new item !!!")
}



const elementsDel = document.querySelectorAll('.delete-btn');
for(const value of elementsDel){
  /* By this event (object) we can know everything about the element 
  that is clicked amoung the others element. We can use any name instade of event as the parameter. We can know it's html, it's parent. it's child, it's grandfather ect. Besides we can access all the things like object property. */
  value.addEventListener('click', function(event){
    event.target.parentNode.parentNode.style.display = "none";
  })
}

// const elementsDel = document.querySelectorAll('.delete-btn');
// for(const value of elementsDel){
//   /* By this event (object) we can know everything about the element 
//   that is clicked amoung the others element. We can use any name instade of event as the parameter. We can know it's html, it's parent. it's child, it's grandfather ect. Besides we can access all the things like object property. */
//   value.addEventListener('click', function(event){
//     event.target.parentNode.parentNode.style.display = "none";
//   })
// }



document.getElementById('clear-btn').addEventListener('click', function(e){
  
  // console.log(e.target.previousSibling);
  e.target.parentNode.style.display = "none";
})











})





