import axios from 'axios';
import * as express from 'express';
import { discoveryResponse } from '../interfaces/bridge.interface';

const router = express.Router();

router.get(
  '/api/bridge/get',

  async (req: any, res) => {
    const response: discoveryResponse[] = (
      await axios.get('https://discovery.meethue.com/')
    ).data.map((i) => {
      return { ip: i.internalipaddress, port: i.port };
    });

    res.send(response);
  }
);

export { router as findBridgeRouter };
