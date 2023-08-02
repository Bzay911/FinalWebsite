let rooms = [
    {
        id:1,
        heading:"Spacious room, perfect for a family",
        features:"2 beds, 1 bathroom, 1 balcony",
        host:"Saurab Khanal",
        time: "Posted: 1 week ago",
        img:"./images/room1.jpg"
    },
    {
        id:2,
        heading:"Spacious room, perfect for a family",
        features:"2 beds, 1 bathroom, 1 balcony",
        host:"Saurab Khanal",
        time: "Posted: 1 week ago",
        img:"./images/room2.jpg"

    }
]

let bookedRooms = []

const btn = document.querySelector(".button_room")
    btn.addEventListener('click',()=>{
        let room_id = btn.getAttribute("data-id")
        bookedRooms.push(room_id)
        localStorage.setItem('booked',JSON.parse(bookedRooms))
})
