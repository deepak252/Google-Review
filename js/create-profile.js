function createProfile(){

    if (!validateForm()){
        return;
    } 
    persistData();
    window.location.href="/profile.html"

}

function validateForm(){
    validateUName();
    validateBusinessName();
    validateBusinessEmail();
    if(validateBusinessAddress()){
        validateReviewLink();
    }
    if (!validateUName() || !validateBusinessName() || !validateBusinessEmail() || !validateBusinessAddress() || !validateReviewLink()){
        return false;
    }
    return true;
   
}

function persistData(){

    const user = {
        "name": uName.value.trim(),
        "businessName": businessName.value.trim(),
        "businessEmail": businessEmail.value.trim(),
        "businessAddress": businessAddress.value.trim(),
        "reviewLink": reviewLink.value.trim()
    }
    
    localStorage.setItem("user", JSON.stringify(user));

}