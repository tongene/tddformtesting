const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorEl = document.getElementById('error')
import {valName} from './val.js' 

  form.addEventListener('submit', (e)=>{
    let msg= []
    e.preventDefault()
 
  const msgAll = valName( username , password)
 
  if( !msgAll){
    msg.push('Invalid Name or Password')
  }
      
  if(msg.length>0){
      e.preventDefault()
      errorEl.innerText=msg.join(', ')
      
      }


         username.value = '';
 password.value = '';
  })