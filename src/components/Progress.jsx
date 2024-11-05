import React, { useContext } from 'react'
import ListContext from '../context/list/ListContext'


const Progress = () => {
    const listContext = useContext(ListContext)
    const { selectedItem } = listContext
    var progress = Math.round(((Object.keys(selectedItem).length) / 7) * 100)
    return (
        <div className={`progress`} role="progressbar" aria-label="Example with label" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ height: "20px", backgroundColor: !progress?"black":"#1e1d1db3", margin: "10px 30px 0px 30px", borderRadius: "30px"}}>
            <div className="progress-bar bg-success" style={{ width: `${progress}%` }}>{progress} %</div>
        </div>
    )
}

export default Progress
