var li = document.createElement('li');
li.innerText = 'list-5';
ul = document.getElementById('listNumber')
ul.appendChild(li);

var listTag = document.createElement('li');
listTag.innerText='list-6';
ul.appendChild(listTag);

var listElement = document.createElement('li');
listElement.innerText = 'list-7';
ul.appendChild(listElement);

var listElement2 = document.createElement('li');
listElement2.innerText = 'list-8';
ul.appendChild(listElement2);

var listElement3 = document.createElement('li');
listElement3.innerText = 'list-9';
ul.appendChild(listElement3);

var listElement4 = document.createElement('li');
listElement4.innerText = 'list-10';
ul.appendChild(listElement4);



articles = document.getElementsByClassName('blog');
// console.log(articles);
for(const article of articles){
    article.style.border = '2px solid orangered';
    article.style.margin = '20px'
}

var article = document.createElement('article');
article.classList.add('blog')
h3 = document.createElement('h3');
h3.innerText = 'my speacial blog-4';
p = document.createElement('p');
p.innerText = 'Veniam modi excepturi, perferendis soluta rem earum, similique dolore placeat quos tenetur doloribus, voluptates ullam deserunt voluptatum commodi magnam et maiores architecto asperiores nulla ad reiciendis optio? Ab, consequatur ea!';
article.appendChild(h3);
article.appendChild(p);
var blog = document.getElementById('blog-section');
blog.appendChild(article);

article = document.createElement('article');
article.classList.add('blog')
h3 = document.createElement('h3');
h3.innerText = 'my speacial blog-5'
p = document.createElement('p');
p.innerText = 'Veniam modi excepturi, perferendis soluta rem earum, similique dolore placeat quos tenetur doloribus, voluptates ullam deserunt voluptatum commodi magnam et maiores architecto asperiores nulla ad reiciendis optio? Ab, consequatur ea!'
article.appendChild(h3);
article.appendChild(p);
blog = document.getElementById('blog-section');
blog.appendChild(article);

var h1 = document.getElementById('heading-one');
h1.innerHTML =`
    <h1> MY AWESOME BLOG - 1 </h1>
`

articles = document.getElementsByClassName('blog');
// console.log(articles);
for(const article of articles){
    article.style.border = '2px solid orangered';
    article.style.margin = '20px'
}
