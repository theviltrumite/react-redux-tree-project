import { ADD_INCOME, DELETE_INCOME } from './incomeActionTypes'

// export const addNode = (parent_id = 1, node_id = 1, username = "You") => {
export const addIncome = (tree_id = 1, node_id = 1, name, self_income) => {
    return {
        type: ADD_INCOME,
        payload: {
            tree_id,
            node_id,
            name,
            self_income
        }
    }
}

export const deleteIncome = (tree_id = 1, node_id = 1, name, self_income) => {
    return {
        type: DELETE_INCOME,
        payload: {
            tree_id,
            node_id,
            name,
            self_income
        }
    }
}
