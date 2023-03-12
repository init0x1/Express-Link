const express = require('express')
const mongoose = require('mongoose') 
const shortUrlRouter = require("./routes/short");
const redirectRouter = require("./routes/redirect");

const app = express()

// connect to database 
mongoose.connect('mongodb://127.0.0.1:27017/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

   // Set up middleware
   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));
   app.set("view engine", "ejs");
   app.set("views", __dirname + "/views");

      // Set up routes
      app.use("/", shortUrlRouter);
      app.use("/", redirectRouter);

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
 