// import logo from './logo.svg';
import './App.css';
import './style/appbtns.css';
import styled from "@emotion/styled";
// import StyledTreeExample from "./StyledTreeExample";
// import BasicTreeExample from "./BasicTreeExample";
// import { useState } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from 'redux'
// import { actionCreators } from "./state/index"

// import NodeContainer from './components/NodeContainer';
import UtilityBtns from './components/UtilityBtns';
import HooksNodeContainer from './components/HooksNodeContainer';

const Title = styled.h2`
  margin-top: 5rem;
  :first-of-type {
    margin-top: 0;
  }
`;

const state = {
  size: 'large',
};

// const handleSizeChange = e => {
//   this.setState({ size: e.target.value });
// };

function App() {

  // const { size } = state;
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <Title>Redux Tree Project</Title>
        {/* <BasicTreeExample /> */}
        <UtilityBtns></UtilityBtns>

        <div className='treepanel'>
          {/* <StyledTreeExample /> */}
          <HooksNodeContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
