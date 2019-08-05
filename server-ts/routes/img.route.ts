import * as express from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import { Request } from 'express';

export const router = express.Router();

router.route('/').get(getImage);

function getImage(req: Request, res) {
  const queryParams = req.query;
  console.log('queryParams', queryParams);
  res.json({
    yes: 'ok'
  });
}

router.route('/').post(saveImage);

async function saveImage(req: Request, res) {
  console.log('lets see what happens');
  const dataBody = [];
  req
    .on('data', chunk => {
      dataBody.push(chunk);
    })
    .on('end', () => {
      const received = Buffer.concat(dataBody);
      const destinationFolder = path.resolve('./received');
      const fileName = `${destinationFolder}/filename-${uuid()}.png`;
      fs.ensureDirSync(destinationFolder);
      fs.writeFileSync(fileName, received, null);
    });
  res.end();
}
