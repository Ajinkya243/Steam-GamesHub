import {Link} from 'react-router-dom'
const Card=()=>{
    const urls=[{publisher:"Rockstar Games",url:'	https://avatars.fastly.steamstatic.com/d83a1786f23929deb5f20326f128bbc13a9a1e85_full.jpg',followers:'749,592'},{publisher:"Electronic Arts",url:"https://avatars.fastly.steamstatic.com/618cc2a46fad78ed1259df505c2de5bb4d806532_full.jpg",followers:'1,19,8227'},{publisher:"Valve",url:"https://avatars.fastly.steamstatic.com/7ba781b5f0b8a99d4cc0b0b0dcaa22df73db7db2_full.jpg",followers:"791,700"},{publisher:"Ubisoft",url:"https://avatars.fastly.steamstatic.com/2b2486ae5a70d69c55f020ce8384d04646ddba4e_full.jpg",followers:"1,342,671"}]
    return(
        <div className="row g-3">
            {urls.map(el=>(
                <div className='col col-md-3 col-12 col-sm-3'>
                <div className="card h-100">
                    <img src={el.url} className="card-img-top" alt="logo" />
                    <div className="card-body">
                        <h5 className="display-5">{el.publisher}</h5>
                        
                        <p className='btn btn-success'>Followers: {el.followers}</p>
                        <p><Link to={`/steam/publisher/${el.publisher}`} className='btn btn-primary'>Explore Games &rarr;</Link></p>
                        
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
export default Card;