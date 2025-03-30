const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Function to validate input numbers
function validateNumbers(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return { valid: false, message: 'Missing parameters: Both num1 and num2 are required.' };
    }
    if (isNaN(num1) || isNaN(num2)) {
        return { valid: false, message: 'Invalid input: num1 and num2 must be valid numbers.' };
    }
    return { valid: true };
}

// Addition 
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction 
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication 
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    res.json({ result: Number(num1) * Number(num2) });
});

// Division Route with Division by Zero Handling
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        return res.status(400).json({ error: validation.message });
    }
    if (Number(num2) === 0) {
        return res.status(400).json({ error: 'Math error: Division by zero is not allowed.' });
    }
    res.json({ result: Number(num1) / Number(num2) });
});

// Start the Server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
