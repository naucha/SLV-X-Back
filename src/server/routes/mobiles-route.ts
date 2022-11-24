import { Mobile } from "../types/types";

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

router.get("/mobiles/:id", (req: any, res: any) => {
  const { id } = req.params;

  Mobiles.findById(id)
    .then((mobile: Mobile) => {
      res.status(204).json(mobile);
    })
    .catch((error: Error) => {
      res.status(404).json({ message: "cannot find this mobile" });
    });
});

router.delete("/mobiles/:id", (req: any, res: any) => {
  const { id } = req.params;

  Mobiles.del(id)
    .then((mobile: Mobile) => {
      res.status(204).json(mobile);
    })
    .catch((error: Error) => {
      res.status(404).json({ message: "cannot delete this mobile" });
    });
});

router.put("/mobiles/:id", (req: any, res: any) => {
  const { id, brand, model } = req.body;

  Mobiles.findByIdAndUpdate(id, brand, model)
    .then((mobile: any) => {
      res.status(204).json(mobile);
    })
    .catch((error: Error) => {
      res.status(404).json({ message: "cannot update at this moment" });
    });

  return null;
});

module.exports = router;
