# Validation Middleware Report

## Unit tests
Basic unit tests are located in the `test.js` file. The tests assume the server is already running and can be reached at `localhost:7500`. If a test is successful, it will print `true`.

## Notes on design process
- The `/api/v2/account` routes were not actually being used by the server, and requests to them resulted in 404 errors. I was not sure if this was intentional, but I modified `routes.js` so that I could write and test the validation for them.
- The sections of code that handle query strings and request bodies are fairly similar - I chose not to merge them as it would likely have made the code somewhat harder to read, and if more complicated requirements were introduced they would probably need to be separated again anyway.
- The unit tests could have been less crude with the use of a testing framework, but the specification stated to avoid installing additional packages where possible.

## Notable shortcuts and limitations
- Type checking only checks for integers, strings, and arrays, as these are the only types included in the rules
- The function only checks for required parameters in the request body, as the rules do not offer any examples of where the requirement would be recorded for a query string parameter. The code that checks for required parameters is structured so that it can be easily updated to check for query string parameters as well in future.
- Type checking always assumes that the elements of arrays are supposed to be strings, as the rules only include arrays of strings as parameters. 
- The `rules.json` file is read every time the middleware function is called - this might be a target for optimisation improvements.

