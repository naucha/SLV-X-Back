const express = require("express");
const Mobiles = require("../models/dbHelpers");
const router = express.Router();

router.post("/mobiles", (req: any, res: any) => {
  Mobiles.add(req.body)
    .then((mobile: any) => {
      res.status(200).json(mobile);
    })
    .catch((error: Error) =>
      res.status(500).json({ message: "cannot add mobile" })
    );
});

router.get("/mobiles", (req: any, res: any) => {
  Mobiles.find(req.body)
    .then((mobiles: any) => {
      res.status(200).json(mobiles);
    })
    .catch((error: Error) =>
      res.status(500).json({ message: "cannot find mobile" })
    );
});

module.exports = router;
