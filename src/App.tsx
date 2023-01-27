import { useState } from 'react'
import './App.css'
import { Grid } from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <h1>Experiment Randomizer</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                Randomise
            </button>
            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                50/50
            </button>

                <button onClick={() => setCount((count) => count + 1)}>
                    33/33/34
                </button>
            </div>

            <div>
                <form>
                    <fieldset>
                        <legend>Please select your preferred contact method:</legend>
                        <div>
                            <input
                                type="radio"
                                id="contactChoice1"
                                name="contact"
                                value="email"
                                checked/>
                            <label htmlFor="contactChoice1">Email</label>

                            <input type="radio" id="contactChoice2" name="contact" value="phone"/>
                            <label htmlFor="contactChoice2">Phone</label>

                            <input type="radio" id="contactChoice3" name="contact" value="mail"/>
                            <label htmlFor="contactChoice3">Mail</label>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div id="grid-wrapper">
        <Grid />
        </div>
    </div>
  )
}

export default App
