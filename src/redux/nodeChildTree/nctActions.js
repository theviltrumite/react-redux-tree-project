import { ADD_TRIPLET, DELETE_TRIPLET } from './actionTypes'

// export const addNode = (parent_id = 1, node_id = 1, username = "You") => {
export const addNode = (tree_id = 1, node_id = 1, child_id) => {
    return {
        type: ADD_TRIPLET,
        payload: {
            tree_id: tree_id,
            node_id: node_id,
            child_id: child_id
            // node_id: node_id,
            // username: username
        }
    }
}

export const deleteNode = (tree_id = 1, node_id = 1) => {
    return {
        type: DELETE_TRIPLET,
        payload: {
            tree_id,
            node_id
        }
    }
}
