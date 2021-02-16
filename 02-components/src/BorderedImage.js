function BorderedImageFrame(props) {
    return (
        <img src={props.imgLink} style={{
            border: "4px solid red"
        }} />
    )
}

export default BorderedImageFrame;