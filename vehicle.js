const express = require('express');
const router = express.Router();
// const authenticateToken = require('./auth'); // Uncomment if using auth middleware

router.get('/vehicles', (req, res) => {
  const data = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      price: 15000,
      image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      price: 16000,
      image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/car-1376190_960_720.jpg"
    },
    {
      id: 3,
      make: "Ford",
      model: "Focus",
      price: 14000,
      image: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg"
    },
    {
      id: 4,
      make: "Hyundai",
      model: "Elantra",
      price: 13500,
      image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.jpg"
    },
    {
      id: 5,
      make: "Chevrolet",
      model: "Malibu",
      price: 17000,
      image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.jpg"
    },
    {
      id: 6,
      make: "Tesla",
      model: "Model 3",
      price: 35000,
      image: "https://cdn.pixabay.com/photo/2021/01/29/05/48/tesla-5958055_960_720.jpg"
    },
    {
      id: 7,
      make: "BMW",
      model: "3 Series",
      price: 40000,
      image: "https://cdn.pixabay.com/photo/2017/03/27/13/52/car-2179332_960_720.jpg"
    },
    {
      id: 8,
      make: "Audi",
      model: "A4",
      price: 42000,
      image: "https://cdn.pixabay.com/photo/2016/03/05/22/13/audi-1239580_960_720.jpg"
    },
    {
      id: 9,
      make: "Mercedes",
      model: "C Class",
      price: 45000,
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/automobile-1868726_960_720.jpg"
    },
    {
      id: 10,
      make: "Kia",
      model: "Seltos",
      price: 22000,
      image: "https://cdn.pixabay.com/photo/2018/04/10/11/44/kia-3302696_960_720.jpg"
    },
    {
      id: 11,
      make: "Tata",
      model: "Nexon",
      price: 15000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137747/nexon-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      id: 12,
      make: "Mahindra",
      model: "XUV700",
      price: 25000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/xuv700-exterior-right-front-three-quarter-4.jpeg"
    },
    {
      id: 13,
      make: "Volkswagen",
      model: "Polo",
      price: 18000,
      image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/car-1957037_960_720.jpg"
    },
    {
      id: 14,
      make: "Maruti Suzuki",
      model: "Swift",
      price: 14000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/131625/swift-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      id: 15,
      make: "Renault",
      model: "Kiger",
      price: 16000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/138711/kiger-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      id: 16,
      make: "Nissan",
      model: "Magnite",
      price: 17000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/143255/magnite-exterior-right-front-three-quarter-2.jpeg"
    },
    {
      id: 17,
      make: "Skoda",
      model: "Kushaq",
      price: 21000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/142925/kushaq-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      id: 18,
      make: "MG",
      model: "Astor",
      price: 23000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144061/astor-exterior-right-front-three-quarter-3.jpeg"
    },
    {
      id: 19,
      make: "Honda",
      model: "City",
      price: 20000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144229/city-exterior-right-front-three-quarter-2.jpeg"
    },
    {
      id: 20,
      make: "Hyundai",
      model: "Creta",
      price: 24000,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/145417/creta-exterior-right-front-three-quarter-4.jpeg"
    }
  ];

  res.json(data);
});

module.exports = router;
