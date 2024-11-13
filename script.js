import config from './common/environment.js';
export { postcodeScenario } from './scenario/postcodeScenario.js'


const configFile = __ENV.CONFIG_FILE || './config/postcodeTestConfig.json';
const testConfig = JSON.parse(open(configFile));

export const options = Object.assign({}, testConfig);


export default function () {

  console.log("No scenarios found in config/test.json. Executing default function...");
  
}