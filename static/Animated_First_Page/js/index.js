document.querySelector('#mainBtn').addEventListener('click',(event)=>{
    event.preventDefault(false);

    let userEmail=document.querySelector('input[name="userEmail"]')
    let userPassword=document.querySelector('input[name="userPassword"]')
    let confirmPassword=document.querySelector('input[name="confirmPassword"]')

    
  if((userPassword.value===confirmPassword.value)&&(userPassword.value!=""&&confirmPassword.value!="")){
    console.log('User Email:', userEmail.value);
    console.log('User Password:', userPassword.value);
    console.log('Confirm Password:', confirmPassword.value);
    prompt("Data Saved Successfully!")
    location.reload(true)
  }
  else if(userPassword.value==""&&confirmPassword.value==""&&userEmail.value==""){
    prompt("Please Enter Something")
    location.reload(true)
  }
  else{
    prompt('Password Mismatch!')
    console.log('User Email:', userEmail.value);
    console.log('User Password:', userPassword.value);
    console.log('Confirm Password:', confirmPassword.value);
    location.reload(true);
  }
    
})

document.querySelector('a[name="logo"]').addEventListener('click',(event)=>{
    window.location.reload(true)
})

document.querySelector('#getStarted').addEventListener('click',(event)=>{
    let getStarted=document.querySelector("#getStarted")
    getStarted.href="/external"
})

