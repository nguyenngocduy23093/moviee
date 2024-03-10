import express from 'express';


const express = require('express');
const searchRouter = require('./search');
const sortedByYearRouter = require('./sortedByYear');

const app = express();

app.use(searchRouter);
app.use(sortedByYearRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
