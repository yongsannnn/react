import React from "react"
import ColorDisplay from "./ColorDisplay"

export default class ColorBoxes extends React.Component {
    state = {
        boxes:[{
            "color": "white"
        },{
            "color": "white"
        },{
            "color": "white"
        },{
            "color": "white"
        }

        ]}

    render () {
        return (
            <React.Fragment>
                <ColorDisplay boxes={this.state.boxes} />
            </React.Fragment>

        )
    }

}