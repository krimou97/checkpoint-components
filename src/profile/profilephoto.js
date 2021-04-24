import './profilephoto.css'
import photo from '../assets/images/profile-img.jpg'

const Profilephoto = () => {
    return (
        <div className={'profile'}>
          <img src={photo} alt='profile photo'/>
        </div>
    )
}

export default Profilephoto