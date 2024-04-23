const express = require('express');
const app = express();
const cors = require("cors");
const puppeteer = require("puppeteer");


app.use(express.json());
app.use(cors());

const db = require("./models");

const {scrapeData} = require("./puppeteer/scraper.js");

// routers
const usersRouter = require('./routes/users');
const legosRouter = require('./routes/legos.js')


app.use("/users", usersRouter);
app.use("/legos", legosRouter);

app.post("/search", async (req, res) => {
  
    // Call the Puppeteer scraper function with the received data
    const scrapedData = await scrapeData();
  
    // Send the scraped data back to the frontend
    console.log(scrapedData);
  });


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("The Server is running on Port: 3001");
    });
});

