let h2 = document.querySelector("h2")
let p = document.querySelector("p")
let button = document.querySelector("button")

let fetch_quotes = async ()=>{
    const response = await fetch("https://quotable.io/random")
    let data = await response.json()
    console.log(data);
    h2.innerText = data.content;
    p.innerText = data.author;   
};

button.addEventListener("click", fetch_quotes)

setInterval(()=>{
 fetch_quotes()
}, 6000)
