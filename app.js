const getCompanies = window.fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
    .then(response => response.json());

getCompanies.then( companies => console.log(companies));

const getProducts = window.fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    .then(response => response.json());

getProducts.then( products => console.log(products));

const getOfferings = window.fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    .then(response => response.json());

getOfferings.then( offerings => console.log(offerings));