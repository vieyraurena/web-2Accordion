const button = document.querySelectorAll('.btn-accordion');
const content = document.querySelectorAll('.info-accordion');

close();

function close (){
  for (let index = 0; index < content.length; index++){
   content[index].style.display= 'none';
  }
};

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.currentTarget;
    let inf = element.nextElementSibling;   
    if (inf.style.display == 'block'){
      close();    
    } else {
      close();    
      inf.style.display= 'block';
    }
  })
};