const getCurrentUserProfile=async ()=>{
    // alert(userId);
    try{
        var docSnapshot = await db.doc(`profiles/${userId}`).get();
        if (!docSnapshot.exists) {
            // alert("No profile exists");
        } else {
            // alert(docSnapshot.data());
            return docSnapshot.data();
        }
    }catch(error){
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
    db.doc(`profiles/${uid}`).set(data).then(() => {
        // alert("Profile created successfully");
        window.location.href = "/profile.html";
    })
    .catch((err) => {
        console.log("setProfile error : ", error);
    })
}