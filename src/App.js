import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NameDiv from './NameDiv';
import ListPage from './ListPage';
import SocialList from './SocialList';
import { Component } from 'react';

global.jQuery = $;

const profile = {
  name: 'Saurabh Mylavaram',
  pronunce: 'S-OW-ruh-b \u00A0  MY-luh-vuh-rum',
  email: 'saurabh.mylavaram@gmail.com',
  imgpath: 'images/picture.jpg'
}

class App extends Component {
  render(){
    return (
      <div className="App container">
        <div className="row">
          <div id="profileInfo" className="col-md-8">
            <NameDiv profile={profile}/>
            <p><span className="h6">Email:</span> <span className="text-muted">{profile.email}</span></p>
            <p><a href="resume.pdf" download><span className="h6">Download my Resume as PDF</span></a></p>
            <SocialList/>
            <ListPage selection='Education'/>
          </div>
          <div className="col-md-4">
            <img id="profilePic" src={profile.imgpath} alt="Me standing in front on UMN building"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
