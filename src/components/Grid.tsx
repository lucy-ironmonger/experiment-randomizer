import './Grid.css'
import { Tile } from './Tile'
import { randomize, printArray } from '../utils/randomizer.js'
import { experimentHexValues } from './experimentHexValues'
import { useContext, useEffect } from 'react'
import { RandomizerContext } from './RandomizerContext'


const Grid = () => {
    const appFormContext = useContext(RandomizerContext)
    const { state } = appFormContext

    const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    const allValues = experimentHexValues
    console.log(randomize(allValues))
    console.log(printArray(allValues))
    let amendedArray: string[] = allValues.slice(0, state.expConfig)

    useEffect(() => {
        amendedArray = allValues.slice(0, state.expConfig)
        console.log("amendedArray", amendedArray)
    }, [state.expConfig])

    let board = []

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
         for (let i = 0; i < horizontalAxis.length; i++) {
             const number = j + i + 2
             const isEven = number % 2 === 0
             const value = `${horizontalAxis[i]}${verticalAxis[j]}`
             const isSelected = amendedArray.includes(value)
             // if value matches one of the items in the randomised array then pass down 'selected'
            board.push(<Tile isSelected={isSelected} isDark={isEven} value={value}>{value}</Tile>)
        }
    }
    return(
        <>
        <div id="grid">
            {board}
        </div>
        </>
    )
}

export { Grid }