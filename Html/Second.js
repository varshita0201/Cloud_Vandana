function reset(){
    document.getElementById('first').value='';
    document.getElementById('last').value='';
    document.getElementById('dob').value='';
    document.getElementById('country').value='';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('profession').value='';
    document.getElementById('email').value='';
    document.getElementById('no').value='';
    
}


function submit(){
    const firstName=document.getElementById('first').value;
    const LastName=document.getElementById('last').value;
    const Dob=document.getElementById('dob').value;
    const country=document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const profession=document.getElementById('profession').value;
    const email=document.getElementById('email').value;
    const number=document.getElementById('no').value;
    alert(`First Name:${firstName}\nSecond Name:${LastName}\nDOB:${Dob}\nCountry:${country}\nGender:${gender}\nProfession:${profession}\nEmail:${email}\nMobile No:${number}`);
    
    reset();
}
