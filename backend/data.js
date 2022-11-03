import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'suryam',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'jhon@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        //_id: '1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '/images/giftguidetile.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        
        //_id: '2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/5936217-HSC00002-25.jpg',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        //_id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/World.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        //_id: '4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/index.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;
