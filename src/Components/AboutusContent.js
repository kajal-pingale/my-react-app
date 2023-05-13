import React, { Component } from 'react'

export default class AboutusContent extends Component {
    constructor(){
        super();
        this.state={displayBio:false};
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
    }
    toggleDisplayBio(){  
        this.setState({displayBio: !this.state.displayBio});  
        }  
  render() {
    return (
      <div>
        
        Pizza is a dish of Italian origin consisting of a <br/>usually round, flat base
            of leavened wheat-based <br/>dough topped with tomatoes, cheese, and
            often various <br/>other ingredients
            {
                this.state.displayBio?(
                    <div>
                        (such as various types of sausage,
            anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.),
            which is then baked at a high temperature, traditionally in a
            wood-fired oven.
            <button onClick={this.toggleDisplayBio} className="readbtn"> Show Less </button> 
                    </div>
                ):(<div>  
                    <button onClick={this.toggleDisplayBio} className="readbtn"> Read More </button>  
                </div> )
            }

        
      </div>
    )
  }
}
