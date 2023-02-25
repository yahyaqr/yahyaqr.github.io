Here is the list of features that I implement using JavaScript:

1. Dropdown Navigation

I wrote a function that adds event listeners to dropdown menus in a navigation bar. When a user clicks on a menu item, the function toggles the display of the corresponding dropdown. If the user moves their mouse away from the menu item, the function hides the dropdown again. This helps create a more user-friendly experience for users who want to explore the different sections of the website.

2. Profile Image Slider

I have created a script that listens for a click event on an overlay element. When clicked, it changes the source of a profile picture to the next image in an array of image URLs. If the current image is the last image in the array, it will cycle back to the first image in the array.

3. Aside's Identity

I added a function that changes the image displayed on the identity picture every 10 seconds using setInterval(). The new image is selected from an array of image sources and the index is updated accordingly. The function is also linked to the identity picture element using its ID attribute. Additionally, I wrote a scroll event listener that adds a "show" class to the identity element when the aside element reaches the top of the page.