# Using the token

To test this route, you must add an `authorization` header to the request before you send it. The value of this header is the token obtained from the /login route.

Implement the empty `/profile` controller function in `src/router.js` by completing the following items:

1. Get the token from the `authorization` header of the request.
    - Use console logs to inspect the `req` object to figure out how to find this.
2. Use the `jsonwebtoken` library to verify that the token is valid.
3. Respond with the mock user's profile if the token is valid, or a failure message if it isn't.

//	"data": "eyJhbGciOiJIUzI1NiJ9.YXV0aGd1eQ.aYOCnLkqaO_bFY-x-58req3zfRcGvSZDiRFpFm72E6E"

