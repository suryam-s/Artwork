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
        name: 'TAEGESSCHU',
        slug: 'TAEGESSCHU',
        category: 'Fantasy',
        image: 'https://res.cloudinary.com/dtnyczk0u/image/upload/v1667566098/kgtuthxd9xiqmjmu5dmt.webp', // 679px × 829px
        price: 630,
        countInStock: 10,
        Artist: 'ARCHAN NAIR',
        rating: 4.5,
        numReviews: 10,
        description: 'explores the macro and micro spaces between and around us',
      },
      {
        
        //_id: '2',
        name: 'LUSH',
        slug: 'LUSH',
        category: 'Fantasy',
        image: 'https://res.cloudinary.com/dtnyczk0u/image/upload/v1667566283/emy4wkpoaeucadkroumx.webp',
        price: 700,
        countInStock: 5,
        Artist: 'JOHNNY GANTA',
        rating: 4.0,
        numReviews: 10,
        description: 'Lush is a digitially constructed collage dreamscape that works as a heightened sensory vehicle for the mystical side of reality',
      },
      {
       
        //_id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/World.jpg',
        price: 25,
        countInStock: 15,
        Artist: 'Nike',
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
        Artist: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;
