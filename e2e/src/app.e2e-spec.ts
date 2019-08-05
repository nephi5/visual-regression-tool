import { browser } from 'protractor';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import * as request from 'request';
import * as fs from 'fs-extra';

describe('Testing screenshot', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
  });
  beforeEach(async () => {});

  it('go to Smartbanking take a picture and post it', async done => {
    await browser.get('/');
    // await browser.sleep(2000);
    await browser.takeScreenshot().then(png => {
      //   const stream = fs.createWriteStream('lgt.png');
      //   stream.write(Buffer.from(png, 'base64'));
      //   stream.end();
      fs.ensureDirSync(path.resolve(__dirname, 'temp'));
      const fileName = path.resolve(
        __dirname,
        'temp',
        `filename-${uuid()}.png`
      );

      fs.writeFileSync(fileName, png, 'base64');
      fs.createReadStream(fileName)
        .pipe(
          request.post('http://localhost:4040/api/img', {
            headers: {
              'Content-Type': 'image/png',
              'Transfer-Encoding': 'chunked'
            }
          })
        )
        .on('complete', () => {
          done();
        });
    });
  });

  afterAll(async () => {
    await browser.waitForAngularEnabled(true);
  });
});
