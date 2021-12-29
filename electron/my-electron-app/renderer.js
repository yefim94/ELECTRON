const cat_result = document.querySelector('#cat_result');
const cat_btn = document.querySelector('#cat_btn');
cat_btn.addEventListener("click", (e) => {
  fetch('https://thatcopy.pw/catapi/rest/').then((res) => res.json()).then((data)=> {
    cat_result.innerHTML= `<img src=${data.url} />` 
  })
})