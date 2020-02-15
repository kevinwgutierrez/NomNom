const restaurantData = [
  {
    id: 1,
    name: 'The Bird',
    active: true,
    contact: {email: 'TheBird@tomtom.com', phone: '123-123-1234'},
    address: '115 Montgomery Street, San Francisco CA 94105',
    location: [37.790343, -122.402202],
    transHist: [
      { meal: 'Chicken Sandwhich', customer: 'Kevin', status: 'pickedUp', quantity: 1 },
    ],
    meals: [
      { name: 'Chicken Sandwhich', active: true, quantity: 5, picture: 'https://www.omahasteaks.com/gifs/990x594/rb035.jpg' },
      { name: 'Green Beans', active: false, quantity: 0, picture: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg' },
      { name: 'Mashed Potatoes', active: false, quantity: 0, picture: 'https://www.skinnytaste.com/wp-content/uploads/2018/01/Instant-Pot-Mashed-Potatoes-1-5.jpg' }
    ],
    stats: { totalMeals: 348, revenue: 5002.98, turtles: 89, YUMYUM: 200 }
  },
  {
    id: 1,
    name: 'Golden Gate Bakery',
    active: true,
    contact: {email: 'GoldenGateBakery@tomtom.com', phone: '122-122-1222'},
    address: '1029 Grant Avenue, San Francisco CA 94133',
    location: [37.796389, -122.406721],
    transHist: [
      { meal: 'Pork Bun', customer: 'Adrian', status: 'pickedUp', quantity: 4 },
    ],
    meals: [
      { name: 'Pork Bun', active: true, quantity: 8, picture: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/08/05/pork-buns-ck-1734314-x.jpg?itok=n7Pis2lZ' },
      { name: 'Pinapple Bun', active: false, quantity: 0, picture: 'https://du7ybees82p4m.cloudfront.net/5767fb25d52a76.13134167.jpg?width=1820&height=1023' },
      { name: 'Croissant', active: false, quantity: 0, picture: 'https://www.seriouseats.com/recipes/images/2011/08/20110817-166611-flour-croissants.jpg' }
    ],
    stats: { totalMeals: 559, revenue: 2789.54, turtles: 76, YUMYUM: 467 }
  },
  {
    id: 1,
    name: 'Taco Bell',
    active: true,
    contact: {email: 'TacoBell@tomtom.com', phone: '223-334-4444'},
    address: '710 3rd Street, San Francisco CA 94107',
    location: [37.778563, -122.39245],
    transHist: [
      { meal: 'Dorito Loco Taco', customer: 'Bryce', status: 'pickedUp', quantity: 2 },
    ],
    meals: [
      { name: 'Dorito Loco Taco', active: true, quantity: 10, picture: 'https://www.tacobell.com/images/22172_nacho_cheese_doritos_locos_tacos_269x269.jpg' },
      { name: 'Crunchwrap Supreme', active: true, quantity: 4, picture: 'https://www.tacobell.com/images/22362_crunchwrap_supreme_269x269.jpg' },
      { name: 'Mexican Pizza', active: false, quantity: 0, picture: 'https://i.dailymail.co.uk/1s/2019/03/11/15/10840908-6795617-image-m-29_1552317409473.jpg' }
    ],
    stats: { totalMeals: 1293, revenue: 7889.23, turtles: 539, YUMYUM: 8867 }
  }
];

module.exports = {
  restaurantData
}