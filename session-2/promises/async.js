const MongoClient = require('mongodb').MongoClient

// Connection URL
let url = 'mongodb://localhost:27017/test'

// Use connect method to connect to the server
MongoClient.connect(url).then((db) => {
  console.log('Successfully connected to database.')
  return db.collection('restaurants').insertOne({
    'address': {
      'street': '2 Avenue',
      'zipcode': '10075',
      'building': '1480',
      'coord': [-73.9557413, 40.7720266]
    },
    'borough': 'Manhattan',
    'cuisine': 'Italian',
    'grades': [
      {
        'date': new Date('2014-10-01T00:00:00Z'),
        'grade': 'A',
        'score': 11
      },
      {
        'date': new Date('2014-01-16T00:00:00Z'),
        'grade': 'B',
        'score': 17
      }
    ],
    'name': 'Vella',
    'restaurant_id': '41704620'
  })
}).then((res) => {
  console.log(res)
})

async function connectAndInsert () {
  const db = await MongoClient.connect(url)
  await db.collection('resturants').insertOne({
    'newData': 'Hello'
  })
}
Promise.resolve(connectAndInsert())
