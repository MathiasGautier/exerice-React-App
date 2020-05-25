import React, { Component } from 'react'

export default class CustomizeImage extends Component {
    state={
            x: 200,
            y:100,
            source : "https://previews.123rf.com/images/yommy8008/yommy80081610/yommy8008161000081/67376534-photo-carr%C3%A9e-avec-le-d%C3%A9tail-de-t%C3%AAte-de-chat-de-tabby-de-quelques-semaines-kitten-a-les-yeux-bleus-et-le-ne.jpg"
        }

handleSource=(event)=>{
    this.setState({
        source : event.target.value,
    })
}
handleRange=(event)=>{
    this.setState({
        x : event.target.value,
    })
}


    render() {
       let width=this.state.x;
        return (
            <div>

            <input type="text" onChange={this.handleSource}/>
                <h1>Customize Image</h1>

                <div>
                <input type="range" onChange={this.handleRange} min="200" max="500"/>
                </div>

                <div>
                <img src={this.state.source} alt="imaget" style={{width:`${width}px`}}/>
                </div>




            </div>
        )
    }
}
