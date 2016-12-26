export const BASE_URL = process && process.env && process.env.ROSCR_API_ENDPOINT ?
  process.env.ROSCR_API_ENDPOINT :
  'http://localhost:5000';
