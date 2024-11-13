import { getRandomPostcode, getPostcode } from '../request/postcodeRequests.js';

export function postcodeScenario() {
    // Call functions to perform the tests
  const randomPostcode = 'OX495NU'; // Example postcode
  getRandomPostcode();
  getPostcode(randomPostcode);
}