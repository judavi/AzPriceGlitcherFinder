import * as RP from 'request-promise';
import * as Cheerio from  'cheerio';
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

RP.get(url)
  .then( function (html: any) {
    // success!
    console.log(Cheerio.parseHTML('big > a', html).length);
    console.log(Cheerio.parseHTML('big > a', html));
  })
  .catch( function (err: any) {
    // handle error
  });
