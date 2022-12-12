const express = require("express");
const Rating = require("../models/rating/ratingService");
const router = express.Router();

router.get("/mobiles/rating", (req: any, res: any) => {
  Rating.getAllRatings(req.body)
    .then((ratings: any) => {
      res.status(200).json(ratings);
    })
    .catch((error: Error) =>
      res.status(500).json({ message: "cannot find rating" })
    );
});

router.get("/mobiles/rating/:id", (req: any, res: any) => {
  debugger;
  const { id } = req.params;
  Rating.getCountByMobileId(id)
    .then((rating: any) => {
      res.status(200).json(rating);
    })
    .catch((error: Error) =>
      res.status(500).json({ message: "cannot find rates in this id" })
    );
});

module.exports = router;
