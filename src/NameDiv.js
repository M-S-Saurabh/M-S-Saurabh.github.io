import { Component } from 'react';

class NameDiv extends Component{
    constructor(props) {
      super(props);
      this.state = { isHovering: false};
      this.handleMouseover = this.handleMouseover.bind(this);
    }
  
    handleMouseover(){
      this.setState((state)=>({
        isHovering: !state.isHovering
      }))
    }
  
    render() {
      return (
        <div id="nameDiv">
          <h1 
            id="profileName" 
            onMouseEnter={this.handleMouseover}
            onMouseLeave={this.handleMouseover}
          >
            {this.props.profile.name} <span className="infoIndicator">[i]</span>
          </h1>
          {
            this.state.isHovering &&
            <p className="h6">Pronounced as: <span className="text-muted">{this.props.profile.pronunce}</span></p>
          }
        </div>
      );
    }
  }

  export default NameDiv;