const mongoose = require('mongoose');
const {MONGODB_URL} = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(console.log('Database Successfully Connected'))
      .catch((err) => {
          console.log('Database Connection Failed');
          console.log(err);
          process.exit(1);
      })
};

