let form =document.querySelector('form');
     form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let bmi = Math.floor(form.elements.weight.value/(form.elements.height.value**2/10000));
        form.elements.value.value=bmi;
        document.querySelector('button').disabled=true;
     }) ;
     let reset= document.querySelector('#reset');
     reset.addEventListener('click',(e)=>{
           form.elements.weight.value='';
           form.elements.height.value='';
           form.elements.value.value='';
           bmi.disabled=false;
     })