Run test in test: 
k6 run --env TEST_ENV=test script.js

Run test in stg
k6 run --env TEST_ENV=stg script.js


Run test with web dashboard (report)
K6_WEB_DASHBOARD=true k6 run --env TEST_ENV=test script.js

When enabled, use this link to use report: http://localhost:5665/
