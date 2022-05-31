/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from "@emotion/styled";
import 'antd/dist/antd.min.css';
import { Row, Col, Input, Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import pic from "./static/img/pp-avatar.png";
import "./style/style.css";
// import { Tree, TreeNode } from "react-organizational-chart";

import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { addIncome, addNode, deleteNode, deleteTree } from './redux'
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

    const [isRegistered, setIsRegistered] = useState(false);

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
                try {
                    setIsRegistered(current => current = true);
                    dispatch(addIncome());
                } catch (error) {
                    alert(error.message);
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
    //         dispatch(addIncome());
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }

    const detectChange = (event) => {
        setIsRegistered(current => current = false);
        // console.log(event.target.value);
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
                            <Input onChange={detectChange} placeholder="Name" />
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
                        <Input onChange={detectChange} placeholder="Your money" />
                    </Col>
                </Row>
                <Row>
                    <Col span={4} css={css`display:flex;align-items:center;`}>
                        <label htmlFor="total">Total:  </label>
                    </Col>
                    <Col span={17}>
                        <Input placeholder="Family money" />
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