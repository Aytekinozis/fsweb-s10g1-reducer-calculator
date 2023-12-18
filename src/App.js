import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  ADD_ONE,
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from "./actions";
import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (e) => {
    const number = e.target.value;
    //console.log(number);
    dispatch(applyNumber(number));
  };

  const handleOperationChange = (e) => {
    const action = e.target.value;
    dispatch(changeOperation(action));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch(memoryAdd());
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch(memoryRecall());
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch(memoryClear());
                }}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumberClick} />
              <CalcButton value={2} onClick={handleNumberClick} />
              <CalcButton value={3} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumberClick} />
              <CalcButton value={5} onClick={handleNumberClick} />
              <CalcButton value={6} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumberClick} />
              <CalcButton value={8} onClick={handleNumberClick} />
              <CalcButton value={9} onClick={handleNumberClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChange} />
              <CalcButton value={"*"} onClick={handleOperationChange} />
              <CalcButton value={"-"} onClick={handleOperationChange} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
