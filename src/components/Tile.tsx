import './Tile.css'
import { useState } from 'react'

type TileProps = {
    isDark: boolean
    children?: React.ReactNode
    value: string
    isSelected: boolean
    // selected: boolean
    // setSelected: (p: (prevState: boolean) => boolean) => void

}

const Tile = ( { isSelected, isDark, value }: TileProps ) => {
    const [selected, setSelected] = useState(false)
    const array = []

    const classes = `tile ${(isSelected || selected) ? "selected" : isDark ? "dark-tile" : "light-tile"}`

    const clickHandler = () => {
        setSelected(prevState => !prevState)
        array.push(value)
    }

return(
    <>
     <span onClick={clickHandler} className={classes}>{value}</span>
    </>
    )
}

export { Tile }