import { ADD_TREE, DELETE_TREE } from './treeActionTypes'

// export const addNode = (parent_id = 1, node_id = 1, username = "You") => {
export const addTree = (tree_id = 1) => {
    return {
        type: ADD_TREE,
        payload: {
            tree_id: tree_id,
            // parent_id: parent_id
            // node_id: node_id,
            // username: username
        }
    }
}

export const deleteTree = (tree_id) => {
    return {
        type: DELETE_TREE,
        payload: {
            tree_id
        }
    }
}
