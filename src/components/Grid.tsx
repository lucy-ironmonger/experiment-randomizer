import './Grid.css'
import { Tile } from './Tile'
import { useState} from 'react'

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]


const Grid = () => {
    let board = []

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
         for (let i = 0; i < horizontalAxis.length; i++) {
             const number = j + i + 2
             const isEven = number % 2 === 0
            board.push(<Tile isEven={isEven}>[{horizontalAxis[i]}{verticalAxis[j]}]</Tile>)
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