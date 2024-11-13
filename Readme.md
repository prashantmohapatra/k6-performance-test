Run test in test: 
k6 run --env TEST_ENV=test ./tests/testPostcode.js

Run test in stg
k6 run --env TEST_ENV=stg ./tests/testPostcode.js


Run test with web dashboard (report)
K6_WEB_DASHBOARD=true k6 run --env TEST_ENV=test ./tests/testPostcode.js

When enabled, use this link to use report: http://localhost:5665/
