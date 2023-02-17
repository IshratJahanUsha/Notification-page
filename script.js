
let unseen = document.querySelectorAll(".unseen");
let unseenNotification = document.querySelector(".unseen-notification");
let unreadMark = document.querySelectorAll(".unread-mark");
let markAllBtn = document.querySelector(".mark-all-btn");

// let unseenAll = document.querySelectorAll(".notification");

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
        unseenNotification.innerText = unseen.length
    })


})


unreadMark.forEach((unread) => {

    unread.addEventListener("click", (e) => {

        unread.style.display = 'none';

    })

})





// unseenAll.forEach((unseen) => {

//     unseen.addEventListener("click", (e) => {

//         let unreadMark = document.querySelectorAll(".unread-mark");
//         unreadMark.forEach((unread) => {
//             unread.style.display = 'none';
//         })

//         // unseen.style.display = 'none';
//     })

// })



