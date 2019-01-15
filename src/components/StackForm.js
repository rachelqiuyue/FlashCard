import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addStack} from '../actions';


class StackForm extends Component{
    
    constructor(){
        super();
        this.state = {
            title: '',
            cards: []
        }
    }

    addCard(){
        const {cards} = this.state;
        cards.push({id:cards.length,prompt:'',answer:''});
        this.setState({cards});
    }


    addStack(){
        this.props.addStack(this.state);
    }

    render(){
        return(
            <div>
                <Link to ='/' className = 'link-home'><h4>Home</h4></Link>
                <h4>Create a new form</h4>
                <br />
                <Form>
                    <FormGroup>
                        <ControlLabel>Title:</ControlLabel>
                        {' '}
                        <FormControl onChange = {event=>{
                            this.setState({title:event.target.value})
                        }
                    }/>
                    </FormGroup>
                    {
                        this.state.cards.map((card,index)=>{
                            return(
                                <div key ={card.id} >
                                <br/>
                                <FormGroup>
                                    <ControlLabel >Prompt:</ControlLabel>
                                    {' '}
                                    <FormControl onChange = {event=>{
                            const {cards} = this.state;
                            cards[index].prompt = event.target.value;
                            this.setState({cards});
                            } 
                        }/>
                            {' '}
                            <ControlLabel>Answer:</ControlLabel>
                            {' '}
                            <FormControl onChange = {event=>{
                                const {cards} = this.state;
                                cards[index].answer = event.target.value;
                                this.setState({cards});
                        }
                    }/>
                                    <hr/>
                                </FormGroup>
                                </div>
                            ) 
                        })
                    }
                </Form>
                <br />
                <button onClick={()=>this.addCard()}>Add a card</button>

                <button onClick={()=>this.addStack()}>Save and add to inventory</button>
            </div>
        )
    }
}

export default connect(null,{addStack})(StackForm);