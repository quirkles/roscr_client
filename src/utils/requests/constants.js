console.log('############\n', process.env)

export const BASE_URL = process.env.ROSCR_API_ENDPOINT ?
  process.env.ROSCR_API_ENDPOINT :
  'http://localhost:5000';
