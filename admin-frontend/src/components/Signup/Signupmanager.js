import '../../App.css';
import SignupmanagerChild from './Signupmanager-child';
// import image from '../images/carimage.png'






const Signupmanager = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
            <SignupmanagerChild/>
        </div>
        <div className="col-md-7 my-auto" style={{textAlign: "center"}}>
          <img className="img-fluid w-80"  src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/3-512.png" alt="image"></img>
        </div>
      </div>

    </div>

  )
}

export default Signupmanager;