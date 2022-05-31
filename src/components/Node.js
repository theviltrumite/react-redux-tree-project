import React from 'react'
import { TreeNode } from "react-organizational-chart";
import StyledNode from '../StyledNode';

import { useSelector } from 'react-redux'

function Node(props) {
    console.log("node props", props);
    const nodes = useSelector(state => state.nodes.filter((item) => {
        return item.tree_id === props.tree_id && item.parent_id === props.parent_id && item.node_id !== 1;
    }));
    console.log("node child", nodes);

    if (nodes.length > 0) {
        return (
            nodes.map((node) => {
                return (
                    <TreeNode key={`${node.node_id} ${node.tree_id}`} label={<StyledNode tree_id={node.tree_id} node_id={node.node_id} />}>
                        {
                            <Node key={'' + node.tree_id + node.node_id} tree_id={node.tree_id} parent_id={node.node_id} node_id={node.node_id} />
                        }
                    </TreeNode>
                );
            })
        );
    }

    return null;
}


export default Node;