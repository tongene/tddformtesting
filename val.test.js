import {valName} from './val'
 
test("username should return only letters, at least 10 letters long",()=>{
    expect(valName('abcdefghijk')).toBe(true)
})
 
test("password should return only numbers at least 10 letters long",()=>{
    expect(valName('12345678901')).toBe(true)
})

 
 