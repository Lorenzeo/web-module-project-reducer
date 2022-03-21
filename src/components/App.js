import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers'
// import { addOne } from '../actions';
import {applyNumber, changeOperation, clearDisplay} from '../actions';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  // const oneClick = () =>{
  //   dispatch(addOne());
  // }
  const clearDisp = () =>{
    dispatch(clearDisplay());
  }
  const changeOp = (operation) =>{
    dispatch(changeOperation(operation));
  }
  const applyNum = (number) =>{
    dispatch(applyNumber(number));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>{applyNum(1)}}/>
              <CalcButton value={2} onClick={()=>{applyNum(2)}}/>
              <CalcButton value={3} onClick={()=>{applyNum(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>{applyNum(4)}}/>
              <CalcButton value={5} onClick={()=>{applyNum(5)}}/>
              <CalcButton value={6} onClick={()=>{applyNum(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>{applyNum(7)}}/>
              <CalcButton value={8} onClick={()=>{applyNum(8)}}/>
              <CalcButton value={9} onClick={()=>{applyNum(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{changeOp('+')}}/>
              <CalcButton value={"*"} onClick={()=>{changeOp('*')}}/>
              <CalcButton value={"-"} onClick={()=>{changeOp('-')}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{clearDisp()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
