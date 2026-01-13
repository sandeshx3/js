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


