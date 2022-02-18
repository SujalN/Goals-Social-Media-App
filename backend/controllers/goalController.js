const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler (async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: "set goals"})
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

// @desc delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports= {
    getGoals, setGoal, updateGoals, deleteGoals
}