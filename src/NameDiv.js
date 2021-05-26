import { Component } from 'react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

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

    componentDidMount(){
      const pronunce = this.props.profile.pronunce;
      const popoverContent = ReactDOMServer.renderToStaticMarkup(
        <div>Pronounced as:<br/><strong>{pronunce}</strong></div>
      );
      global.jQuery(document).ready(function() {
        global.jQuery('.infoIndicator').popover({
          "trigger": "focus",
          "html": true,
          "content": popoverContent
        });
      });
    }
  
    render() {
      return (
        <div id="nameDiv">
          <h1 
            id="profileName" 
            onMouseEnter={this.handleMouseover}
            onMouseLeave={this.handleMouseover}
            className={this.state.isHovering ? "nameAnimate" : undefined}
          >
            {this.props.profile.name} 
            <button 
              type="button"
              className="btn btn-link infoIndicator"
              data-toggle="popover" tabIndex="75"
            >i</button>
          </h1>
        </div>
      );
    }
  }

  export default NameDiv;