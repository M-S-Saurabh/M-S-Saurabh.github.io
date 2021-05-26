import accounts from './info/socialAccountInfo.json';

function SocialList(props){
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

  export default SocialList;