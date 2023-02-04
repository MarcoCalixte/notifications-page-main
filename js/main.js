"use strict";
const unreadMessages = document.querySelectorAll('#form-div');
const markAll = document.querySelector('#mark-all');
const notifications = document.querySelector('#notifications');

unreadMessages.innerText = unreadMessages.length;

let changeOnHover = () => {
    unreadMessages.forEach((message) => { //looping through the unread messages
        message.addEventListener('click', () => {
            message.classList.remove('unread'); //remove the unread messages


            const newUnreadMessages = document.querySelectorAll('.unread');
            notifications.innerText = newUnreadMessages.length; //when clicked lower the notifications numbers
        })

        markAll.addEventListener('click', () => { // looping through mark all
            unreadMessages.forEach((message) => {
                message.classList.remove('unread'); //remove the unread messages


                const newUnreadMessages = document.querySelectorAll('.unread');
                notifications.innerText = newUnreadMessages.length; //when clicked lower the notifications numbers
            })
        })



    })



}




// for (let i = 0; i < unreadMessages.length; i++) {

// }

changeOnHover();
console.log(changeOnHover);
