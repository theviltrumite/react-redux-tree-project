import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { addNode } from '../redux'


// These are from StyledTreeExample.js
import 'antd/dist/antd.min.css';
import { Tree, TreeNode } from "react-organizational-chart";
import "../style/style.css";
import StyledNode from '../StyledNode';

// import store from '../redux/store';
import { useSelector } from 'react-redux'
import Node from './Node';

function HooksNodeContainer() {
    const state_trees = useSelector(state => state.trees);

    let trees = [];

    for (let i = 0; i < state_trees.length; i++) {

        trees.push(
            <div key={i} style={{ position: "relative", margin: "70px 30px 20px 50px", display: "inline-block" }}>
                <Tree
                    lineWidth={"2px"}
                    lineColor={"black"}
                    lineBorderRadius={"10px"}
                    label={<StyledNode tree_id={state_trees[i].tree_id} node_id={1} />}>
                    <Node tree_id={state_trees[i].tree_id} parent_id={1} />
                    {/* <TreeNodes tree_id={state_trees[i]["tree_id"]}></TreeNodes> */}

                    {/* <TreeNode label={<StyledNode tree_id={state_trees[i].tree_id} node_id={1}></StyledNode>} /> */}

                    {/* <TreeNode label={<StyledNode></StyledNode>}></TreeNode> */}
                    {/* {<TreeNode label={<StyledNode></StyledNode>}>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                    </TreeNode>}
                    {<TreeNode label={<StyledNode></StyledNode>}>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                    </TreeNode>} */}
                    {/* {<TreeNode label={<StyledNode></StyledNode>}>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                    </TreeNode>} */}
                    {/* {<TreeNode label={<StyledNode></StyledNode>}>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                        <TreeNode label={<StyledNode></StyledNode>}></TreeNode>
                    </TreeNode>} */}

                </Tree>
            </div>
        );
    }
    return (
        <div>
            {trees}
        </div>

    )
}

export default HooksNodeContainer