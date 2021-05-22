import projectInfo from './projectsInfo.json';
import educationInfo from './educationInfo.json';
import experienceInfo from './experienceInfo.json';
import { Component } from 'react';

const pagesInfo = {'Education': educationInfo, 'Projects': projectInfo, 'Experience': experienceInfo};
const pageNames = Object.keys(pagesInfo);
const pageDefault = 'Education';

function ListItem(props){
    return (
        <div className="col-md-12 mt-3">
            <h5 className="d-flex justify-content-between">
                <div>
                    { props.item.url ?
                        <a href={props.item.url}>{props.item.title}</a>
                        : <span>{props.item.title}</span>
                    }
                    { props.item.organization ?
                        <small className="text-muted pl-3">{props.item.organization}</small>
                        : false
                    }
                </div>
                <div>
                    <small className="text-muted">{props.item.dates}</small>
                </div>
            </h5>
            <p>{props.item.description}</p>
        </div>
    );
}
  
class ListPage extends Component{
    constructor(props){
        super(props);
        this.state = { selected: pageDefault};
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e){
        this.setState((state)=>({
            selected: e.target.value
        }))
    }

    render(){
        const infoList = pagesInfo[this.state.selected];
        return (
            <div>
                <div className="row mt-5">
                <div className="col-md-12 justify-content-begin">
                    {
                        pageNames.map((name)=>(
                            <button 
                                className={`mr-3 btn btn-outline-dark ${name===this.state.selected ? 'active': ''}`}
                                value={name} key={name}
                                onClick={this.handleButtonClick}
                            >{name}</button>
                            
                        ))
                    }
                </div>
                </div>
                
                <div className="listPages row">
                {
                    infoList.map((item, index)=>
                        <ListItem item={item} key={index.toString()}></ListItem>
                    )
                }
                </div>
            </div>
        );
    }
}

export default ListPage;