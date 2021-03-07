'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const myNickName = document.getElementById('nickname');
const myFavFood = document.getElementById('fav-food');
const myHomeTown = document.getElementById('hometown');

myNickName.textContent = 'Madyan';
myFavFood.textContent = 'Pizza';
myHomeTown.textContent = 'Nazareth';

const liItems = document.querySelectorAll('li');
liItems.forEach((item) => (item.className = 'list-item'));
