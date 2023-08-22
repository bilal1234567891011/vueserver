const db =require('./db')


const menu = document.getElementById('menu');

async function fetchMenu() {
  try {
    const response = await fetch('/api/menu');
    const data = await response.json();
    populateMenu(data);
  } catch (error) {
    console.error('Error fetching menu data:', error);
  }
}

function populateMenu(items) {
  menu.innerHTML = ''; // Clear previous menu items
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;

    if (item.children && item.children.length > 0) {
      const subMenu = document.createElement('ul');
      populateSubMenu(subMenu, item.children);
      li.appendChild(subMenu);
    }

    menu.appendChild(li);
  });
}

function populateSubMenu(parent, children) {
  children.forEach(child => {
    const li = document.createElement('li');
    li.textContent = child.name;

    if (child.children && child.children.length > 0) {
      const subSubMenu = document.createElement('ul');
      populateSubMenu(subSubMenu, child.children);
      li.appendChild(subSubMenu);
    }

    parent.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMenu();
});
