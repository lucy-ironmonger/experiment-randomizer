import './App.css'
import { Grid } from './components/Grid'
import { Dashboard } from './components/Dashboard'
import { RandomizerContext } from './components/RandomizerContext';
import { useReducer } from 'react'
import { reducer } from './utils/reducer'


function App() {

    const initialState = { expConfig: '1', dashWindows: '0'}

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <>
      <RandomizerContext.Provider
          value={{
              dispatch,
              state
          }}
      >

    <div className="App">
          <h2>Experiment Randomizer</h2>
            <div>
                <Dashboard />
            </div>
        </div>
        <div id="grid-wrapper">
            <Grid />
        </div>
          </RandomizerContext.Provider>
    </>
  )
}

export default App
