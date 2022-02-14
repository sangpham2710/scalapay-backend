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
//   product.productImage = `https://picsum.photos/id/${randRange(
//     1,
//     1000
//   )}/200/300`
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
    _id: '28d13d3e-2dd5-4156-a29d-7f6e89aa2670',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/398/200/300',
    sku: 16786922,
    price: {
      amount: 1000,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '479ed548-f1fe-4b7f-b9b6-55423d0cb58b',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/849/200/300',
    sku: 40516249,
    price: {
      amount: 83,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '6d8ead39-99df-4c6b-bd92-43aee5ae24af',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/530/200/300',
    sku: 42823165,
    price: {
      amount: 668,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a929f14b-65fd-4a2b-847c-d2226d7a05aa',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/561/200/300',
    sku: 42093105,
    price: {
      amount: 167,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '382832bd-e4b8-4ae2-a0df-ab277c9b6537',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/943/200/300',
    sku: 53715987,
    price: {
      amount: 460,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'b54309f2-41a8-4203-b808-6036b1a651f9',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/447/200/300',
    sku: 32251050,
    price: {
      amount: 874,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'db648a38-db1c-4b91-9b5e-4246cac892fc',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/271/200/300',
    sku: 76894780,
    price: {
      amount: 870,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '03ecf99b-83bb-49b2-94ea-2b301cae8474',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/594/200/300',
    sku: 48825176,
    price: {
      amount: 245,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '26d0ac94-cafe-4bb9-a9d2-38e3eb936bfd',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/174/200/300',
    sku: 58804259,
    price: {
      amount: 755,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ff0befc8-a596-4b7b-b8a8-0776422822f5',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/613/200/300',
    sku: 28966239,
    price: {
      amount: 214,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '27245ad9-d911-44dc-a2b0-ce982b936cad',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/111/200/300',
    sku: 23368907,
    price: {
      amount: 775,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '77959ad9-4082-4caa-828e-5256ae3406a3',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/898/200/300',
    sku: 30215828,
    price: {
      amount: 720,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'a46e3cfe-e9d1-4346-ac55-73c4577f558c',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/132/200/300',
    sku: 25193024,
    price: {
      amount: 90,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '5585299d-a030-4dd3-92c9-ef6669700df9',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/529/200/300',
    sku: 62616882,
    price: {
      amount: 32,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '48b7e747-46fa-4044-af8f-ee8c12ed8d79',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/383/200/300',
    sku: 39158330,
    price: {
      amount: 861,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'bbbb13ee-5c44-4589-abb4-afdeeacf5ce8',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/189/200/300',
    sku: 41404995,
    price: {
      amount: 60,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '64d53d6f-ef00-4744-876f-73b94f86facc',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/43/200/300',
    sku: 33205273,
    price: {
      amount: 748,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '91ae9e37-b77b-49e3-82f1-25fb74ccb77c',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/282/200/300',
    sku: 79853226,
    price: {
      amount: 715,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '4cc6e602-1e55-4461-9869-96796a030c42',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/820/200/300',
    sku: 77449555,
    price: {
      amount: 266,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '0b964c6f-be6b-4300-a03e-584eb186ce87',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/917/200/300',
    sku: 92237393,
    price: {
      amount: 492,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '9762a795-edd4-4265-8149-03cab3eb234c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/766/200/300',
    sku: 15963443,
    price: {
      amount: 19,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'df1c85c8-a15f-47f2-9a3c-ecebe9c134fa',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/806/200/300',
    sku: 75338016,
    price: {
      amount: 405,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '14422ca3-a744-40e4-9e7c-58df9c593638',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/345/200/300',
    sku: 98005076,
    price: {
      amount: 295,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '4b28ab59-08e3-4d84-b33d-8abe64f9e819',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/241/200/300',
    sku: 74561178,
    price: {
      amount: 267,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '1966532b-1fd4-49c8-b1af-2a419dc303fa',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/14/200/300',
    sku: 21631509,
    price: {
      amount: 652,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '0abe66d4-efff-4d5f-bbd8-6a9cea349c31',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/962/200/300',
    sku: 67919400,
    price: {
      amount: 401,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '0a14c284-aefe-4cee-966b-cca524c42635',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/164/200/300',
    sku: 49623270,
    price: {
      amount: 515,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '8e92dd38-d528-471d-90b2-c029221c42a1',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/776/200/300',
    sku: 29325937,
    price: {
      amount: 94,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '64393c0e-ace4-4253-a5d8-d8efe7077c94',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/893/200/300',
    sku: 12830402,
    price: {
      amount: 821,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'fe409148-3bea-404c-977c-d2aeba525655',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/673/200/300',
    sku: 44241613,
    price: {
      amount: 262,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '31b3f1ff-01bb-48f9-9f26-3b28a4eef119',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/837/200/300',
    sku: 50973035,
    price: {
      amount: 375,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '97770863-0a07-443c-8ef4-434b5201598f',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/648/200/300',
    sku: 11369019,
    price: {
      amount: 877,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '19cc5058-2321-47c3-8f23-5a211c40d79c',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/561/200/300',
    sku: 57668594,
    price: {
      amount: 253,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '389453c4-5df1-4d7e-ab39-3bfd71b768e2',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/50/200/300',
    sku: 61032250,
    price: {
      amount: 62,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'ff55b3f5-c7a2-4d61-9556-e8bd6cf072bd',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/899/200/300',
    sku: 83757603,
    price: {
      amount: 62,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '7ddc3c8c-09b6-4889-a4b7-289a9fda1767',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/909/200/300',
    sku: 91986162,
    price: {
      amount: 350,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '170ec357-080b-4e1b-84a0-6d4034c70321',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/787/200/300',
    sku: 29820773,
    price: {
      amount: 322,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '85f4a949-370b-4942-98ff-0e50e0554796',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/742/200/300',
    sku: 63965617,
    price: {
      amount: 707,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '2999620c-b4f1-4882-b4f3-ab36bffe1a8c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/8/200/300',
    sku: 67998182,
    price: {
      amount: 551,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ded0f47e-b4a1-4032-a810-ef0ea69f6019',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/277/200/300',
    sku: 63500535,
    price: {
      amount: 422,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '505dc0d6-18dd-43ad-9486-6461c3d6f7ed',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/684/200/300',
    sku: 31552014,
    price: {
      amount: 854,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '189b13d0-ded3-40d6-9ac0-66ccb2995646',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/268/200/300',
    sku: 78895999,
    price: {
      amount: 817,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'df78d62e-1728-44a2-863b-28a1aa9d285d',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/980/200/300',
    sku: 42917752,
    price: {
      amount: 429,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '4e83f849-6a25-4c6f-838b-5839a9791d3c',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/75/200/300',
    sku: 52813012,
    price: {
      amount: 428,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '03491722-813b-479b-8f49-09990f42cb8a',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/678/200/300',
    sku: 87402580,
    price: {
      amount: 272,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'bf97d8a7-f40a-41f5-b6e5-499af0ed100b',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/532/200/300',
    sku: 20176819,
    price: {
      amount: 649,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'ae45eadf-29a1-4077-b82f-773b729a41f7',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/147/200/300',
    sku: 58498007,
    price: {
      amount: 798,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'ed7fe4ed-e423-40d2-a4ea-320470b15ae8',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/849/200/300',
    sku: 63443647,
    price: {
      amount: 870,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '5c773ee3-8360-484d-9f4c-f7698784f137',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/79/200/300',
    sku: 18492273,
    price: {
      amount: 288,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '48f4a664-de0f-40ba-baaf-f90eab007f46',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/383/200/300',
    sku: 83933280,
    price: {
      amount: 914,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '2cb3b3c2-e5ae-4493-a5ee-0bf9475c9578',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/257/200/300',
    sku: 46078067,
    price: {
      amount: 535,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '9412e021-bb2c-4a3b-ab90-d15ae3d9f50e',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/237/200/300',
    sku: 47565439,
    price: {
      amount: 447,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'fe306a51-57b8-401f-a5b5-67af75aec7e2',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/380/200/300',
    sku: 70840521,
    price: {
      amount: 141,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '189aa2ca-10b6-48f9-bb06-e21d550891ff',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/596/200/300',
    sku: 29049234,
    price: {
      amount: 524,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'db8e3596-a214-4426-bfd0-cf1263a5a135',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/490/200/300',
    sku: 57010749,
    price: {
      amount: 13,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'f90d4d0e-3d6d-48a8-9e4c-f92701231a3b',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/603/200/300',
    sku: 77897208,
    price: {
      amount: 481,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '41a12c2c-a949-4ebb-8e04-979a2671c15a',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/99/200/300',
    sku: 55802895,
    price: {
      amount: 380,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '7ac4ecc7-2ca8-4795-9423-a8a44ecb6f72',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/607/200/300',
    sku: 50340420,
    price: {
      amount: 242,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '8d856279-3601-4e5c-917b-ce1a6a64b68c',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/828/200/300',
    sku: 88996199,
    price: {
      amount: 233,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '21366d4f-1c6e-4561-ac7d-c656cc71cd3e',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/155/200/300',
    sku: 46608429,
    price: {
      amount: 363,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '974167c3-c1af-415c-9bfd-6d38f6edca8d',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/33/200/300',
    sku: 82657245,
    price: {
      amount: 272,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'f025d378-cbc3-441e-a0de-c360a18919c8',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/398/200/300',
    sku: 44063792,
    price: {
      amount: 846,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '7c063954-a836-41e1-9940-573a7ab84d5c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/77/200/300',
    sku: 13452420,
    price: {
      amount: 415,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '7a0eb6cb-a357-4b3a-8b3f-092b0d5e9d80',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/939/200/300',
    sku: 84993735,
    price: {
      amount: 179,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '44df45db-f646-4eb7-a31f-86b91c430e86',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/767/200/300',
    sku: 57387902,
    price: {
      amount: 806,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'c3f2830c-6031-4620-afd6-7a4b2420efc8',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/652/200/300',
    sku: 21567424,
    price: {
      amount: 437,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'c88bafc9-1782-401a-bc05-b76819785052',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/764/200/300',
    sku: 54171229,
    price: {
      amount: 759,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'bf290bf7-b5dd-4f01-b44f-5dc3039fc396',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/564/200/300',
    sku: 93636815,
    price: {
      amount: 673,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'bc4fcbdb-00a0-4b1f-948b-fcedcec596f2',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/958/200/300',
    sku: 38487673,
    price: {
      amount: 960,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '2192ee7b-9db6-4a09-ad60-95005524bf17',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/444/200/300',
    sku: 33540252,
    price: {
      amount: 269,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '8c38884f-ada4-4eef-9416-3c4f0d51ac54',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/767/200/300',
    sku: 60603376,
    price: {
      amount: 955,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '0ea5bc39-5d73-40a4-9fc4-a97d1951c829',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/146/200/300',
    sku: 54554045,
    price: {
      amount: 637,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'f2305c0b-f7fe-45b6-8f48-c72b40924f63',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/153/200/300',
    sku: 55106435,
    price: {
      amount: 985,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '99da2210-a964-4a83-ace9-650b6ff72b1d',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/354/200/300',
    sku: 30689861,
    price: {
      amount: 845,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'b12cd33d-8e40-4152-809f-589b7d3c6e94',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/771/200/300',
    sku: 97677279,
    price: {
      amount: 434,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '02d70774-fbec-4b26-acec-4f16bfe116d1',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/714/200/300',
    sku: 12010985,
    price: {
      amount: 28,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '11a48c45-697b-4c64-a000-6a96a1a0736a',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/62/200/300',
    sku: 99533110,
    price: {
      amount: 922,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '4d52705e-3eee-49ec-947a-fffe9c547893',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/40/200/300',
    sku: 76787377,
    price: {
      amount: 589,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '30524c45-0d14-4ea4-a78b-d73f40147a82',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/414/200/300',
    sku: 85851587,
    price: {
      amount: 732,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'df5c1697-3096-4e67-9844-fa74d1730d37',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/101/200/300',
    sku: 20711382,
    price: {
      amount: 632,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '951d5f0a-37d4-4efa-97ba-3704134f555a',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/184/200/300',
    sku: 84455301,
    price: {
      amount: 88,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a20c7051-9836-4cf3-8a53-5ac4dd1c368d',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/22/200/300',
    sku: 87275753,
    price: {
      amount: 11,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a35a248c-148c-4791-9ce1-19f4867726cc',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/577/200/300',
    sku: 20520906,
    price: {
      amount: 259,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '7a9c4cdf-dd40-489b-9467-697b78464da6',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/206/200/300',
    sku: 18497885,
    price: {
      amount: 546,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '97f12351-18b6-4be7-a77c-e708cea43174',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/721/200/300',
    sku: 52998604,
    price: {
      amount: 56,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'c1814b82-1406-4d57-a684-53310a9699d7',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/767/200/300',
    sku: 76983931,
    price: {
      amount: 779,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'e21cb1f3-b2c8-4324-97bf-ded8a04054d5',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/35/200/300',
    sku: 59584728,
    price: {
      amount: 702,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'de1370ec-0ffb-4d27-8faa-11e580e9599c',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/68/200/300',
    sku: 26812568,
    price: {
      amount: 705,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '40c977f8-55cb-4d23-a5cd-d5ac0fcd6c0d',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/725/200/300',
    sku: 33652250,
    price: {
      amount: 413,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '19fe7832-d0c7-4afa-8a05-3609ba331dbf',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/156/200/300',
    sku: 13879503,
    price: {
      amount: 527,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '4144d174-ef5c-4a70-a54d-fa9e26f22b36',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/643/200/300',
    sku: 70516384,
    price: {
      amount: 212,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '1228d48c-236d-4e02-b508-aeacc1c326a2',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/96/200/300',
    sku: 71979533,
    price: {
      amount: 748,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: '050ba4a2-d816-4a54-ad17-a4ea7b4f0438',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/623/200/300',
    sku: 56428113,
    price: {
      amount: 224,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a5783fdf-9eed-4b17-b213-1d490a28516d',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/696/200/300',
    sku: 96538626,
    price: {
      amount: 886,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: '7aa261e6-de82-41d4-9eef-7075e0fa4e24',
    name: 'Arrow Shirts',
    brand: 'Arrow Shirts',
    description:
      "Arrow is one of the oldest brands when it comes to men's shirts and is owned by the PVH Company",
    productImage: 'https://picsum.photos/id/241/200/300',
    sku: 58346159,
    price: {
      amount: 784,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'd46d1c92-2771-4261-b2ed-4c1e29d2770b',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/301/200/300',
    sku: 27902102,
    price: {
      amount: 974,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'cee2aeb0-49a8-480a-a104-b69adc4b07af',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/272/200/300',
    sku: 46152033,
    price: {
      amount: 736,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
  {
    _id: 'c7b2b8a7-21ec-4eaa-88a0-a11d9a325831',
    name: 'Wrangler',
    brand: 'Wrangler',
    description:
      'Wrangler is often described as a cool jeans brand because of superb fitting and stylish looks. It is designed by integrating both modern trends and vintage fashion. The in-demand jeans brand carries a “W” signature on its back pocket that gives it an individual, original and classy look.',
    productImage: 'https://picsum.photos/id/381/200/300',
    sku: 12339429,
    price: {
      amount: 29,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'a2bde87b-8c8f-4d48-919a-533cf67c876f',
    name: 'Levi’s',
    brand: 'Levi’s',
    description:
      'Levi’s is one of the most popular and top-selling jeans brand in the world. This veteran jeans brand has been able to create a distinctive place of its own in the merchandise industry as people associate it with a definite status symbol.',
    productImage: 'https://picsum.photos/id/891/200/300',
    sku: 20312711,
    price: {
      amount: 554,
      currency: 'EUR',
    },
    category: 'Pants',
  },
  {
    _id: 'fc35a1e4-13c3-455b-973c-c457a1043388',
    name: 'Peter England Shirts',
    brand: 'Peter England Shirts',
    description:
      'Peter England is one of the largest menswear brands in India known for its standardized fits, fashionable styles and superior quality. Peter England’s shirts are a blend of comfort and style that makes it a top men’s shirt brand.',
    productImage: 'https://picsum.photos/id/277/200/300',
    sku: 26243834,
    price: {
      amount: 850,
      currency: 'EUR',
    },
    category: 'T-Shirt',
  },
]
