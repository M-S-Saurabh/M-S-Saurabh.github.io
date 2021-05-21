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
  {name:'Youtube', icon:'images/youtube.png', link:'https://www.youtube.com/channel/UC7VEbIKstYTDlz9iSBo3ycQ'},
  {name:'Github', icon:'images/github.png', link:'https://github.com/M-S-Saurabh/'},
]

function SocialList(props){
  const accounts = props.accounts;
  const socialList = accounts.map((account) =>
    <div className='socialLinks' key={account.name}>
      <a href={account.link} target="_blank" rel="noreferrer">
        <img className='socialIcons' 
          src={account.icon} 
          alt={account.name + (account.username ? `: ${account.username}` : "")}/>
      </a>
    </div>
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
