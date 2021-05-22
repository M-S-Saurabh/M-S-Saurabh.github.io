import './App.css';
import NameDiv from './NameDiv';
import ListPage from './SubPage';

const profile = {
  name: 'Saurabh Mylavaram',
  pronunce: 'S-OW-ruh-b \u00A0  MY-luh-vuh-rum',
  email: 'saurabh.mylavaram@gmail.com',
  imgpath: 'images/picture.jpg'
}

const accounts = [
  {name:'LinkedIn', icon:'images/linkedin.png', link:'https://www.linkedin.com/in/saurabh-mylavaram/'},
  {name:'Github', icon:'images/github.png', link:'https://github.com/M-S-Saurabh/'},
  {name:'Youtube', icon:'images/youtube.png', link:'https://www.youtube.com/channel/UC7VEbIKstYTDlz9iSBo3ycQ'},
]

function SocialList(props){
  const accounts = props.accounts;
  const socialList = accounts.map((account) =>
    <p className='socialLinks' key={account.name}>
      <a href={account.link} target="_blank" rel="noreferrer">
        <img className='socialIcons' 
          src={account.icon} 
          alt={account.name + (account.username ? `: ${account.username}` : "")}/>
      </a>
    </p>
  );
  return (
    <div id='socialList'>
      {socialList}
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div id="profileInfo" className="col-md-8">
          <NameDiv profile={profile}/>
          <p><span className="h6">Email:</span> <span className="text-muted">{profile.email}</span></p>
          <p><a href="resume.pdf" download><span className="h6">Download my Resume as PDF</span></a></p>
          <SocialList accounts={accounts}/>
          <ListPage selection='Education'/>
        </div>
        <div className="col-md-4">
          <img id="profilePic" src={profile.imgpath} alt="Me standing in front on UMN building"/>
        </div>
      </div>
    </div>
  );
}

export default App;
