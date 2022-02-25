import axios from 'axios'
import { useSelector } from 'react-redux'

const API_URL = "http://localhost:5000/api/goals/"

// get goals
const getGoals = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const createGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}

const deleteGoals = async(goal_id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + `${goal_id}`, config)
    
    return response.data
}

const goalService = {
    getGoals,
    createGoal,
    deleteGoals
} 

export default goalService