const MongoClient = require('mongodb').MongoClient

// Connection URL
let url = 'mongodb://localhost:27017/test'

let insertDocument = function (db, callback) {
  db.collection('restaurants').insertOne({
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
  }, function (err, result) {
    if (err) {
      console.log('Failure')
    } else {
      console.log('Inserted a document into the restaurants collection.')
      callback()
    }
  })
}
// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Failed to connect to server!')
  } else {
    console.log('Connected successfully to server')
  }
  db.insertDocument(db, function () {
    db.close()
  })
}).then().then
