import { useContext } from 'react'
import { RandomizerContext } from './RandomizerContext'

const Dashboard = () => {
    const appFormContext = useContext(RandomizerContext)
    const { state, dispatch } = appFormContext

    return(
        <>
            <div className="card">
                <button onClick={() => {}}>
                    Randomise
                </button>
                <div className="card">
                    <button onClick={() => {
                        dispatch({
                            type: "50-50 EXP" })
                    }}>
                        50/50
                    </button>

                    <button onClick={() => {
                        dispatch({
                            type: "33-33-34 EXP" })
                    }}>
                        33/33/34
                    </button>
                    { state.dashWindows === 3 && <p>Hi i'm here for 3</p>}
                    { state.dashWindows === 2 && <p>Hi i'm here for 2</p>}
                </div>
            </div>
        </>
    )
}

export { Dashboard }