// const PORT = process.env.PORT || 8000
// const express = require('express')
// const app = express()

const container = document.getElementById("articles");

btnGetData.addEventListener("click", getData);
const btn = document.getElementById('btnGetData');
btn.addEventListener('click', () => {
  btn.style.visibility = 'hidden'
  const box = document.getElementById('box')
  box.style.visibility = 'visible'
});

const mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



const URL = "https://climate-change-updates2.p.rapidapi.com/news";
    
    async function getData() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'climate-change-updates2.p.rapidapi.com',
        'X-RapidAPI-Key': '5b66f6ade9msh4aace988c229faep16f5bajsn4ccfb44126f4'
      }
    }
    const res = await fetch(URL, options);
    const data = await res.json();
    renderData(data);
    console.log(Object.keys(data[0]));
}

 function renderData(characters) {
     characters.forEach((char) => {
         const cardBody = document.createElement("div");
         cardBody.classList.add("card");
         cardBody.innerHTML = `
         <p class="card-text fw-bold">News Title:</p>
         <h3 class="card-title fw-bold text-success">${char.title}</h3>
       
         <a href="${char.url}" class="pa text-decoration-none text-secondary py-1" target="_blank">Visit this article</a> 
         <a href="${char.url}" class="pa text-decoration-none" target="_blank">
         <img src="./images/newspaper.png" class="img-fluid  m-2 " alt="${char.source}" width="60px" height="60px">
        </a>
         <p>Source: ${char.source}</p>
       
         `;
         container.appendChild(cardBody);
     });
 }

// app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));