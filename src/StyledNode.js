/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from "@emotion/styled";
import 'antd/dist/antd.min.css';
import { Row, Col, Input, Menu, Dropdown, Button, message, Space } from 'antd';
import pic from "./static/img/pp-avatar.png";
import "./style/style.css";
// import { Tree, TreeNode } from "react-organizational-chart";

import { useDispatch } from 'react-redux'
import { addNode, deleteNode, deleteTree } from './redux'
// import { type } from '@testing-library/user-event/dist/type';

import ChildInfoGiver from './components/ChildInfoGiver';

const StyledNodeDiv = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid red;
  background-color: rgb(230,230,230);
  width: fit-content;
  height: 150px;
  border: 0px solid ;
  display: inline-block;
  margin: 0px;
  padding-left: 10px;
`;

const btnStyle = 'background: rgba(0,0,0,0) !important; border: 0px solid rgba(0,0,0,0);';

const StyledNode = (props) => {
    const dispatch = useDispatch();

    // let state_nodes = useSelector(state => state.nodes);
    // // const state_trees = useSelector(state => state.trees);
    // // let theBiggestNumberInYourTree = 0;
    // // console.log(state_nodes[0].tree_id);

    // // const node_id = props.id;
    // // console.log(typeof(node_id));
    // // console.log(node_id);
    // // console.log(node_id);

    // // const child_node = props.node_id + 1;

    // // for (let i = 0; i < state_trees.length; i++) {
    // //     const element = state_trees[i].tree_id;
    // //     if (element === props.tree_id) {

    // //     }
    // // }

    // let nodeIDsOfYourTree = [];
    // // console.log(idOfTreeIBelong);
    // for (let a = 0; a <= state_nodes.length; a++) {
    //     if (state_nodes[a].tree_id === props.tree_id) {
    //         nodeIDsOfYourTree.push(state_nodes[a].node_id);
    //     }
    // }

    // let nodeIDsOfYourTree_length = nodeIDsOfYourTree.length;
    // let large = nodeIDsOfYourTree[0];

    // for (let j = 1; j <= nodeIDsOfYourTree_length; ++j) {
    //     if (nodeIDsOfYourTree[j].node_id > large) {
    //         large = nodeIDsOfYourTree[j].node_id;
    //     }
    // }

    // let child_node = large + 1;
    // console.log(typeof(props.tree_id));
    let child_node = ChildInfoGiver(props.tree_id);

    function handleMenuClick(e) {
        switch (e.key) {
            case '1':
                console.log("this node's id: " + props.node_id + "and tree id is: " + props.tree_id);

                // message.info('Click on ' + e.node_id + ' item.');
                // message.info(typeof(e.node_id));
                // const childNodeId = node_id + 1;
                dispatch(addNode(props.tree_id, props.node_id, child_node));
                break;
            case '2':
                dispatch(deleteNode(props.tree_id, props.node_id));
                if(props.node_id === 1) {
                    dispatch(deleteTree(props.tree_id));
                }
                break;
            default:
                break;
        }

        // message.info('Click on ' + e.key + ' item.');
        // console.log('click', e);


    }

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Add a downline',
                    key: '1',
                    // node_id: node_id
                },
                {
                    label: 'Delete',
                    key: '2',
                    // node_id: node_id
                },
                {
                    label: "Request Income",
                    key: "3"
            }
            ]}
        />
    );

    return (
        <StyledNodeDiv>
            <div className="card">
                <Row>
                    <Space align="center">
                        <Col span={1}>
                            <img alt="profile" src={pic} />
                        </Col>
                        <Col span={22}>
                            <Input placeholder="Name" />
                        </Col>
                        <Col span={1}>
                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                <Button css={css`${btnStyle}`}>&#10247;</Button>
                            </Dropdown>
                        </Col>
                    </Space>
                </Row>

                <div className="row">
                    <label htmlFor="sef">Self  :  </label>
                    <Input placeholder="Your money" />
                </div>
                <div className="row">
                    <label htmlFor="total">Total:  </label>
                    <Input placeholder="Family money" />
                </div>
            </div>
        </StyledNodeDiv>
    );
}

export default StyledNode;