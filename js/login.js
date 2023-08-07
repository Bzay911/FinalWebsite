
let isLoggedIn = JSON.parse((localStorage.getItem("isLoggedIn")))

if(isLoggedIn==null){
    localStorage.setItem("isLoggedIn","false")
    isLoggedIn = false
}

var loggedUser =  localStorage.getItem("loggedUser") || ""
var users =  JSON.parse((localStorage.getItem("users"))) || []

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
})




//from signup
function setUsers(username,email,password){
    let user = {
        username,email,password
    }
    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
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
            break
        }
   }
}