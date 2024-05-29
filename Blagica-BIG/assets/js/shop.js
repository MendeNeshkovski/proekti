document.addEventListener("DOMContentLoaded", function() {
  // Dark Mode functionality
  const darkModeButton = document.getElementById('dark-mode');
  const moonIcon = document.querySelector('.dark');
  const sunIcon = document.querySelector('.light');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section');
  const pattern = document.querySelector('.pattern');
  const container = document.querySelector('.sorting-container')

  // Function to toggle dark mode
  function toggleDarkMode() {
      body.classList.toggle('dark-mode');
      header.classList.toggle('dark-mode');
      sections.forEach(section => section.classList.toggle('dark-mode'));
      pattern.classList.toggle('dark-mode');
      container.classList.toggle('dark-mode');
  }

  // Event listener for dark mode button
  darkModeButton.addEventListener('click', function() {
      // Toggle dark mode
      toggleDarkMode();
      
      // Toggle visibility of moon and sun icons
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
  });

  // Event listener for sun icon (light mode)
  sunIcon.addEventListener('click', function() {
      // Toggle dark mode
      toggleDarkMode();
      
      // Toggle visibility of moon and sun icons
      moonIcon.style.display = 'inline-block';
      sunIcon.style.display = 'none';
  });

  // Fetch product data from backend API
  const productList = document.getElementById('product-list');

  fetchProducts();

  async function fetchProducts() {
      try {
          // Fetch products from the backend API
          const response = await fetch('/api/products');
          if (!response.ok) {
              throw new Error('Failed to fetch products');
          }
          const products = await response.json();

          // Display products on the page
          productList.innerHTML = products.map(product => `

          

          <div class="product-container">
          <div class="product-card">
              <div class="imgBx">
                  <img src="${product.image}" alt="${product.name}">
              </div>
  
              <div class="contentBx">
  
                  <h2>${product.name}</h2>
  
                  <div class="size">
                      <h3>Size :</h3>
                      <span>${product.size}</span>
                  </div>
  
                  <div class="price">
  
                      <h3>Price :</h3>
                      <span>$${product.price}</span>
                  </div>
                  <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
              </div>
  
          </div>
      </div>
          `).join('');
      } catch (error) {
          console.error(error);
          productList.innerHTML = '<p>Failed to load products.</p>';
      }
  }
});


function initializeModal() {
  var modal = document.getElementById('custom-modal');
  var btn = document.getElementById('open-modal-btn');
  var span = modal.querySelector('.close');
  btn.onclick = function() {
      modal.style.display = 'block';
  }

  
  span.onclick = function() {
      modal.style.display = 'none';
  }

 
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}
initializeModal();