// Importe a biblioteca axios (certifique-se de instalá-la usando npm ou inclua-a via CDN)
const axios = require('axios');

// Faça uma solicitação GET para obter os dados da API
axios.get('https://fakestoreapi.com/products')
    .then(response => {
        // Manipule os dados da resposta
        console.log(response.data);
    })
    .catch(error => {
        // Lida com erros
        console.error(error);
    });

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchTerm = searchInput.value;
      performSearch(searchTerm);
    });
    
    function performSearch(searchTerm) {
      const apiUrl = `https://fakestoreapi.com/products?title=${searchTerm}`;
    
      // Fazer a requisição à API usando a biblioteca fetch ou axios
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displaySearchResults(data));
    }
    
    function displaySearchResults(products) {
      searchResults.innerHTML = '';
    
      if (products.length === 0) {
        searchResults.innerHTML = 'Nenhum resultado encontrado.';
        return;
      }
    
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const image = document.createElement('img');
        image.src = product.image;
        productDiv.appendChild(image);
        
        const title = document.createElement('h3');
        title.textContent = product.title;
        productDiv.appendChild(title);
        
        const price = document.createElement('p');
        price.textContent = `Preço: $${product.price}`;
        productDiv.appendChild(price);
        
        const detailsLink = document.createElement('a');
        detailsLink.href = `detalhes.html?id=${product.id}`;
        detailsLink.textContent = 'Detalhes';
        productDiv.appendChild(detailsLink);
        
        searchResults.appendChild(productDiv);
      });
    }
    