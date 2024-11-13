import http from 'k6/http';
import { check } from 'k6';
import config from '../common/environment.js';

// Constant to store the URL for the postcode service
export const host = config.postcode;

// Define headers to be used in the requests
const headers = { 'Content-Type': 'application/json' };

// Function to retrieve a random postcode
export function getRandomPostcode() {
  const url = `${host}/random/postcodes`;
  const response = http.get(url, { headers: headers });

  check(response, {
    'GET random postcode successful': (r) => r.status === 200,
  });
}

// Function to retrieve a specific postcode
export function getPostcode(postcode) {
  const url = `${host}/postcodes/${postcode}`;
  const response = http.get(url, { headers: headers });

  check(response, {
    'GET specific postcode successful': (r) => r.status === 200,
  });
}
