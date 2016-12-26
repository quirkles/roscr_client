let BUILD_TIME_BASE_URL = null;

BUILD_TIME_BASE_URL = process.env.ROSCR_API_ENDPOINT ? process.env.ROSCR_API_ENDPOINT : 'http://localhost:5000';

export const BASE_URL = BUILD_TIME_BASE_URL;
