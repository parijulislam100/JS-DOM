console.log(55);
var h3 = document.getElementsByTagName("h3");
// console.log(h3)

for(const h of h3){
    console.log(h)
}

var para = document.getElementsByTagName("p");
console.log(para);
for(const p of para){
    // console.log(p)
    p.style.color = "green";
    p.style.backgroundColor= "red";
    p.style.fontSize = "2em";
}
var blog = document.getElementById("blog");
// console.log(blog.innerText)
//  blog.innerText = "HARUN";
blog.innerHTML = `
    <h1>speacial header </h1>
`
