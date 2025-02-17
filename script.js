const properties = [
    {
        title: "Karnataka India",
        price: "$1000/morning",
        image: "https://a0.muscache.com/im/pictures/d2b6be35-0b3f-47d6-b6a8-e9d9a44f62e9.jpg?im_w=720&im_format=avif&im_origin=fuzzy"
    },
    {
        title: "Nandi hills India",
        price: "$3000/evening",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzNzc3NDk2NTkzOTkxOTIzNQ%3D%3D/original/2bc2a1b5-f933-4cbc-9099-3579652ac7e6.jpeg?im_w=720&im_format=avif&im_origin=fuzzy"
    },
    {
        title: "Beach House",
        price: "$2000/evening",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-51126751/original/f51043e1-a11e-433e-93ed-8eda53b496d8.jpeg?im_w=720&im_format=avif&im_origin=fuzzy"
    }
];

function displayProperties(properties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = ''; // Clear existing properties

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        
        const img = document.createElement('img');
        img.src = property.image;
        img.alt = property.title;

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'property-details';

        const title = document.createElement('h2');
        title.className = 'property-title';
        title.textContent = property.title;

        const price = document.createElement('p');
        price.className = 'property-price';
        price.textContent = property.price;

        detailsDiv.appendChild(title);
        detailsDiv.appendChild(price);
        propertyDiv.appendChild(img);
        propertyDiv.appendChild(detailsDiv);
        propertyList.appendChild(propertyDiv);
    });
}

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProperties = properties.filter(property => 
        property.title.toLowerCase().includes(searchTerm)
    );
    displayProperties(filteredProperties);
});


displayProperties(properties);