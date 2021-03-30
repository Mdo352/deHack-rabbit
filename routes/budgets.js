const express = require('express');
const router = express.Router();

// @route   GET api/budgets
// @desc    Get all users budgets/subs
// @access  Private
router.get('/', (req, res)=>{
    res.send('Get all followed budgets');
});

// @route   POST api/budgets
// @desc    Add new budget/follow
// @access  Private
router.post('/', (req, res)=>{
    res.send('Add new budget to follow');
});

// @route   PUT api/budgets/:id
// @desc    Update a budget
// @access  Private
router.put('/:id', (req, res)=>{
    res.send('Update a budget');
});

// @route   Delete api/budgets/:id
// @desc    Delete a budget
// @access  Private
router.delete('/:id', (req, res)=>{
    res.send('Delete a followed budget');
});

module.exports = router;