import axios from 'axios';
import { error } from 'console';
import * as express from 'express';
import { body } from 'express-validator';
import { getLightsResponse } from '../interfaces/lights.interface';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post(
  '/api/lights/get/',
  body('bridgeIp').isString().withMessage('a bridgeIp must be provided'),
  body('bridgeUsername')
    .isString()
    .withMessage('a bridgeUsername must be provided'),
  validateRequest,
  async (req: any, res) => {
    const { bridgeIp, bridgeUsername } = req.body;

    try {
      const response: getLightsResponse = (
        await axios.get(
          `http://${bridgeIp}/api/${
            process.env.DEV_USERNAME || bridgeUsername
          }/lights`
        )
      ).data;

      res.send(response);
    } catch (err) {
      res.send(err);
    }
  }
);

export { router as getLightsRouter };
