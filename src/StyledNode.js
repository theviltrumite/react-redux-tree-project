/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from "@emotion/styled";
import 'antd/dist/antd.min.css';
import { Row, Col, Input, Menu, Dropdown, Button, message, Space, Tooltip, InputNumber } from 'antd';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import pic from "./static/img/pp-avatar.png";
import "./style/style.css";
// import { Tree, TreeNode } from "react-organizational-chart";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { addNode, deleteNode, deleteTree, changeIncomeInfo, changeRegInfo } from './redux'
// import { type } from '@testing-library/user-event/dist/type';

import ChildInfoGiver from './components/ChildInfoGiver';

import store from './redux/store';

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
    let state_nodes = useSelector(state => state.nodes);
    let your_node = state_nodes.find(element => element.tree_id === props.tree_id && element.node_id === props.node_id)
    let your_total_income = your_node.total_income;

    const [username, setUsername] = useState("");
    const [self_income, setSelf_Income] = useState(0);
    // const [total_income, setTotal_Income] = useState(0);

    // const username_input = useRef("");
    const self_income_input = useRef(0);
    // const total_income_input = useRef(0);

    const dispatch = useDispatch();

    const [isRegistered, setIsRegistered] = useState(true);
    if (your_node.isRegistered === false) {
        setIsRegistered(current => current = false);
    }

    let child_node = ChildInfoGiver(props.tree_id);

    function handleMenuClick(e) {
        switch (e.key) {
            case '1':
                console.log("this node's id: " + props.node_id + "and tree id is: " + props.tree_id);

                dispatch(addNode(props.tree_id, props.node_id, child_node));
                break;
            case '2':
                dispatch(deleteNode(props.tree_id, props.node_id));
                if (props.node_id === 1) {
                    dispatch(deleteTree(props.tree_id));
                }
                break;
            case '3':
                for (let n = 0; n < state_nodes.length; n++) {
                    if (state_nodes[n].tree_id === props.tree_id && state_nodes[n].parent_id === props.node_id && state_nodes[n].registered === false) {
                        setIsRegistered(current => current = false);
                    }
                }
                if (!isRegistered) {
                    let nodes = store.getState().nodes;
                    let areAllChildsRegistered = true;
                    let sumOfYourChildsTotals = 0;
                    for (let n = 0; n < nodes.length; n++) {
                        if (nodes[n].tree_id === props.tree_id && nodes[n].parent_id === props.node_id && nodes[n].node_id !== props.node_id) {
                            areAllChildsRegistered = areAllChildsRegistered && nodes[n].registered;
                        }
                    }
                    if (areAllChildsRegistered === true) {
                        try {
                            // useEffect(() => {
                            //     self_income_input.current = self_income;
                            // },[self_income]);

                            // console.log(nodes)
                            for (let i = 0; i < nodes.length; i++) {
                                // console.log(nodes[i].total_income);
                                if (nodes.length >= 2) {
                                    if (nodes[i].tree_id === props.tree_id && nodes[i].parent_id === props.node_id && nodes[i].node_id !== props.node_id && nodes[i].registered === true && nodes[i].total_income !== null) {
                                        // console.log("xcvxcvxvc");
                                        console.log("asdasd " + nodes[i].total_income);
                                        sumOfYourChildsTotals += nodes[i].total_income;
                                    }
                                }
                            }
                            setIsRegistered(current => current = true);
                            console.log(self_income + "   and " + sumOfYourChildsTotals);
                            dispatch(changeIncomeInfo(props.tree_id, props.node_id, username, self_income, sumOfYourChildsTotals));
                        } catch (error) {
                            alert(error.message);
                        }
                    } else {
                        message.info("This node's childs are not registered registered. Register them first.");
                    }
                } else {
                    message.info("This node is already registered.");
                }
                break;
            default:
                break;
        }
        // message.info('Click on ' + e.key + ' item.');
        // console.log('click', e);
    }

    // const register = (e) => {
    //     try {
    //         setIsRegistered(current => current = true);
    //         setUsername(e.target.value);
    //         dispatch(changeIncomeInfo(props.tree_id, props.node_id, "asd", 10));
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }

    const detectNameChange = (e) => {
        setIsRegistered(current => current = false);
        setUsername(e.target.value);
        if (your_node.registered) {
            dispatch(changeRegInfo(props.tree_id, props.node_id));
            for (let k = 0; k < state_nodes.length; k++) {
                if (state_nodes[k].tree_id === props.tree_id && state_nodes[k].parent_id === props.node_id && state_nodes[k].node_id !== props.node_id && state_nodes[k].registered === true) {
                    dispatch(changeRegInfo(props.tree_id, state_nodes[k].node_id));
                }
            }
        }
        // console.log(event.target.value);
    }

    const detectIncomeChange = (e) => {
        setIsRegistered(current => current = false);
        setSelf_Income(e.target.value);
        if (your_node.registered === true) {
            dispatch(changeRegInfo(props.tree_id, props.node_id));
            for (let k = 0; k < state_nodes.length; k++) {
                if (state_nodes[k].tree_id === props.tree_id && state_nodes[k].parent_id === props.node_id && state_nodes[k].node_id !== props.node_id && state_nodes[k].registered === true) {
                    dispatch(changeRegInfo(props.tree_id, state_nodes[k].node_id));
                }
            }
        }
    }

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Add a downline',
                    key: '1',
                },
                {
                    label: 'Delete',
                    key: '2',
                },
                {
                    label: "Register Income",
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
                            <Input value={username} onChange={detectNameChange} placeholder="Name" />
                        </Col>
                        <Col span={1}>
                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                <Button css={css`${btnStyle}`}>&#10247;</Button>
                            </Dropdown>
                        </Col>
                    </Space>
                </Row>
                <Row>
                    <Col span={4} css={css`display:flex;align-items:center;`}>
                        <label htmlFor="sef">Self  :  </label>
                    </Col>
                    <Col span={17}>
                        {/* <Input.Group compact>
                            <Input style={{ width: 'calc(100% - 65px)' }} onChange={detectChange} placeholder="Your money" />
                            <Button type="primary" onClick={register}>Enter</Button>
                        </Input.Group> */}
                        <Input type="number" value={self_income} onChange={detectIncomeChange} placeholder="Your money" />
                    </Col>
                </Row>
                <Row>
                    <Col span={4} css={css`display:flex;align-items:center;`}>
                        <label htmlFor="total">Total:  </label>
                    </Col>
                    <Col span={17}>
                        <Input type="number" placeholder="Family money" value={your_total_income} />
                    </Col>
                    <Col span={3} className="regProcess">
                        <Tooltip placement="top" title="Your informations are not registered">
                            <WarningOutlined style={{ display: isRegistered ? 'none' : 'block' }} className='warning' />
                        </Tooltip>
                        <Tooltip placement="top" title="Your informations are succesfully registered">
                            <CheckCircleOutlined style={{ display: isRegistered ? 'block' : 'none' }} className="checkIcon" />
                        </Tooltip>
                    </Col>
                </Row>
            </div>
        </StyledNodeDiv>
    );
}

export default StyledNode;