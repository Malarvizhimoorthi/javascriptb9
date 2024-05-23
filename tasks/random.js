const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['pink','red','yellow','black','violet'];

body.Style.backgroundcolor='pink';


 button.addEventListener('click',function(){

    const colorindex=parseInt(math.random()*colors.length);

   

    body.Style.backgroundcolor=colors[colorindex];
})