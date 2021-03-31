
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
    };

    if(firebaseConfig.apikey==null)
        window.confirm("firebaseconfig has not been initialized yet");
    else {
        
        try{
            firebase.initializeApp(firebaseConfig);
        }
        catch(error){
            window.confirm("Error initializing the database based on the user configuration")
        }
    }



    var db = firebase.firestore();

   
   const inputName = document.querySelector("#userName");
    const inputPassword = document.querySelector("#userPassword");
    const inputEmail = document.querySelector("#userEmail");
    const saveButton = document.querySelector("#saveButton");
    const reportButton = document.querySelector("#reportButton");
    const formUserName=document.querySelector("#fname");
    const formPetName=document.querySelector("#petName");
    const formPetDescription=document.querySelector("#petDescription");
    const formPetPicture= "C:\\Oreo.jpeg";
    const refreshButton=document.querySelector("#Refresh");
    const formUserNumber =document.querySelector("#userContact");
    const formLastSeen=document.querySelector("#lastSeen");
    
    if(saveButton!=null){
        saveButton.addEventListener("click", function addData(event) {
            event.preventDefault();
            
           db.collection("BoomerangUsers").add({
                FullName: inputName.value,
                Password: inputPassword.value,
                Email: inputEmail.value,
                Score: 0,
    
            }).then(function() {
                console.log("saved!");
            }).catch(function(error) {
                console.log("error!!!", error);
            });
        
        });
    }
    if(reportButton!=null){ 
        reportButton.addEventListener("click", function addData(event) {
        event.preventDefault();
            console.log(formPetPicture);
        db.collection("lostPets").add({
            UserName: formUserName.value,
            PetName: formPetName.value,
            LastSeen: formLastSeen.value,
            Picture: formPetPicture,
            Contact: formUserNumber.value,
            PetDescription: formPetDescription.value,
        }).then(function() {
            console.log("saved!");
        }).catch(function(error) {
            console.log("error!!!", error);
        });
        if(window.confirm('Posted! Your beloved pet will be found in no time!'));
            
    });

    
}
    
    db.collection("lostPets").onSnapshot((snapshot)=>{

        snapshot.forEach(doc => {
            var userPet = doc.data();
            console.log(userPet);
            console.log(userPet["PetName"]);
            console.log(userPet.PetName);

            const printPetName = document.createElement("p");
            printPetName.innerText = userPet["PetName"];
            document.getElementById("printName").appendChild(printPetName);

            const printPetDescription = document.createElement("p");
            printPetDescription.innerText = userPet["PetDescription"];
            document.getElementById("petDescription").appendChild(printPetDescription);

            const freeText = document.createElement("p");
            freeText.innerText="Contact information of the owner ";
            document.getElementById("freeText1").appendChild(freeText);

            const freeText2 = document.createElement("p");
            freeText2.innerText="Name: "+userPet["UserName"];
            document.getElementById("freeText2").appendChild(freeText2).setAttribute("border","2");

            const printLastSeen =document.createElement("a");
            printLastSeen.innerText= "last Seen at "+userPet["LastSeen"];
            printLastSeen.setAttribute('href',"BoomerangMAPS.html");
            document.getElementById("lastSeen").appendChild(printLastSeen);
            

            const petImage = document.createElement("IMG");
            petImage.src= userPet["Picture"];
            document.getElementById("petPicture").appendChild(petImage);
            petImage.id = 'imagePet';

            const userMobile = document.createElement("p");
            contactNumber.innerText= "Contact Number: "+userPet["Contact"];
            document.getElementById("contactNumber").appendChild(userMobile);




        })
        
    })


    