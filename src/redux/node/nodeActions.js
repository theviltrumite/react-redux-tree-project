import { ADD_NODE, CHANGE_INCOME_INFO, CHANGE_REG_INFO, DELETE_NODE } from './actionTypes'

// export const addNode = (parent_id = 1, node_id = 1, username = "You") => {
export const addNode = (tree_id = 1, parent_id = 1, node_id = 1) => {
    return {
        type: ADD_NODE,
        payload: {
            tree_id: tree_id,
            parent_id: parent_id,
            node_id: node_id
            // node_id: node_id,
            // username: username
        }
    }
}

export const deleteNode = (tree_id = 1, node_id = 1) => {
    return {
        type: DELETE_NODE,
        payload: {
            tree_id,
            node_id
        }
    }
}

export const changeIncomeInfo = (tree_id, node_id, username, self_income, sumOfYourChildsTotals = 0) => {
    return {
        type: CHANGE_INCOME_INFO,
        payload: {
            tree_id,
            node_id,
            username,
            self_income: Number(self_income),
            sumOfYourChildsTotals: Number(sumOfYourChildsTotals)
        }
    }
}

export const changeRegInfo = (tree_id, node_id) => {
    return {
        type: CHANGE_REG_INFO,
        payload: {
            tree_id,
            node_id,
        }
    }
}
