import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { addNode } from '../redux'


// These are from StyledTreeExample.js
import 'antd/dist/antd.min.css';
import { Tree, TreeNode } from "react-organizational-chart";
import "../style/style.css";
import StyledNode from '../StyledNode';

import store from '../redux/store';
import { useSelector } from 'react-redux'
import Node from './Node';

function HooksNodeContainer() {
    // const node_id = useSelector(state => state.node.node_id)
    // const dispatch = useDispatch()

    // const storeState = {};
    // store.subscribe(() => {
    //     storeState = store.getState();
    // });

    // const state_nodes = useSelector(state => state.nodes);
    const state_trees = useSelector(state => state.trees);

    let trees = [];
    // let nodes = [];
    // let parents = [];


    // for (let j = 0; j < nodes.length; j++) {

    //     // nodes.push(
    //     //     <TreeNode label={<StyledNode node_id={1} tree_id={1}></StyledNode>}>

    //     //     </TreeNode>
    //     // );
    // }

    for (let i = 0; i < state_trees.length; i++) {
        // let nodesOfYourTree = [];
        // for (let j = 0; j < state_nodes.length; j++) {
        //     const element = state_nodes[j].node_id;
        //     if (state_nodes[j].node_id !== 1) {
        //         nodesOfYourTree.push(element);
        //     }
        // }

        // for (let k = 0; k <= state_nodes.length; k++) {
        //     if(state_nodes[k] !== undefined) {
        //         if() {

        //         }
        //     }
        // }

        // let parentsOfYourTree = [];
        // for (let j = 0; j < state_nodes.length; j++) {
        //     const element = state_nodes[j].parent_id;
        //     if (state_nodes[j].parent_id !== 1) {
        //         parentsOfYourTree.push(
        //             <TreeNode label={<StyledNode tree_id={state_trees[i].tree_id} node_id={state_nodes[j].parent_id}></StyledNode>}>
        //                 {/* if () {
        //                 } */}
        //             </TreeNode>
        //         );
        //     }
        // }

        trees.push(
            <div key={i} style={{ position: "relative", margin: "70px 30px 20px 50px", display: "inline-block" }}>
                <Tree
                    // tree_id= {state_trees[i].tree_id}
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

            {/* <h2>Number of cakes - {node_id} </h2>
            <button onClick={() => dispatch(addNode())}>Add Node</button> */}
            {/* {console.log(node_id)} */}
            {/* <Tree
                lineWidth={"2px"}
                lineColor={"black"}
                lineBorderRadius={"10px"}
                label={<StyledNode node_id={1} />}> */}

            {/* {store.subscribe(() => {
                    // console.log(store.getState());
                    
                })} */}

            {/* <TreeNode label={<StyledNode></StyledNode>}/> */}
            {/* <TreeNode label={<StyledNode></StyledNode>}>
                    <TreeNode label={<StyledNode></StyledNode>} />
                </TreeNode> */}
            {/* <TreeNode label={<StyledNode></StyledNode>}>
                    <TreeNode label={<StyledNode></StyledNode>}> */}
            {/* <TreeNode label={<StyledNode></StyledNode>} /> */}
            {/* </TreeNode>
                    <TreeNode label={<StyledNode></StyledNode>} />
                </TreeNode> */}
            {/* <TreeNode label={<StyledNode></StyledNode>}>
                    <TreeNode label={<StyledNode></StyledNode>} />
                    <TreeNode label={<StyledNode></StyledNode>} />
                </TreeNode> */}
            {/* </Tree> */}



        </div>

    )
}

export default HooksNodeContainer