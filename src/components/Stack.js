import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Card from './Card';

class Stack extends Component{
    render(){
        return(
            <div>
                <Link to = '' className = 'link-home'>Home</Link>
                <h3>{this.props.stack.title}</h3>
                <br />
                {
                    this.props.stack.cards.map(card =>{
                        return (
                            <Card key = {card.id} card = {card}/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {stack:state.stack};
}

export default connect(mapStateToProps,null)(Stack);