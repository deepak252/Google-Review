const createUser = () =>{
    const uNameRef = document.getElementById("name");
    const emailRef = document.getElementById("email");
    const passwordRef = document.getElementById("password");
    const confirmPasswordRef = document.getElementById("confirm-password");

    const uNameErrorRef = document.getElementById("error-name");
    const emailErrorRef = document.getElementById("error-email");
    const passwordErrorRef = document.getElementById("error-password");
    const confirmPasswordErrorRef = document.getElementById("error-confirm-password");
    var isFormValid = true;


    if (!validateName(uNameRef, uNameErrorRef)){
        uNameRef.oninput = (val) => {
            validateName(uNameRef, uNameErrorRef);
        }
        isFormValid=false;
    }
    if (!validateEmail(emailRef, emailErrorRef)) {
        emailRef.oninput = (val) => {
            validateEmail(emailRef, emailErrorRef);
        }
        isFormValid = false;
    }
    if (!validatePassword(passwordRef, passwordErrorRef)) {
        passwordRef.oninput = (val) => {
            validatePassword(passwordRef, passwordErrorRef);
        }
        isFormValid = false;
    }
    if (!validateConfirmPassword(passwordRef, confirmPasswordRef, confirmPasswordErrorRef)) {
        confirmPasswordRef.oninput = (val) => {
            validateConfirmPassword(passwordRef, confirmPasswordRef, confirmPasswordErrorRef);
        }
        isFormValid = false;
    }

    if(isFormValid){
        var formRef = document.getElementById("form");
        var pleaseWaitRef = document.getElementById("please-wait");
        formRef.style.display = "none";
        pleaseWaitRef.style.display = "flex";
        
        auth.createUserWithEmailAndPassword(emailRef.value, passwordRef.value).then((success) => {
            // var user = auth.currentUser;
            // var uid;
            // if (user != null) {
            //     uid = user.uid;

            //     var userData = {
            //         'uid': uid,
            //         'name': uNameRef.value,
            //         'email':emailRef.value,
            //     }
            //     //Adding userData to firestore database
            //     db.doc(`users/${uid}`)
            //         .set(userData)
            //         .then((res) => {
            //             console.log("User added successfully");
            //             formRef.style.display = "block";
            //             pleaseWaitRef.style.display = "none";
            //         })
            //         .catch((error) => {
            //             alert("Something went wrong");
            //             console.error("Error adding document: ", error);
            //             formRef.style.display = "block";
            //             pleaseWaitRef.style.display = "none";
            //         });
            //     // console.log("Account created successfully : ", user);
            // }else{
            //     formRef.style.display = "block";
            //     pleaseWaitRef.style.display = "none";
            // }

            // db.collection("users").add(userData)
            // .then((docRef) => {
            //     console.log("Document written with ID: ", docRef.id);
            // })
            // .catch((error) => {
            //     console.error("Error adding document: ", error);
            // });

        }).catch((error) => {
            formRef.style.display = "block";
            pleaseWaitRef.style.display = "none";
            alert(emailAuthException(error.code));
            // alert(error.message);
            // console.log(error.code," : ",error.message);
        });
    }
    

}


const login = () => {
    const emailRef = document.getElementById("email");
    const passwordRef = document.getElementById("password");

    const emailErrorRef = document.getElementById("error-email");
    const passwordErrorRef = document.getElementById("error-password");
    var isFormValid = true;


    if (!validateEmail(emailRef, emailErrorRef)) {
        emailRef.oninput = (val) => {
            validateEmail(emailRef, emailErrorRef);
        }
        isFormValid = false;
    }
    if (!validatePassword(passwordRef, passwordErrorRef)) {
        passwordRef.oninput = (val) => {
            validatePassword(passwordRef, passwordErrorRef);
        }
        isFormValid = false;
    }

    if (isFormValid) {
        var formRef = document.getElementById("form");
        var pleaseWaitRef = document.getElementById("please-wait");
        formRef.style.display = "none";
        pleaseWaitRef.style.display = "flex";
        auth.signInWithEmailAndPassword(emailRef.value, passwordRef.value)
            .then((userCredential) => {
                // Signed in 
                formRef.style.display = "block";
                pleaseWaitRef.style.display = "none";
                const user = userCredential.user;
                console.log("User signed in : ", userCredential);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                formRef.style.display = "block";
                pleaseWaitRef.style.display = "none";
                alert(emailAuthException(error.code));
                
            });
    }
}


const logout = () => {
        auth.signOut()
            .then(() => {
                // Sign out successful 
                console.log("Sign out successful");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(emailAuthException(error.code));

            });


}


function validateName(uNameRef,uNameError) {
    if (uNameRef.value.trim() === null || uNameRef.value.trim() === "") {
        uNameRef.style.border = "2px solid red";
        uNameError.innerText = "Name is required";
        return false;
    } else {
        uNameRef.style.border = "2px solid gray";
        uNameError.innerText = "";
        return true;
    }
}


function validateEmail(emailRef, emailErrorRef) {
    if (emailRef.value.trim() === null || emailRef.value.trim() === "") {
        emailRef.style.border = "2px solid red";
        emailErrorRef.innerText = "Email is required";
        return false;
    } else if (!String(emailRef.value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        emailRef.style.border = "2px solid red";
        emailErrorRef.innerText = "Enter a valid email";
        return false;
    }else {
        emailRef.style.border = "2px solid gray";
        emailErrorRef.innerText = "";
        return true;
    }
}


function validatePassword(passwordRef, passwordErrorRef) {
    if (passwordRef.value.trim() === null || passwordRef.value.trim() === "") {
        passwordRef.style.border = "2px solid red";
        passwordErrorRef.innerText = "Password can't be empty";
        return false;
    } else {
        passwordRef.style.border = "2px solid gray";
        passwordErrorRef.innerText = "";
        return true;
    }
}


function validateConfirmPassword(passwordRef, confirmPasswordRef, confirmPasswordErrorRef) {
    if (confirmPasswordRef.value.trim() === null || confirmPasswordRef.value.trim() === "" || passwordRef.value!=confirmPasswordRef.value) {
        confirmPasswordRef.style.border = "2px solid red";
        confirmPasswordErrorRef.innerText = "Password not match";
        return false;
    } else {
        confirmPasswordRef.style.border = "2px solid gray";
        confirmPasswordErrorRef.innerText = "";
        return true;
    }
}


