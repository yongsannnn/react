import React from "react"

export default function ColorControl(props) {
    return (
        <React.Fragment>
            <select name="0" value={props.boxes[0].color}>
                <option>white</option>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
            </select>
            <select name="1" value={props.boxes[1].color}>
                <option>white</option>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
            </select>
            <select name="2" value={props.boxes[2].color}>
                <option>white</option>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
            </select>
            <select name="3" value={props.boxes[3].color}>
                <option>white</option>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
            </select>
        </React.Fragment>
    )
}
