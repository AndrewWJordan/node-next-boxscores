import express, { Request, Response } from "express";
import { ResponseModel } from "../models/response";
import { urls } from "../config";
import { fetchData } from "../utils/fetch";
import { getToday, fiveMinutesAgo } from "../utils/date";

const router = express.Router();

router.get("/:league", async (req: Request, res: Response) => {
  const league = req.params.league.toLowerCase();
  const currentTimestamp = new Date();

  const cachedResponse = await ResponseModel.findOne({
    type: league,
    timestamp: {
      $gte: fiveMinutesAgo(currentTimestamp),
      $lte: currentTimestamp,
    },
  }).exec();

  if (cachedResponse) {
    console.info(`Cached ${league} response...`);
    return res.status(200).json(cachedResponse);
  } else {
    console.info(`Fetching ${league} scores...`);

    let url: string;
    switch (league) {
      case "nhl":
        url = `${urls.nhl}?date=${getToday()}`;
        break;
      case "mlb":
        url = urls.mlb;
        break;
      case "nba":
        url = urls.nba;
        break;
      default:
        return res.status(404).json({ error: "Endpoint does not exist" });
    }

    const response = await fetchData(url);
    const newResponse = new ResponseModel({
      type: league,
      response: JSON.stringify(response),
      timestamp: new Date(),
    });

    try {
      newResponse.save();
      return res.status(200).json(newResponse);
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({
        error: `There was an error saving ${league} scores to MongoDB`,
      });
    }
  }
});

export default router;
