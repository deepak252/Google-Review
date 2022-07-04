const getCurrentUserProfile=async ()=>{
    try{
        var docSnapshot = await db.doc(`profiles/${userId}`).get();
        if (!docSnapshot.exists) {
            // alert("No profile exists");
        } else {
            // alert(docSnapshot.data());
            return docSnapshot.data();
        }
    }catch(error){
        formRef.style.display = "block";
        console.log("getProfile error : ",error);
    }
    
    // return db.doc(`profiles/${userId}`).get()
    //     .then((doc)=>{
    //         alert(userId);
    //         if(doc.exists){
    //             alert(doc.data());
    //             return doc.data();
    //         }
    //         else alert("No such document");
    //     })
    //     .catch((error) => alert("getProfile error : ", error));
    
}

const setProfile=(uid,data)=>{
    var formRef = document.getElementsByClassName("form")[0];
    var pleaseWaitRef = document.getElementById("please-wait");
    var googleMapRef = document.getElementById("map");

    formRef.style.display = "none";
    googleMapRef.style.display = "none";
    pleaseWaitRef.style.display = "flex";

    var pathName = window.location.pathname.toString();
    var rootPathName = pathName.slice(0, pathName.lastIndexOf('/'));
    
    db.doc(`profiles/${uid}`).set(data).then(() => {
        formRef.style.display = "block";
        googleMapRef.style.display = "block";
        pleaseWaitRef.style.display = "none";
        // alert("Profile created successfully");
        window.location.href = rootPathName +"/profile.html";
    })
    .catch((err) => {
        formRef.style.display = "block";
        googleMapRef.style.display = "block";
        pleaseWaitRef.style.display = "none";
        console.log("setProfile error : ", error);
    })
}