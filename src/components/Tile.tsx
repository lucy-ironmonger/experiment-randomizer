import './Tile.css'
import { useState } from 'react'

type TileProps = {
    isEven: boolean
    children?: React.ReactNode
    value: string
    // selected: boolean
    // setSelected: (p: (prevState: boolean) => boolean) => void

}

const Tile = ( { children, isEven, value }: TileProps ) => {
    const [selected, setSelected] = useState(false)

    const classes = `tile ${selected ? "selected" : isEven ? "dark-tile" : "light-tile"}`

    const clickHandler = () => {
        setSelected(prevState => !prevState)
        console.log(value)
    }

return(
    <>
     <span onClick={clickHandler} className={classes}>{children}</span>
    </>
    )
}

export { Tile }