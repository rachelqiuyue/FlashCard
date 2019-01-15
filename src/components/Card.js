import React,{Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {reveal:false};
    }
    render(){
        return (
            <div className = 'card' onClick = {()=>this.setState({reveal:!this.state.reveal})}>
                <div><h4>{this.props.card.prompt}</h4></div>
                <div><h4 className = {this.state.reveal ? 'text-revealed' : 'text-hidden'}>{this.props.card.answer}</h4></div>
            </div>
        )
    }
}

export default Card;