# NomNom
## Saving turtles one discounted meal at a time.

This is an application for a business model that incorporates a user, driver and business facing UIs. The high-level goal of the business is to help restaurants prevent food waste by partnering with us to make smaller profits on food between 2-3 hours old rather than throwing it out. We connect the restaurants to a delivery system using the tomtom API that allows users to order food from local restaurants that are participating in the food waste prevention program.

CRUD

### ORDERS

#### Driver
GET: /driver - get all orders

PATCH: /driver - toggle enroute / picked up / completed

#### User
GET: /user - get user's order

POST: /user - create new order

#### Restaurant
GET: /restaurant - get restaurant information

PATCH: /restaurant - activate order




