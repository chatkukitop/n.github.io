"use strict";
// open chat 
const footer = document.querySelector('.footer')
const chatbox  = document.querySelector('.chat-box')
const inputbox  = document.querySelector('.input-box')
const chattexts  = document.querySelector('.chat-texts')
const frominput = document.querySelector('.frominput')
const forli = document.querySelector('.forli')
const sendli = document.querySelector('.sendli')
const del = document.querySelector('.del1')



footer.onclick=()=>{
    chatbox.classList.toggle("d-none");
    inputbox.classList.toggle("d-none");
    frominput.focus()
}
frominput.onkeyup=(element)=>{

if(element.keyCode==13){
        const inputmessega =frominput.value.trim()//inputu goturdum
        if(inputmessega[0]==inputmessega[0].toUpperCase()){
            const itemli=document.createElement('li')//li
       itemli.className='d-flex align-items-end'
       const imgcallcenter=document.createElement('img')//img
       imgcallcenter.src='imgs/img1.jpg'
       const messega=document.createElement('p')//p
       messega.innerText=inputmessega//temiz input elimde
       itemli.appendChild(imgcallcenter)
       itemli.appendChild(messega)
       forli.appendChild(itemli)
       frominput.value= ""
       let xH = chattexts.scrollHeight; 
        chattexts.scrollTo(0, xH);
        del.addEventListener('click',function(){
            if(itemli.classList.contains('selected')){
                itemli.remove()}
                frominput.focus()
                del.classList.add("d-none")
        });
        imgcallcenter.addEventListener('click',function(){
            itemli.classList.toggle('selected')
            for (let i = 0; i < forli.children.length; i++) {
                if(forli.children[i].classList.contains('selected')){
                        del.classList.remove("d-none")
                        break;
                     }
                else{del.classList.add("d-none") }
            }
        });
        
        
         
        }
        else{
            const itemli=document.createElement('li')//li
            itemli.className='d-flex align-items-end justify-content-end userp'
            const imguser=document.createElement('img')//img
            imguser.src='imgs/img2.png'
            const messega=document.createElement('p')//p
            messega.innerText=inputmessega//temiz input elimde
            itemli.appendChild(messega)
            itemli.appendChild(imguser)
            forli.appendChild(itemli)
            frominput.value= ""
            let xH = chattexts.scrollHeight; 
            chattexts.scrollTo(0, xH);
            del.addEventListener('click',function(){
                if(itemli.classList.contains('selected')){
                    itemli.remove()}
                    frominput.focus()
                    del.classList.add("d-none")
            });
            imguser.addEventListener('click',function(){
                itemli.classList.toggle('selected')
                for (let i = 0; i < forli.children.length; i++) {
                    if(forli.children[i].classList.contains('selected')){
                            del.classList.remove("d-none")
                            break;
                         }
                    else{del.classList.add("d-none") }
                }
            });
            
            
        }

       
    }
   
}
sendli.onclick=()=>{ 
    
        frominput.focus()
        const inputmessega =frominput.value.trim()//inputu goturdum
        if(inputmessega[0]==inputmessega[0].toUpperCase()){
            const itemli=document.createElement('li')//li
       itemli.className='d-flex align-items-end'
       const imgcallcenter=document.createElement('img')//img
       imgcallcenter.src='imgs/img1.jpg'
       const messega=document.createElement('p')//p
       messega.innerText=inputmessega//temiz input elimde
       itemli.appendChild(imgcallcenter)
       itemli.appendChild(messega)
       forli.appendChild(itemli)
       frominput.value= ""
       let xH = chattexts.scrollHeight; 
        chattexts.scrollTo(0, xH);
        del.addEventListener('click',function(){
            if(itemli.classList.contains('selected')){
                itemli.remove()}
                frominput.focus()
                del.classList.add("d-none")
        });
        imgcallcenter.addEventListener('click',function(){
            itemli.classList.toggle('selected')
            for (let i = 0; i < forli.children.length; i++) {
                if(forli.children[i].classList.contains('selected')){
                        del.classList.remove("d-none")
                        break;
                     }
                else{del.classList.add("d-none") }
            }
        });
        
        
        }
        else{
            const itemli=document.createElement('li')//li
            itemli.className='d-flex align-items-end justify-content-end userp'
            const imguser=document.createElement('img')//img
            imguser.src='imgs/img2.png'
            const messega=document.createElement('p')//p
            messega.innerText=inputmessega//temiz input elimde
            itemli.appendChild(messega)
            itemli.appendChild(imguser)
            forli.appendChild(itemli)
            frominput.value= ""
            let xH = chattexts.scrollHeight; 
             chattexts.scrollTo(0, xH);
             del.addEventListener('click',function(){
                if(itemli.classList.contains('selected')){
                    itemli.remove()}
                    frominput.focus()
                    del.classList.add("d-none")
            });
            imguser.addEventListener('click',function(){
                itemli.classList.toggle('selected')
                for (let i = 0; i < forli.children.length; i++) {
                    if(forli.children[i].classList.contains('selected')){
                            del.classList.remove("d-none")
                            break;
                         }
                    else{del.classList.add("d-none") }
                }
            });
           
        }//while yoxla

       
    
   
}






  

