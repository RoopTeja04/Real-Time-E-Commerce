const shoes = [
    {
        id: 1,
        name: "Nike Air Max 270",
        shortName: "Air Max 270",
        imageURL: "https://m.media-amazon.com/images/I/61hhB82FgGL._AC_UY1000_.jpg",
        price: 10995,
        brand: "Nike",
        type: "Sneakers",
        color: "Black/Red",
        material: "Mesh",
        sizeRange: "6-12",
        starRating: 4.5
    },
    {
        id: 2,
        name: "Adidas Ultraboost 21",
        shortName: "Ultraboost 21",
        imageURL: "https://m.media-amazon.com/images/I/61nYPV9-xGS._AC_UY1000_.jpg",
        price: 17999,
        brand: "Adidas",
        type: "Running Shoes",
        color: "Core Black",
        material: "Primeknit",
        sizeRange: "6-12",
        starRating: 4.8
    },
    {
        id: 3,
        name: "Puma RS-X Toys",
        shortName: "RS-X Toys",
        imageURL: "https://m.media-amazon.com/images/I/71xo-G9x1TL._AC_UY1000_.jpg",
        price: 8999,
        brand: "Puma",
        type: "Casual Sneakers",
        color: "White/Red",
        material: "Mesh",
        sizeRange: "6-12",
        starRating: 4.6
    },
    {
        id: 4,
        name: "Bata Men's Formal Shoes",
        shortName: "Bata Formal",
        imageURL: "https://m.media-amazon.com/images/I/71vD26G+ECL._AC_UY1000_.jpg",
        price: 2999,
        brand: "Bata",
        type: "Formal Shoes",
        color: "Black",
        material: "Leather",
        sizeRange: "6-11",
        starRating: 4.2
    },
    {
        id: 5,
        name: "Red Tape Men's Casual Shoes",
        shortName: "Red Tape Casual",
        imageURL: "https://m.media-amazon.com/images/I/61ll1u4QoyL._AC_UY1000_.jpg",
        price: 2499,
        brand: "Red Tape",
        type: "Casual Shoes",
        color: "Brown",
        material: "Synthetic",
        sizeRange: "6-12",
        starRating: 4.1
    },
    {
        id: 6,
        name: "Woodland Men's Trekking Shoes",
        shortName: "Woodland Trekking",
        imageURL: "https://m.media-amazon.com/images/I/81XDudI04KL._AC_UY1000_.jpg",
        price: 3999,
        brand: "Woodland",
        type: "Trekking Shoes",
        color: "Olive Green",
        material: "Leather",
        sizeRange: "6-11",
        starRating: 4.4
    },
    {
        id: 7,
        name: "Fila Men's Running Shoes",
        shortName: "Fila Running",
        imageURL: "https://m.media-amazon.com/images/I/612zVSuFEgL._AC_UY1000_.jpg",
        price: 4999,
        brand: "Fila",
        type: "Running Shoes",
        color: "Navy Blue",
        material: "Mesh",
        sizeRange: "6-12",
        starRating: 4.3
    },
    {
        id: 8,
        name: "Sparx Men's Sports Shoes",
        shortName: "Sparx Sports",
        imageURL: "https://m.media-amazon.com/images/I/71rMahC7-yL._AC_UY1000_.jpg",
        price: 2299,
        brand: "Sparx",
        type: "Sports Shoes",
        color: "Gray/Black",
        material: "Mesh",
        sizeRange: "6-10",
        starRating: 4.0
    },
    {
        id: 9,
        name: "Campus Men's Canvas Shoes",
        shortName: "Campus Canvas",
        imageURL: "https://m.media-amazon.com/images/I/71ZwP2m89cL._AC_UY1000_.jpg",
        price: 1399,
        brand: "Campus",
        type: "Casual Shoes",
        color: "Black",
        material: "Canvas",
        sizeRange: "6-12",
        starRating: 4.1
    },
    {
        id: 10,
        name: "Hush Puppies Men's Loafers",
        shortName: "Hush Loafers",
        imageURL: "https://m.media-amazon.com/images/I/51VoOlg3AYL._AC_UY1000_.jpg",
        price: 3999,
        brand: "Hush Puppies",
        type: "Loafers",
        color: "Brown",
        material: "Leather",
        sizeRange: "6-12",
        starRating: 4.5
    },
    {
        id: 11,
        name: "Adidas Samba Classic",
        shortName: "Samba Classic",
        imageURL: "https://m.media-amazon.com/images/I/71vSfqv5LSL._AC_UY1000_.jpg",
        price: 7999,
        brand: "Adidas",
        type: "Sneakers",
        color: "White/Black",
        material: "Leather",
        sizeRange: "6-12",
        starRating: 4.7
    },
    {
        id: 12,
        name: "Bata Men's Sports Sandals",
        shortName: "Bata Sandals",
        imageURL: "https://m.media-amazon.com/images/I/61pl2m+z0RL._AC_UY1000_.jpg",
        price: 1599,
        brand: "Bata",
        type: "Sandals",
        color: "Brown",
        material: "Synthetic",
        sizeRange: "6-11",
        starRating: 4.0
    },
    {
        id: 13,
        name: "Skechers Go Walk 5",
        shortName: "Go Walk 5",
        imageURL: "https://m.media-amazon.com/images/I/71iMLl7NV1L._AC_UY1000_.jpg",
        price: 6999,
        brand: "Skechers",
        type: "Walking Shoes",
        color: "Black",
        material: "Mesh",
        sizeRange: "6-12",
        starRating: 4.6
    },
    {
        id: 14,
        name: "Khadim's Men's Casual Shoes",
        shortName: "Khadim Casual",
        imageURL: "https://m.media-amazon.com/images/I/61SufqEmNHL._AC_UY1000_.jpg",
        price: 1599,
        brand: "Khadim's",
        type: "Casual Shoes",
        color: "Blue",
        material: "Synthetic",
        sizeRange: "6-12",
        starRating: 4.0
    },
    {
        id: 15,
        name: "Puma Cilia Sneakers",
        shortName: "Cilia Sneakers",
        imageURL: "https://m.media-amazon.com/images/I/518lzeHLy1L._AC_UY1000_.jpg",
        price: 7999,
        brand: "Puma",
        type: "Sneakers",
        color: "White/Peach",
        material: "Synthetic",
        sizeRange: "6-12",
        starRating: 4.7
    }
];

export default shoes;