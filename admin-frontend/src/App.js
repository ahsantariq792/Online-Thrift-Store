import './App.css';
import Login from './components/LoginForm';
import DashNavbar from './components/Navbar/DashNavbar';
import Splashscreen from './components/Splashscreen';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard/Dashboard'
import LoanDetails from './components/Dashboard/Details';

import { GlobalContext } from './context/Context';
import { useContext } from "react";

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
      {/* {(state?.user?.email) ?

        <DashNavbar />
        :
        null

      } */}




      {/* {(state.user === undefined) ?
        <Switch>
          <Route exact path="/">
            <Splashscreen />
          </Route>
        </Switch>
        : null} */}

      {/* {(state.user === null) ?
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch> : null
      } */}

      {/* {(state.user) ?
        <Switch>
          

          <Route path="/">
            <Dashboard />
          </Route>


          <Redirect to="/" />
        </Switch>
        : null} */}

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>  

        <Route exact path="/loan_details/:id">
          <LoanDetails />
        </Route>  

      </Switch>
    </>
  );
}

export default App;
