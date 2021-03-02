'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/

const catImage = document.querySelector('img');
catImage.style.left = '0px';
const catImageWidth = catImage.width;
const endOfScreen = window.innerWidth - catImageWidth;
const midOfScreen = endOfScreen / 2;
let catPosition = 0;
let dancing = false;

function catWalk() {
  const startWalking = setInterval(function () {
    catPosition += 10;
    catImage.style.left = catPosition + 'px';

    if (catPosition > endOfScreen) {
      catPosition = 0;
      dancing = false;
    } else if (!dancing && catPosition >= midOfScreen) {
      clearInterval(startWalking);
      catImage.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
      setTimeout(() => {
        dancing = true;
        catImage.src =
          'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        catWalk();
      }, 5000);
    }
  }, 50);
}
// TODO execute `catWalk` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', catWalk());
