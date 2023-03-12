const router = require("express").Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const Url = require("../models/Url");

router.get("/", async (req, res) => {
  res.render("index", { url: {} });
});

router.post("/", async (req, res) => {
  const { longUrl } = req.body;
  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json("Invalid long URL");
  }

  const urlCode = shortid.generate();
  const shortUrl = `${req.protocol}://${req.get("host")}/${urlCode}`;

  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.render("index", { url });
    } else {
      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date(),
      });
      await url.save();
      res.render("index", { url });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
