
export function valName(uss,pss ){
 const ussLen= uss.value.length >10 
 const ussMsg =/^[a-z]*$/.test(uss.value)
 const pssLen= pss.value.length >10 
 const pssMsg =/^[0-9]*$/.test(pss.value)
return ussLen &&ussMsg &&pssLen&&pssMsg

}