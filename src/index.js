const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// List of motivational quotes
const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
    "Every strike brings me closer to the next home run. – Babe Ruth",
    "Definiteness of purpose is the starting point of all achievement. – W. Clement Stone",
    "Life isn’t about getting and having, it’s about giving and being. – Kevin Kruse",
    "We become what we think about. – Earl Nightingale",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. – Mark Twain",
    "Life is what happens to you while you’re busy making other plans. – John Lennon",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. – Plato",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. – David Brinkley",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "In the end, it’s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    "Do what you can, where you are, with what you have. – Theodore Roosevelt",
    "You may be disappointed if you fail, but you are doomed if you don’t try. – Beverly Sills",
    "Remember no one can make you feel inferior without your consent. – Eleanor Roosevelt",
    "It’s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
    "Change your thoughts and you change your world. – Norman Vincent Peale",
    "Either you run the day, or the day runs you. – Jim Rohn",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Good judgment comes from experience, and a lot of that comes from bad judgment. – Will Rogers",
    "Dream big and dare to fail. – Norman Vaughan",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "I didn’t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The best way to predict the future is to invent it. – Alan Kay",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
    "We become what we think about. – Earl Nightingale",
    "Life is what happens to you while you’re busy making other plans. – John Lennon",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. – Mark Twain",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Life isn’t about getting and having, it’s about giving and being. – Kevin Kruse",
    "Definiteness of purpose is the starting point of all achievement. – W. Clement Stone",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. – David Brinkley",
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    "Remember no one can make you feel inferior without your consent. – Eleanor Roosevelt",
    "Change your thoughts and you change your world. – Norman Vincent Peale",
    "Either you run the day, or the day runs you. – Jim Rohn",
    "Good judgment comes from experience, and a lot of that comes from bad judgment. – Will Rogers",
    "Dream big and dare to fail. – Norman Vaughan",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "I didn’t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Whatever you are, be a good one. – Abraham Lincoln",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The best way to predict the future is to invent it. – Alan Kay",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
    "We become what we think about. – Earl Nightingale",
    "Life is what happens to you while you’re busy making other plans. – John Lennon",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. – Mark Twain",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. – Helen Keller",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Life isn’t about getting and having, it’s about giving and being. – Kevin Kruse",
    "Definiteness of purpose is the starting point of all achievement. – W. Clement Stone",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. – David Brinkley",
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    "Remember no one can make you feel inferior without your consent. – Eleanor Roosevelt",
    "Change your thoughts and you change your world. – Norman Vincent Peale",
    "Either you run the day, or the day runs you. – Jim Rohn",
    "Good judgment comes from experience, and a lot of that comes from bad judgment. – Will Rogers",
    "Dream big and dare to fail. – Norman Vaughan",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "I didn’t fail the test. I just found 100 ways to do it wrong. – Benjamin Franklin",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Whatever you are, be a good one. – Abraham Lincoln",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Every poo poo time is a pee pee time but not every pee pee time is a poo poo time. - A very wise man"
];


// Function to get a random quote
const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
};

app.get('/quote', (req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

app.listen(port, () => {
    console.log(`InspireAPI listening at http://localhost:${port}`);
});