import './App.css';
import Signup from './components/Signupform';
import Login from './components/LoginForm';
import DashNavbar from './components/Navbar/DashNavbar';
import Dashboard from './components/Dashboard/Dashboard';
import Splashscreen from './components/Splashscreen';
import Profile from './components/Profile';
import SearchAppBar from './components/Navbar/SearchAppBar';
// import MyPosts from './components/Dashboard/MyPosts';
import Aboutus from './components/Dashboard/Aboutus';
import Contactus from './components/Dashboard/Contactus';
import Carform from './components/Dashboard/Seller/Carform';
import Houseform from './components/Dashboard/Seller/Houseform';
import Sellerboard from './components/Dashboard/Seller/Sellerboard';
import AdDetails from './components/UI-components/AdDetails';
import PropertiesDetails from './components/UI-components/PropertiesDetails';
import Chat from './components/UI-components/chat';
import { MyChats } from './components/UI-components/myChats';
import { SpecificChat } from './components/UI-components/specificChat';
import Loanform from './components/Loan/Loanform';
import Admindashboard from './components/Admin/Admindashboard';

import axios from 'axios';
import { baseurl } from './core';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalContext } from './context/Context';
import { useContext } from "react";
import Vehicles from './components/Dashboard/Vehicles';
import Properties from './components/Dashboard/Properties';
import Help from './components/FAQ/Help';
import Safety from './components/FAQ/Safety';
import Posting from './components/FAQ/Posting';
import Profilehelp from './components/FAQ/Profilehelp';
import Legal from './components/FAQ/Legal';
import Adminlogin from './components/Admin/Adminlogin';


function App() {

  let history = useHistory();
  let { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {

    axios.get(`${baseurl}/api/v1/profile`, {
      withCredentials: true
    })
      .then((res) => {
        console.log("res: ", res.data);

        if (res.data.email) {

          dispatch({
            type: "USER_LOGIN",
            payload: {
              name: res.data.name,
              email: res.data.email,
              _id: res.data._id
            }
          })
        } else {
          dispatch({ type: "USER_LOGOUT" })
        }
      }).catch((e) => {
        dispatch({ type: "USER_LOGOUT" })
      })

    return () => {
    };
  }, []);


  return (
    <>
      {(state?.user?.email) ?

        <DashNavbar />
        :
        <SearchAppBar />

      }




      {(state.user === undefined) ?
        <Switch>
          <Route exact path="/">
          
            
              <Splashscreen />
          
            
          </Route>
        </Switch>
        : null}

      {(state.user === null) ?
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/adminlogin" component={Adminlogin} />
          <Redirect to="/" />
        </Switch> : null
      }

      {(state.user) ?
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>

          <Route path="/dashboard">

            <Dashboard />
          </Route>

          <Route exact path="/dash/:id">
            <AdDetails />
          </Route>
          <Route exact path="/mychats">
            <MyChats />
          </Route>
          <Route exact path="/specificChat/:to_email">
            <SpecificChat />
          </Route>


          <Route exact path="/dashproperties/:id">
            <PropertiesDetails />
          </Route>

          <Route path="/vehicles">
            <Vehicles />
          </Route>

          <Route path="/properties">
            <Properties />
          </Route>

          <Route path="/sellerboard">
            <Sellerboard />
          </Route>

          <Route path="/aboutus">
            <Aboutus />
          </Route>

          <Route path="/carform">
            <Carform />
          </Route>

          <Route path="/houseform">
            <Houseform />
          </Route>

          <Route path="/contactus">
            <Contactus />
          </Route>

          <Route path="/chat/:to_email">
            <Chat />
          </Route>

          <Route path="/faq">
            <Help />
          </Route>

          <Route path="/safety">
            <Safety />
          </Route>

          <Route path="/legal">
            <Legal />

          </Route> <Route path="/posting">
            <Posting />

          </Route> <Route path="/profilehelp">
            <Profilehelp />
          </Route>

          <Route path="/loanform">
            <Loanform />
          </Route>

          <Route path="/admindashboard">
            <Admindashboard />
          </Route>


          <Redirect to="/" />
        </Switch>
        : null}





      {/* <Router>
        <SearchAppBar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Signup />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
