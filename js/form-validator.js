
const uName = document.getElementById("name");
const businessName = document.getElementById("business-name");
const businessAddress = document.getElementById("pac-input");
const businessEmail = document.getElementById("business-email");
const reviewLink = document.getElementById("review-link");

const uNameError = document.getElementById("name-error");
const businessNameError = document.getElementById("business-name-error");
const businessAddressError = document.getElementById("business-address-error");
const businessEmailError = document.getElementById("business-email-error");
const reviewLinkError = document.getElementById("review-link-error");

uName.oninput = (val) => {
    validateUName();
};
businessName.oninput = (val) => {
    validateBusinessName();
};
businessEmail.oninput = (val) => {
    validateBusinessEmail();
};
businessAddress.oninput = (val) => {
    validateBusinessAddress();
    reviewLink.value="";
};


function validateFields() {
    if (uName.value.trim() === null || uName.value.trim() === "") {
        uName.style.border = "2px solid red";
        uNameError.style.display = "block";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "block";
    }
    if (businessName.value.trim() === null || businessName.value.trim() === "") {
        businessName.style.border = "2px solid red";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "none";
    }
    if (businessEmail.value.trim() === null || businessEmail.value.trim() === "") {
        businessEmail.style.border = "2px solid red";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "none";
    }
    if (businessAddress.value.trim() === null || businessAddress.value.trim() === "") {
        businessAddress.style.border = "2px solid red";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "none";
    }
    if (reviewLink.value.trim() === null || reviewLink.value.trim() === "") {
        reviewLink.style.border = "2px solid red";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "none";
    }
    return true;
}

function validateUName(){
    if (uName.value.trim() === null || uName.value.trim() === "") {
        uName.style.border = "2px solid red";
        uNameError.style.display = "block";
        return false;
    } else {
        uName.style.border = "2px solid gray";
        uNameError.style.display = "none";
        return true;
    }
}

function validateBusinessName() {
    if (businessName.value.trim() === null || businessName.value.trim() === "") {
        businessName.style.border = "2px solid red";
        businessNameError.style.display = "block";
        return false;
    } else {
        businessName.style.border = "2px solid gray";
        businessNameError.style.display = "none";
        return true;
    }
}

function validateBusinessEmail() {
    if (businessEmail.value.trim() === null || businessEmail.value.trim() === "") {
        businessEmail.style.border = "2px solid red";
        businessEmailError.style.display = "block";
        return false;
    } else {
        businessEmail.style.border = "2px solid gray";
        businessEmailError.style.display = "none";
        return true;
    }
}

function validateBusinessAddress() {
    if (businessAddress.value.trim() === null || businessAddress.value.trim() === "") {
        businessAddress.style.border = "2px solid red";
        businessAddressError.style.display = "block";
        return false;
    } else {
        businessAddress.style.border = "2px solid gray";
        businessAddressError.style.display = "none";
        return true;
    }
}

function validateReviewLink() {
    if (reviewLink.value.trim() === null || reviewLink.value.trim() === "") {
        reviewLinkError.style.display = "block";
        return false;
    } else {
        reviewLinkError.style.display = "none";
        return true;
    }
}