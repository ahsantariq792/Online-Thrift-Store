import '../App.css';
import SignupformChild from './Signupform-child';
import image from '../images/carimage.png'






const Signupform = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignupformChild></SignupformChild>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={image} alt="image"></img>
        </div>
      </div>

    </div>

  )
}

export default Signupform;