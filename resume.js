document.querySelector('.fa-sun').addEventListener('click',()=>{

if(localStorage.getItem('theme')==='dark'){
localStorage.removeItem('theme');
}else{
    localStorage.setItem('theme','dark');
}

addDark();
});
 
function addDark(){
try{
if(localStorage.getItem('theme')==='dark'){
    document.querySelector('html').classList.add('dark');
    document.querySelector('.fa-sun').textContent ='nightlight';
}else{
    document.querySelector('html').classList.remove('dark');
    document.querySelector('.fa-sun').textContent ='light_mode';
}
}
catch(err){}
}

addDark();