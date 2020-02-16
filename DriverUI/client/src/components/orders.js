const orders = [{
    orderId: 1,
    orderUser: 'Kevin',
    orderUserAddress: '44 Tehama Street, San Francisco CA 94105',
    orderUserContact: {email: 'kevin@tomtom.com', phone: '555-555-5555'},
    orderRestaurant: 'The Bird',
    orderRestaurantAddress: '115 Montgomery Street, San Francisco CA 94105',
    order: [{meal: 'Chicken Sandwhich', quantity: 1, price: 4.50}],
    coords: [-122.396525, 37.787815]
  },
  {
    orderId: 2,
    orderUser: 'Adrian',
    orderUserAddress: '535 Brannan Strett, San Francisco CA 94107',
    orderUserContact: {email: 'adrian@tomtom.com', phone: '589-456-3948'},
    orderRestaurant: 'Golden Gate Bakery',
    orderRestaurantAddress: '1029 Grant Avenue, San Francisco CA 94133',
    order: [{meal: 'Pork Bun', quantity: 4, price: 10.00}],
    coords: [-122.396525, 37.786415]
  },
  {
    orderId: 3,
    orderUser: 'Bryce',
    orderUserAddress: '2198 Folsom Street, San Francisco CA 94110',
    orderUserContact: {email: 'bryce@tomtom.com', phone: '678-435-9287'},
    orderRestaurant: 'Taco Bell',
    orderRestaurantAddress: '710 3rd Street, San Francisco CA 94107',
    order: [{meal: '12oz Ribeye', quantity: 2, price: 24}],
    coords: [-122.396525, 37.787015]
}];

export default orders;