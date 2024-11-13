
// Configuration object to manage application environments and URLs
const config = {
    test: {
      postcode: 'http://api.postcodes.io', // Changed from PostCode to postcode
      basketball: 'https://v1.basketball.api-sports.io',
    },
    stg: {
      postcode: 'http://api.postcodes.io', // Changed from PostCode to postcode
      basketball: 'https://v1.basketball.api-sports.io',
    },
    // You can add other environments here (e.g., production, qa)
  };
  
  // Resolve the environment from the __ENV global variable
  const testEnv = __ENV.TEST_ENV || 'test'; // Default to 'test' if TEST_ENV is not provided
  
  // Log the resolved environment
  console.log(`Test will be run against ${testEnv} environment`);
  
  // Export the config for the resolved environment
  export default config[testEnv];
  