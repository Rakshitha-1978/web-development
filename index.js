var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
    {
        
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]
var index=0;
function toggle(){
    if(index==0)
        index=1;
    else
        index=0;
    document.getElementById("username").innerHTML=users[index].name;
     document.getElementById("gender").innerHTML=users[index].gender;
      document.getElementById("image").src=users[index].image;
}
function randomUser(){
    console.log("hi");
    fetch("https://randomuser.me/api")
    .then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var image=user.picture.large;
        var fullName=user.name.title + " " +user.name.first +"  " +user.name.last;
        document.getElementById("username").innerHTML=fullName;
        document.getElementById("gender").innerHTML=gender;
        document.getElementById("image").src=image;
     })
}