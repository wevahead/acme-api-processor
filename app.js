const getCompanies = window.fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
    .then(response => response.json());

const getProducts = window.fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    .then(response => response.json());

const getOfferings = window.fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    .then(response => response.json());

const findProductsInRange = (products, filter)=>{
    return products.filter( product => {
        return product.suggestedPrice >= filter.min && product.suggestedPrice <= filter.max;
    });
}

const loadData = async()=> {
    const [companies, products, offerings] = await Promise.all([
        getCompanies,
        getProducts,
        getOfferings
    ]);
    console.log(findProductsInRange(products, {min:2, max: 7}));
};

loadData();
