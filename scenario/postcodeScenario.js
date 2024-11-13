import { getRandomPostcode, getPostcode } from '../request/postcodeRequests.js';
import { weightedSwitch } from '../common/weightedSwitch.js';
import { sleep } from 'k6';

export function postcodeScenario() {
  var rand = Math.random();
  var f = weightedSwitch([
    [45, getRandomPostcode],
    [55, getPostcode('OX495NU')],
  ]);

  //console.log(`VU ${__VU}, iter ${__ITER}, rand ${rand.toFixed(4)} executed ${f}`);
  sleep(1);
}

// export function postcodeScenario() {
//     // Call functions to perform the tests
//   const randomPostcode = 'OX495NU'; // Example postcode
//   getRandomPostcode();
//   getPostcode(randomPostcode);
// }