import projectInfo from './info/projectsInfo.json';
import educationInfo from './info/educationInfo.json';
import experienceInfo from './info/experienceInfo.json';
import { Component } from 'react';

const pagesInfo = {
    'Education': educationInfo, 
    'Projects': projectInfo, 
    'Experience': experienceInfo
};
const pageNames = Object.keys(pagesInfo);
const pageDefault = 'Education';

function ListItem(props){
    var descriptionBlock = <p></p>;
    if (Array.isArray(props.item.description)){
        descriptionBlock = <ul>{
            props.item.description.map((element, index) => {
                return <li key={index}>{element}</li>;
            })
        }</ul>;
    }else{
        descriptionBlock = <p>{props.item.description}</p>;
    }

    return (
        <div className="col-md-12 mt-3">
            <h5 className="d-flex justify-content-between mb-1">
                <div>
                    { props.item.url ?
                        <a href={props.item.url} target="_blank" rel="noreferrer">{props.item.title}</a>
                        : <span>{props.item.title}</span>
                    }
                </div>
                <div>
                    <small className="text-muted">{props.item.dates}</small>
                </div>
            </h5>
            <h6 className="d-flex justify-content-between">
                <div>
                    { props.item.organization ?
                        <em className="text-muted">{props.item.organization}</em>
                        : false
                    }
                </div>
                <div>
                    <em className="text-muted">{props.item.place}</em>
                </div>
            </h6>
            {descriptionBlock}
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
                                className={`btn btn-outline-dark mr-3 ${name===this.state.selected ? 'active': ''}`}
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