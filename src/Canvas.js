import React, { Component } from 'react'

const canvas = {
    width: 640,
    height: 425
}

export default class Canvas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadPosition: 0
        }
    }
    componentDidMount() {
        this.updateCanvas()
    }
    componentDidUpdate() {
        this.updateCanvas()
        if (this.state.deadPosition === 0 && this.props.count === this.props.difficulty) {
            this.setState({ deadPosition: 20 })
        }
    }

    updateCanvas() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const count = this.props.count
        const deadPosition = this.state.deadPosition

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(canvas.width / 2, 40 + deadPosition, 20, 0, 2 * Math.PI);

        //corde
        ctx.strokeStyle = "green";
        ctx.fill();
        ctx.moveTo(canvas.width / 2 + 25, 0);
        ctx.lineTo(canvas.width / 2 + 25, 70);
        ctx.stroke();

        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 140, 25, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.scale(1, 2);

        // corps
        ctx.fillRect(canvas.width / 2 - 3, 60 + deadPosition, 6, 15); // cou
        ctx.fillRect(canvas.width / 2 - 20, 75 + deadPosition, 40, 50); // corps
        ctx.fillRect(canvas.width / 2 - 15, 125 + deadPosition, 10, 35); //LEFT
        ctx.fillRect(canvas.width / 2, 125 + deadPosition, 10, 35); // RIGTH


        //support
        ctx.fillStyle = "green"
        ctx.fillRect(canvas.width / 2 - 50 + (count * 12), 160, 80, 35);

        if (this.props.status === "gain") {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = "20pt Calibri,Geneva,Arial";
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.strokeText("Bien joué !", canvas.width / 2 - 50, 40);
        }
    }

    render() {

        return (
            <div>
                <canvas ref="canvas" width={canvas.width} height={canvas.height} />
            </div>
        )
    }
}
