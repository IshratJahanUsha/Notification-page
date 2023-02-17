
let unseen = document.querySelectorAll(".unseen");
let unseennotification = document.querySelector(".unseen-notification");
let unreadMark = document.querySelectorAll(".unread-mark");
let markAllBtn = document.querySelector(".mark-all-btn");

unseennotification.innerText = unseen.length

markAllBtn.addEventListener("click",()=>{

    unseen.forEach((notification)=>{

            notification.classList.add('active');
            notification.classList.remove('unseen');
            let unseen = document.querySelectorAll(".unseen");
            unseennotification.innerText = unseen.length

        })
        let unreadMark = document.querySelectorAll(".unread-mark");
        unreadMark.style.display = none ;  

})


unseen.forEach((notification)=>{

    notification.addEventListener("click",(e)=>{
        notification.classList.add('active');
        notification.classList.remove('unseen');
        let unseen = document.querySelectorAll(".unseen");
        unseennotification.innerText = unseen.length
    })

})


