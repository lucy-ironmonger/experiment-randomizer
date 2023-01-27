import './Tile.css'
import { useState } from 'react'

type TileProps = {
    isEven: boolean;
    children?: React.ReactNode;
}

const Tile = ( { children, isEven }: TileProps ) => {
    const [selected, setSelected] = useState(false)

    const classes = `tile ${selected ? "selected" : isEven ? "dark-tile" : "light-tile"}`

    const clickHandler = () => {
        setSelected(prevState => !prevState)
        console.log('clicked!')
    }

return(
    <>
     <span onClick={clickHandler} className={classes}>{children}</span>
    </>
    )
}

export { Tile }