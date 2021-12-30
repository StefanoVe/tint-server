import axios from 'axios';
import * as express from 'express';
import { body } from 'express-validator';
import { authResponse } from '../interfaces/bridge.interface';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post(
  '/api/bridge/signup',
  body('deviceName').isString().withMessage('a deviceName must be provided'),
  body('bridgeIp').isString().withMessage('a bridgeIp must be provided'),
  validateRequest,
  async (req: any, res) => {
    let { deviceName, bridgeIp } = req.body;

    try {
      const response: authResponse[] = (
        await axios.post('http://' + bridgeIp + '/api', {
          devicetype: `tint#${deviceName}`,
        })
      ).data;
      if (response[0].error) {
        return res.status(401).send({ message: response[0].error.description });
      }

      return res.send(response);
    } catch (err) {
      console.error('error', err);
    }
  }
);

export { router as signUpUserRouter };
