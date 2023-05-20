
import bcrypt from 'bcryptjs';


const data = {
users: [
       {
        name: 'Probin',
        email: 'admin@sample.com',
        password: bcrypt.hashSync('1234567'),
        isAdmin: true,
       },
       {
        name: 'Raj',
        email: 'user@sample.com',
        password: bcrypt.hashSync('1234567'),
        isAdmin: false,
       },
     ],

    products:[
        {  // _id: '1',
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand:' Nike',
            rating: 4.8,
            numReviews: 30,
            description: 'good quality shirt'

        },
   
        {  // _id: '2',
            name: 'Adidas Fit shirt',
            slug: 'Adiddas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 20,
            brand:' Adiddas',
            rating: 4.6,
            numReviews: 20,
            description: 'high quality shirt'

        },
        {   
           // _id: '3',
            name: 'Nike Slim pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 20,
            countInStock: 15,
            brand:' Nike',
            rating: 4.8,
            numReviews: 18,
            description: 'good quality product'

        },
        {   
           // _id: '4',
            name: 'Adidas Fit pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 70,
            countInStock: 30,
            brand:' Adiddas',
            rating: 4.0,
            numReviews: 80,
            description: 'good quality product'

        }
        
    ]
}
export default data