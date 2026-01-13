document.getElementById('title')
<h1 id=​"title" class=​"heading">​dom learning​</h1>​



document.getElementById('title').id
'title'

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute('class')
'heading'


document.getElementById('title').setAttribute ('calss','test')
undefined
// this will add attributes as class named test


title.style.backgroundColor = 'green'
'green'


const title = document.getElementById('title')
undefined


title.textContent
'dom learning'

title.innerText
'dom learning'

after <span style='display:none'>check</span>

title.textContent
'dom learning check '


title.innerText
'dom learning'

title.innerHTML
'dom learning <span style="display:none">check </span>'
// this support html tags


// query selector
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

document.querySelector('h2')
<h2>​Lorem ipsum dolor sit. ​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​


document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​


to select the input attributes
<input type="password" name="" id="">
document.querySelector('input[type='password']')


document.querySelector('p:first-child')


document.querySelector( 'ul')
<ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const myul = document.querySelector('ul')
undefined

myul.querySelector('li')
<li>​::marker​"one "</li>​

const turngreen = myul.querySelector('li')
undefined

turngreen.style.backgroundColor = 'red'
'red'


turngreen.innerText = 'five'
'five'

document.querySelectorAll('li')
NodeList(3) [li, li, li] -> this is not the array

[[Prototype]]
: 
NodeList
entries
: 
ƒ entries()
forEach
: 
ƒ forEach()
item
: 
ƒ item()
keys
: 
ƒ keys()
length
: 
(...)
values
: 
ƒ values()
constructor
: 
ƒ NodeList()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.toStringTag)
: 
"NodeList"
get length
: 
ƒ length()
[[Prototype]]
: 
Object

look here a forEach is there but map is not there



const myArray = [1,2,3,4,5]
undefined
myArray
(5) [1, 2, 3, 4, 5]

now look at the protype there is map,and 


const mylist = document.querySelectorAll('li')
undefined


mylist[1].style.color = 'blue'
'blue'




mylist.forEach(function (l){
    l.style.backgroundColor = 'green'
})

for node list use forEach
in node list there is not map
it can be convert into array 


tempClassList = document.getElementsByClassName('list')
as there is not any forEach attribute so it can be converted it into array to use the attributes 

Array.from(tempClassList)
const myconvertedarray = Array.from(tempClassList)

myconvertedarray.forEach(function(x){
    x.style.color = 'blue'
})
