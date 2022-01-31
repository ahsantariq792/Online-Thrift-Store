import logo from './logo.svg';
import './App.css';
import { ScanQrcode } from './components/scan-qrcode';
import Login from './components/Login/Login';
import axios from 'axios';
import { baseurl } from './core';
import { useEffect } from 'react';
import { GlobalContext } from './context/Context';
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';



function App() {


  let { state, dispatch } = useContext(GlobalContext);

  // useEffect(() => {

  //   axios.get(`${baseurl}/api/v1/signupmanager`, {
  //     withCredentials: true
  //   })
  //     .then((res) => {
  //       console.log("res: ", res.data);

  //       if (res.data.email) {

  //         dispatch({
  //           type: "USER_LOGIN",
  //           payload: {
  //             name: res.data.name,
  //             email: res.data.email,
  //             _id: res.data._id
  //           }
  //         })
  //       } else {
  //         dispatch({ type: "USER_LOGOUT" })
  //       }
  //     }).catch((e) => {
  //       dispatch({ type: "USER_LOGOUT" })
  //     })

  //   return () => {
  //   };
  // }, []);





  return (
    <div className="App">


      {/* {(state.user === undefined) ?
        <Switch>
          <Route exact path="/">
            <Splashscreen />
          </Route>
        </Switch>
        : null} */}



      {/* {(state?.user == null) ? */}

        {/* <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch> */}
        {/* :
        <Switch>
          <Route exact path="/">
            <ScanQrcode />
          </Route> */}
<Route exact path="/">
            <ScanQrcode />
          </Route>
          <Route path="/dashboard/:id">
            <Dashboard />
          </Route>
        {/* </Switch> */}

      {/* } */}
      
      {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}


      {/* 
      {(state?.user) ?

        <Switch>
          <Route exact path="/">
            <ScanQrcode />
          </Route>
          <Redirect to="/" />
        </Switch>
        : null} */}



    </div>
  );
}

export default App;
