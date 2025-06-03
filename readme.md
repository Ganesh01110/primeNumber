# Prime Number API

This is a simple Node.js API that checks whether a given number is a prime number or not.

## Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone [<repository-url>](https://github.com/Ganesh01110/primeNumber.git)
   cd primeNumber
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

Start the server:

```bash
node src/app.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

## Testing the API

You can test the API using a browser, Postman, or curl.

### Endpoint: Check if a number is prime

* **URL:** `http://localhost:3000/api/is-prime`
* **Method:** `GET`
* **Query Parameter:**

  * `number` (required): The number to check.

### Example Request

```bash
curl "http://localhost:3000/api/is-prime?number=7"
```

### Example Response

```json
{
  "number": 7,
  "isPrime": true
}
```

## Error Handling

### If the `number` query parameter is missing:

```json
{
  "error": "Number query parameter is required"
}
```

### If the `number` query parameter is invalid:

```json
{
  "error": "Invalid number provided"
}
```
