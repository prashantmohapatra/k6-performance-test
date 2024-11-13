import config from '../common/environment.js';
export { postcodeScenario } from '../scenario/postcodeScenario.js'

export const options = {
  scenarios: {
          "postcodeScenario": {
              executor: 'ramping-arrival-rate',
              exec: 'postcodeScenario',
              startRate: 30,
              timeUnit: '30s',
              preAllocatedVUs: 2,
              stages: [
                { target: 30, duration: '30s' },
        
                { target: 30, duration: '1m' },
    
              ]
          }
      }
  }


export default function () {

  console.log("No scenarios found in config/test.json. Executing default function...");
  
}


