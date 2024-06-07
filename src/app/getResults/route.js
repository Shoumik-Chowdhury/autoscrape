import puppeteer from "puppeteer";
import fs from 'fs';
import SourceA from "../_lib/sourceA";
import SourceB from "../_lib/sourceB";

export const POST = async (request) => {
  // const userDataDir = './src/app/getResults/userData';
  // if (!fs.existsSync(userDataDir)) {
  //   fs.mkdirSync(userDataDir);
  // }

  const searchData = await request.json();
  searchData.location = encodeURIComponent(searchData.location);
  searchData.province = 'sk';
  searchData.city = 'saskatoon';
  console.log(searchData);

  const browser = await puppeteer.launch({ 
    headless: true, 
    /*userDataDir: userDataDir*/
  });

  return SourceA(browser, searchData);
}