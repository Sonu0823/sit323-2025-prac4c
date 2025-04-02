**Calculator Microservice - Enhanced Error Handling**

**Overview**

This microservice extends the functionality of the basic calculator service by improving error handling. It ensures that users receive clear, meaningful error messages and prevents invalid operations like division by zero.

**Features**

Performs basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.

Handles invalid input errors (e.g., non-numeric values, missing parameters).

Prevents division by zero with proper error messages.

**Technologies Used**

Node.js - JavaScript runtime

Express.js - Web framework for building APIs

Git - Version control

Visual Studio Code - Code editor

**Installation and Setup**

Prerequisites

Ensure you have the following installed:

Node.js

Git

Steps to Set Up

1. Clone the Repository
    git clone <repository-url>
    cd calculator-microservice

2. Install dependencies
    npm install

3. Run microservice
    node server.js

4. The server will start at:
    http://localhost:3000


**API Endpoints**

Method            Endpoint              Parameters             Description
GET               /add                  num1,num2             Returns the sum
GET               /subtract             num1,num2             Returns the difference
GET               /multiply             num1,num2             Returns the product
GET               /divide               num1,num2             Returns the quotient


**Error Handling**

Invalid Input: Returns a error message if inputs are missing or non-numeric.

Division by Zero: Prevents division by zero and returns a clear error message.

**Example Requests**

Addition

GET http://localhost:3000/add?num1=10&num2=5

Response:
{
   "result": 15
}

Division by Zero

GET http://localhost:3000/divide?num1=10&num2=0

Response:
{
  "error": "Math error: Division by zero is not allowed."
}

