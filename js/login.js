//checking login stauts
let isLoggedIn = JSON.parse((localStorage.getItem("isLoggedIn")))

if(isLoggedIn==null){
    localStorage.setItem("isLoggedIn","false")
    isLoggedIn = false
}

var loggedUser =  localStorage.getItem("loggedUser") || ""
var users =  JSON.parse((localStorage.getItem("users"))) || []



//checking user to change signup to username
const checkUser = document.getElementById("checkUser")
const sign = document.getElementById("signUp")

if(isLoggedIn){
    sign.style.display="none"
    checkUser.innerHTML = "Logout, "+ loggedUser


}

checkUser.addEventListener("click",function(){
    isLoggedIn = false
    localStorage.setItem("isLoggedIn","false")
    localStorage.setItem("loggedUser","")
    checkUser.innerHTML=""
    sign.style.display="block"
    window.location.href = "/pages/login.html"
})


//from signup
function setUsers(username,email,password){
    let user = {
        username,email,password
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    window.location.href = "/pages"
}

//from login
function login(email,password){
   for(var i=0;i<=users.length;i++){
        if(users[i]?.email == email && users[i]?.password == password){
            isLoggedIn = true
            localStorage.setItem("isLoggedIn","true")
            let lUser = users[i].username
            localStorage.setItem("loggedUser",lUser)
            sign.style.display="none"
            checkUser.innerHTML = "Logout, "+ loggedUser
            window.location.href = "/pages"
            break
        }
   }
}

//Booking system
var bookedRooms =  JSON.parse((localStorage.getItem("bookedRooms"))) || []

let bookedRoomsByUser = localStorage.getItem("bookedRoomsByUser") || {}

const book1 = document.getElementById("roomOne");
const book2 = document.getElementById("roomTwo");
const book3 = document.getElementById("roomThree");
const book4 = document.getElementById("roomFour");
const book5 = document.getElementById("roomFive");
const book6 = document.getElementById("roomSix");

const book = document.querySelectorAll(".book")


if(isLoggedIn){
    for(let i=0;i<=bookedRooms.length;i++){
        if(bookedRooms[i]?.username == loggedUser){
            for(let x=0;x<=bookedRooms[i].roomIds.length;x++){
                book.forEach(function(value,index){
                    const id = value.getAttribute("data-roomId")
                    if(id==bookedRooms[i].roomIds[x]){
                        value.innerHTML="Already Booked, unbook?"
                        value.style.background="tomato"
                    }
                    
                })
            }
            
        }      
    }
}


function setBookedRooms(username,roomId,value){

    let isAlreadyUser = false

    for(let i=0;i<=bookedRooms.length;i++){
        if(bookedRooms[i]?.username == username){
            if(!bookedRooms[i].roomIds.includes(roomId)){
                bookedRooms[i].roomIds.push(roomId)
                value.innerHTML="Already Booked, unbook?"
                value.style.background="tomato"
            }else{
                bookedRooms[i].roomIds.pop(roomId)
                value.innerHTML="Book"
                value.style.background="#3A6B34"
            }
            isAlreadyUser = true
            break
        }      
    }
    if (!isAlreadyUser){
        let data = {
        username:username,
        roomIds:[roomId]
        }
        bookedRooms.push(data)
    }
    localStorage.setItem("bookedRooms",JSON.stringify(bookedRooms))

}

book.forEach(function(value,index){
    value.addEventListener("click",()=>{
        const id = value.getAttribute("data-roomId")
        if(isLoggedIn){
        setBookedRooms(loggedUser,id,value)

    }
    else{
        window.location.href="/pages/updated-signin.html"
    }
    })
})



