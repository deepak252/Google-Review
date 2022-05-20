function createBusinessProfile(){
    const businessNameRef = document.getElementById("business-name");
    const businessEmailRef = document.getElementById("business-email");
    const businessAddressRef = document.getElementById("pac-input");
    const reviewLinkRef = document.getElementById("review-link");

    const errorBusinessNameRef = document.getElementById("error-business-name");
    const errorBusinessEmailRef = document.getElementById("error-business-email");
    const errorBusinessAddressRef = document.getElementById("error-business-address");

    // if (!validateForm()){
    //     return;
    // } 
    // persistData();
    // window.location.href="/profile.html"

    var isFormValid = true;


    if (!validateBusinessName(businessNameRef, errorBusinessNameRef)) {
        businessNameRef.oninput = (val) => {
            validateBusinessName(businessNameRef, errorBusinessNameRef);
        }
        isFormValid = false;
    }
    if (!validateBusinessEmail(businessEmailRef, errorBusinessEmailRef)) {
        businessEmailRef.oninput = (val) => {
            validateBusinessEmail(businessEmailRef, errorBusinessEmailRef);
        }
        isFormValid = false;
    }
    if (!validateBusinessAddress(businessAddressRef, reviewLinkRef, errorBusinessAddressRef)) {
        businessAddressRef.oninput = (val) => {
            validateBusinessAddress(businessAddressRef, reviewLinkRef, errorBusinessAddressRef);
        }
        isFormValid = false;
    }
    if(isFormValid){
        // persistData(businessNameRef,
        //     businessEmailRef,
        //     businessAddressRef,
        //     reviewLinkRef);
        // window.location.href="/profile.html"
        setProfile(userId,{
            uid : userId,
            businessName: businessNameRef.value,
            businessEmail : businessEmailRef.value,
            businessAddress: businessAddressRef.value,
            reviewLink: reviewLinkRef.value
        });
    }

}


// function persistData(businessNameRef,
//     businessEmailRef,
//     businessAddressRef,
//     reviewLinkRef){

//     const user = {
//         "businessName": businessNameRef.value.trim(),
//         "businessEmail": businessEmailRef.value.trim(),
//         "businessAddress": businessAddressRef.value.trim(),
//         "reviewLink":  reviewLinkRef.value.trim()
//     }
    
//     localStorage.setItem("user", JSON.stringify(user));

// }



function validateBusinessName(businessNameRef, errorBusinessNameRef) {
    try {
        if (businessNameRef.value.trim() === null || businessNameRef.value.trim() === "") {
            businessNameRef.style.border = "2px solid red";
            errorBusinessNameRef.innerText = "Business name is required";
            return false;
        } else {
            businessNameRef.style.border = "2px solid gray";
            errorBusinessNameRef.innerText = "";
            return true;
        }
    } catch (error) {
        console.log("validateBusinessName error : ", error);
    }
    
}


function validateBusinessEmail(businessEmailRef, errorBusinessEmailRef) {
    try{
        if (businessEmailRef.value.trim() === null || businessEmailRef.value.trim() === "") {
            businessEmailRef.style.border = "2px solid red";
            errorBusinessEmailRef.innerText = "Business email is required";
            return false;
        } else if (!String(businessEmailRef.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            businessEmailRef.style.border = "2px solid red";
            errorBusinessEmailRef.innerText = "Enter a valid business email";
            return false;
        } else {
            businessEmailRef.style.border = "2px solid gray";
            errorBusinessEmailRef.innerText = "";
            return true;
        }
    } catch (error){
        console.log("validateBusinessEmail error : ", error);
    }
}


function validateBusinessAddress(businessAddressRef, reviewLinkRef, errorBusinessAddressRef) {
    try {
        if (businessAddressRef.value.trim() === null || businessAddressRef.value.trim() === "") {
            businessAddressRef.style.border = "2px solid red";
            errorBusinessAddressRef.innerText = "Business address is required";
            return false;
        } 
        else if (reviewLinkRef.value.trim() === null || reviewLinkRef.value.trim() === "") {
            errorBusinessAddressRef.innerText = "Enter a valid business address";
            return false;
        }
        else {
            businessAddressRef.style.border = "2px solid gray";
            errorBusinessAddressRef.innerText = "";
            return true;
        }
    } catch (error) {
        console.log("validateBusinessAddress error : ", error);
    }
    
    
}