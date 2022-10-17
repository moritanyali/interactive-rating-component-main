const btns = document.querySelectorAll('.number-btn');
const submitBtn = document.querySelector('.submit-btn');
const section = document.getElementById('section');
const main = document.getElementById('main');
const number = document.querySelector('.selected-number')


 for (i = 0; i < btns.length; i++) {

   btns[i].addEventListener('click', function(){
   
       this.classList.add('orange-color');
       
       console.log(this.innerHTML);
   
       number.innerHTML = this.innerHTML;

       

      
       if(this.classList.contains('orange-color'))
       
       this.previousElementSibling.classList.remove('orange-color')
       this.nextElementSibling.classList.remove('orange-color')
       
       submitBtn.addEventListener('click', function(){
   
        section.classList.add('none');
        main.classList.add('grid');
       
        

    
       });
    
       }
      
   
       
   )
  
   
  
  };

  

  
