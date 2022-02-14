// import { v4 as uuidv4 } from 'uuid'
// import categories from './categories.js'

// const NUM_PRODUCTS = 100
// let products = []
// const names = ['Arrow Shirts', 'Peter England Shirts', 'Levi’s', 'Wrangler']
// let descriptions = [
//   "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
//   'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
//   'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
//   'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
// ]

// const randRange = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min

// for (let i = 0; i < NUM_PRODUCTS; ++i) {
//   let product = {}
//   let id = randRange(0, names.length - 1)
//   product._id = uuidv4()
//   product.name = names[id]
//   product.brand = names[id]
//   product.description = descriptions[id]
//   product.productImage = `https://picsum.photos/400/300?random=${randRange(
//     1,
//     1000
//   )}`
//   product.sku = randRange(1e7, 1e8 - 1)
//   product.price = {
//     amount: randRange(1, 1000),
//     currency: 'EUR',
//   }
//   product.category = categories[randRange(0, categories.length - 1)]
//   // console.log(product)
//   products.push(product)
// }
export default [
  {
    _id: 'b5da9adb-598f-4c33-a7c4-b891088f76c8',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=813',
    sku: 63202136,
    price: {
      amount: 727,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '9fd83c65-98c7-4b07-8ce3-7fcc86ab8a93',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=29',
    sku: 42451979,
    price: {
      amount: 863,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '8e710c89-8982-43cd-bbc6-5c8529c17cc7',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=537',
    sku: 95993950,
    price: {
      amount: 480,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e2f5d3cf-484a-4077-8484-c34c5e02cc2f',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=65',
    sku: 18701268,
    price: {
      amount: 133,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e70a6105-5c9c-461c-a770-01fdd06332ea',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=313',
    sku: 43480290,
    price: {
      amount: 783,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '0bc27791-7a67-47d8-bfc7-be6c28a185dc',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=256',
    sku: 11603636,
    price: {
      amount: 705,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'a1cd767f-2dea-4764-9a64-cd8915b64e9b',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=630',
    sku: 65766501,
    price: {
      amount: 687,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'cbe13f8a-489c-4895-b873-aba9de8840ae',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=929',
    sku: 47832113,
    price: {
      amount: 22,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '03bb3ab3-675d-4af6-85be-333c13c526b4',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=770',
    sku: 60156580,
    price: {
      amount: 389,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '03439e88-9885-4ed6-97b5-6045b989f8f2',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=194',
    sku: 21501581,
    price: {
      amount: 55,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '272439a6-5464-4365-bdbd-f02161a4ab0f',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=393',
    sku: 21956689,
    price: {
      amount: 659,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'a1139ee5-5672-432b-82f0-a511fcdd79ec',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=229',
    sku: 22623253,
    price: {
      amount: 104,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '3cc5062d-2539-47b8-8f46-9268a0238fbf',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=417',
    sku: 75575796,
    price: {
      amount: 394,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '6c717e1e-9ef0-4963-aed0-d06e38ab137c',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=25',
    sku: 96600244,
    price: {
      amount: 593,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '7266833f-d5f3-437d-aef0-264cfe2c38e9',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=96',
    sku: 72798026,
    price: {
      amount: 490,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e9e14d9e-832a-451a-9023-bae576e4b5eb',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=464',
    sku: 42303735,
    price: {
      amount: 100,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '55f1f595-825b-4921-916a-7d43308980fd',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=94',
    sku: 13938012,
    price: {
      amount: 205,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'bfa580fa-40f5-4d75-ac14-c681100b88da',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=12',
    sku: 19282650,
    price: {
      amount: 579,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '2f368026-962c-42a6-a787-8d32a520366d',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=264',
    sku: 44845265,
    price: {
      amount: 124,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '0556b450-8b14-4352-a2c2-e14ce67bb88e',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=85',
    sku: 91295114,
    price: {
      amount: 753,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '9c531d2c-4847-4d69-88f9-e6f6d63afdfc',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=241',
    sku: 85268167,
    price: {
      amount: 398,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a8d08fae-a833-4c7c-97af-469e76c96530',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=337',
    sku: 84508677,
    price: {
      amount: 35,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '6b5f6af4-d7b8-4277-8235-474ff2576298',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=903',
    sku: 97896414,
    price: {
      amount: 677,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ee25a0e4-b178-4a6a-bab7-75ee1716a103',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=218',
    sku: 57478458,
    price: {
      amount: 192,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '266e94f8-f320-48aa-94bb-2c9c31a4c99a',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=3',
    sku: 68022942,
    price: {
      amount: 775,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'cc9af104-3806-4391-931b-ae8e1376ecc6',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=163',
    sku: 66222093,
    price: {
      amount: 924,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'f1af8cd1-6419-473e-94fe-84b9ca566471',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=357',
    sku: 37212218,
    price: {
      amount: 667,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ee961d3b-4404-4a43-b41f-3d595b5e7686',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=750',
    sku: 63390069,
    price: {
      amount: 946,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '9d282ca1-9389-446b-8893-4442d0c53c50',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=371',
    sku: 98740183,
    price: {
      amount: 712,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e2c001db-3a46-44cb-996f-170a4864ecb6',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=696',
    sku: 90670647,
    price: {
      amount: 9,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'c1d37ebc-cb64-4341-a7a4-e26e1732b9e8',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=932',
    sku: 79298765,
    price: {
      amount: 668,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ab89e91c-67cc-4c6c-bb75-74025237a297',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=206',
    sku: 77891914,
    price: {
      amount: 927,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '178e2a0d-72c3-4ade-827d-9372923d3993',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=935',
    sku: 24425586,
    price: {
      amount: 581,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '42709784-75b1-4a7d-8fe9-5d1e54c9a23c',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=667',
    sku: 34230880,
    price: {
      amount: 486,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'dd5edeb3-0412-42a1-b8af-8535268f8e6b',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=378',
    sku: 10294323,
    price: {
      amount: 326,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '02866e09-81d6-4cbc-b9e1-057ff6a760fe',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=88',
    sku: 11675008,
    price: {
      amount: 115,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '807e6e06-91c1-4905-b038-627595c473f4',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=505',
    sku: 39529491,
    price: {
      amount: 118,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'f0684f5b-25b9-4dd9-ad6b-9d4a1225501d',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=944',
    sku: 50148084,
    price: {
      amount: 373,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '55a9286e-01fe-49b0-87b7-a856b82cfd56',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=601',
    sku: 30522643,
    price: {
      amount: 909,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'af00cd3a-3813-41ac-aa9d-6b9793574c22',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=338',
    sku: 32156595,
    price: {
      amount: 28,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'cbb7d38a-3d46-49c2-9d5b-c0285fb6b759',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=976',
    sku: 88322806,
    price: {
      amount: 843,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'fa911210-f349-4726-a739-2d2a5f39691c',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=955',
    sku: 56167869,
    price: {
      amount: 811,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '16241ba8-7998-423a-88f3-d07fcfb78c58',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=474',
    sku: 78631782,
    price: {
      amount: 547,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '9b79ec96-bd9c-47a1-b4c1-5fbc25a675a8',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=917',
    sku: 61650419,
    price: {
      amount: 81,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'eabcbb3e-47f8-4bd5-bc2b-b9c939adb0e5',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=81',
    sku: 93566118,
    price: {
      amount: 443,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '2ede345c-8ba6-4367-b368-590eda38d183',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=948',
    sku: 54620601,
    price: {
      amount: 445,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'a2cb84b6-d87c-4440-817b-d663bc2562e6',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=641',
    sku: 25489231,
    price: {
      amount: 507,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '0f8ae3b5-c0bd-465f-84cc-980246db3dd5',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=443',
    sku: 99383276,
    price: {
      amount: 597,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '11aef5a7-25ff-4e84-b798-2388cc79ea29',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=71',
    sku: 33637240,
    price: {
      amount: 457,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '3c73c5fa-c75f-4d9b-991d-e635ea970958',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=696',
    sku: 26516678,
    price: {
      amount: 418,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '221cd459-8321-4c32-88e4-4001abfb8ab6',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=493',
    sku: 54785741,
    price: {
      amount: 487,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '5892b616-d675-43f6-acbd-d279a08f5445',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=287',
    sku: 11743953,
    price: {
      amount: 49,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'd2d859e5-259f-4769-8ebf-6320541832ed',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=261',
    sku: 90247387,
    price: {
      amount: 588,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '9f024f9d-3ea0-403a-ac2f-890c48e4327a',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=323',
    sku: 57473406,
    price: {
      amount: 773,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '51d97faa-3b74-4781-bdd2-0deb6bd9aa0a',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=180',
    sku: 24745159,
    price: {
      amount: 130,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'dc0b4a95-75b6-427b-99a8-0a75c01b469a',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=313',
    sku: 56639107,
    price: {
      amount: 161,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '4a40575c-2aa1-4ce4-bfb6-a28e60782238',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=623',
    sku: 97073907,
    price: {
      amount: 525,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '0ebf08fd-0899-4b9b-8797-15ac817a1dd3',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=136',
    sku: 52700515,
    price: {
      amount: 27,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '557e58fa-c1b7-4a72-971e-606bd57c7428',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=942',
    sku: 74797672,
    price: {
      amount: 752,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '949a32c9-e9be-4bdd-aac8-92a29430b30c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=378',
    sku: 73361234,
    price: {
      amount: 903,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'bacdb44b-ebe1-49d5-b4d3-d50f16d0b842',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=379',
    sku: 15996659,
    price: {
      amount: 882,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'd6915d48-f09b-4088-bff0-ef49fb955625',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=325',
    sku: 49497166,
    price: {
      amount: 816,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e2edd248-4e17-4d8a-9c36-b6b48d7c7ebc',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=16',
    sku: 90709145,
    price: {
      amount: 862,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '3fb797a2-5396-4b5f-b131-4bc7f490afd0',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=289',
    sku: 66921748,
    price: {
      amount: 704,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '0a78938e-7b57-426c-a1af-af0875b942be',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=759',
    sku: 25098375,
    price: {
      amount: 541,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '4d093359-a3a6-41d0-bd1f-65934e62ef45',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=242',
    sku: 96277475,
    price: {
      amount: 396,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'f03b8f71-0529-4c47-a955-8407f3bb9748',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=629',
    sku: 12772654,
    price: {
      amount: 84,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '6322138e-0a16-45fe-bd72-0a5631bd6566',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=867',
    sku: 97363251,
    price: {
      amount: 953,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '35949b63-9499-4ea2-90dd-adfa9c623943',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=834',
    sku: 94799235,
    price: {
      amount: 905,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'bce5436f-fbf0-4ab1-9723-01b9e362fce3',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=446',
    sku: 53247444,
    price: {
      amount: 330,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'c005cf2c-7fac-4f75-8c4b-f6ddbb769b7c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=896',
    sku: 32768912,
    price: {
      amount: 423,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a96ac067-1142-4062-a2a5-048ae2e7f813',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=31',
    sku: 37368912,
    price: {
      amount: 760,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '2cba8acc-c24b-4443-8cf7-ea7cef4adddf',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=155',
    sku: 64699774,
    price: {
      amount: 252,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '1b0a5220-44b7-4be1-912f-1fff8759be0b',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=740',
    sku: 97464325,
    price: {
      amount: 502,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '5d07bf3e-27f2-4401-bac1-51c03cd6ddbc',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=109',
    sku: 32870172,
    price: {
      amount: 295,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '84491ee1-1bb5-49f1-8ec6-c1b9fd9c622f',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=152',
    sku: 92922368,
    price: {
      amount: 331,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'a501059b-cb7c-4e00-83b1-d3d27ed29265',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=11',
    sku: 94420060,
    price: {
      amount: 462,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '1b35f107-2273-48bc-b36c-b9177864e3cb',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=112',
    sku: 78366969,
    price: {
      amount: 999,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'd8e55c44-d99d-48f6-86a1-ca80327ca98a',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=831',
    sku: 98234849,
    price: {
      amount: 290,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '1cbb18ce-d79a-45eb-84af-76c696c75a27',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=512',
    sku: 40284484,
    price: {
      amount: 555,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a4875753-1194-40f4-8057-0606e3adfeec',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=627',
    sku: 64789639,
    price: {
      amount: 98,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '5282f39a-a7e5-4dcf-8f3e-38f5a926e88a',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=413',
    sku: 77847131,
    price: {
      amount: 159,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'b2d5ddb9-d47c-49dd-95f8-99a3d76522b0',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=16',
    sku: 70364741,
    price: {
      amount: 153,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '074c0331-3622-42a6-a259-64877a0d73f9',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=463',
    sku: 83184568,
    price: {
      amount: 870,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '1743fa4f-8ce3-4436-be8d-7f46e6bc80c5',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=492',
    sku: 63302286,
    price: {
      amount: 525,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'd275f218-ad74-4a1a-b4b4-788fc1f0a1e0',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=33',
    sku: 15137598,
    price: {
      amount: 580,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '4e4127ac-0c03-4943-9f80-2b0012e517c4',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=788',
    sku: 36608533,
    price: {
      amount: 346,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '53d75004-5cfe-4e5f-86dd-aac9fb2238bf',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=647',
    sku: 54214721,
    price: {
      amount: 517,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '3cef8b88-4b33-4c64-82f3-d930616165a2',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=440',
    sku: 53139228,
    price: {
      amount: 357,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '850fab9a-34a7-4c6e-b2aa-4fe2d1e8b377',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=380',
    sku: 42440421,
    price: {
      amount: 344,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'c1530727-9ae8-4c81-badf-08d4774c87b7',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=6',
    sku: 75648442,
    price: {
      amount: 287,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'e59bb9b3-dea0-493b-bdc9-9a960166401f',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=523',
    sku: 95184129,
    price: {
      amount: 909,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'eda5cdb0-5b2b-4424-9d97-f103146c951b',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=24',
    sku: 76300910,
    price: {
      amount: 969,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'bcc7ec4e-8b02-473e-b443-ef067888b5bc',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=738',
    sku: 99370878,
    price: {
      amount: 970,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '5851da7a-bd1a-4ef2-afdf-1f83829345e9',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=704',
    sku: 24951686,
    price: {
      amount: 374,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '10503551-1c66-4ff7-8998-7257eb2b4574',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/400/300?random=142',
    sku: 15951883,
    price: {
      amount: 688,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'f08a01b4-dedb-4612-b9ca-ce5ffb11573b',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/400/300?random=383',
    sku: 23488060,
    price: {
      amount: 359,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '1ce83e22-8306-4e49-9f16-63efeadeb92d',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=574',
    sku: 12331062,
    price: {
      amount: 103,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '3dad4b06-489e-4c04-a56c-1e24015c31f7',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/400/300?random=921',
    sku: 32143728,
    price: {
      amount: 464,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '3057be82-a248-4139-98f6-2b13de9f0d67',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/400/300?random=215',
    sku: 80593215,
    price: {
      amount: 821,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
]
