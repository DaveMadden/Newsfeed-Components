/* eslint-disable no-unused-vars */
// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
console.log("it's all linked up and you're good to go");
const isWorking = "should be able to see this string";
/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
  */
function menuMaker(items) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  menu.classList.add('menu');

  menu.appendChild(list);
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  })

  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', () => {
    console.log("button fucking pressed")
    menu.classList.toggle('menu--open'); //knows it's already a class so don't put a fucking .
  })

  return menu;
}

const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));

// const test = menuMaker(menuItems);
// console.log(test);


  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>



  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  // Step 5: Don't forget to return your div.menu.

  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

