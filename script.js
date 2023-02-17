
let unseen = document.querySelectorAll(".unseen");
let unseenNotification = document.querySelector(".unseen-notification");
let markAllBtn = document.querySelector(".mark-all-btn");
let unreadMark = document.querySelectorAll(".unread-mark");


unseenNotification.innerText = unseen.length

markAllBtn.addEventListener("click", () => {

    unseen.forEach((notification) => {

        notification.classList.add('active');
        notification.classList.remove('unseen');
        let unseen = document.querySelectorAll(".unseen");
        unseenNotification.innerText = unseen.length

    })

})


unseen.forEach((notification) => {

    notification.addEventListener("click", (e) => {
        notification.classList.add('active');
        notification.classList.remove('unseen');
        let unseen = document.querySelectorAll(".unseen");
        unseenNotification.innerText = unseen.length;

    })


})



// unreadMark.forEach((unread) => {

//     unread.addEventListener("click", (e) => {

//         unread.style.display = 'none';

//     })

// })

