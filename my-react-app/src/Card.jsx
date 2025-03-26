import profilePic from './assets/dramatic-landscape.jpg'

function Card(){

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className='card-image'/>
            <h2 className='card-title'>Ryan</h2>
            <p className='card-text'>I'm a web developer and I play basketball</p>
        </div>
    );
}

export default Card;
