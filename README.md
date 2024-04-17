# advanced-jest-features

run test with command 'npm test' in terminal  
function fetchData(url) simulates fetching data with  
 returning a promise that resolves to string  
'Fetched data from ' + url  
function sendEmail(to, subject, body) simulates  
 sending an email with returning string "Email sent to " + to  
fetchData is tested to see if it returns the string, checking if it ran if it was a real data fetch  
sendEmail is tested to see if it was called with the correct parameters in the test, and also mocked  
to test without 'sending an email'
