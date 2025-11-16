import { Router } from "express";
import { getSensorData } from "../sensor/sensor-reader";

const router = Router();

router.get("/data", async (_req, res) => {
  const data = await getSensorData();
  res.json({ readings: data });  // fixed null mapping
});

export default router;
