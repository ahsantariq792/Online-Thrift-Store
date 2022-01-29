import './App.css';


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
import Admindashboard from './components/Dashboard/Admindashboard';

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




      {/* {(state.user === undefined) ?
        <Switch>
          <Route exact path="/">
          
            
              <Splashscreen />
          
            
          </Route>
        </Switch>
        : null} */}

      {(state.user === null) ?
        <Switch>
          <Route exact path="/" component={Login} />
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

        

          <Route path="/admindashboard">
            <Admindashboard />
          </Route>


          <Redirect to="/" />
        </Switch>
        : null}
    </>
  );
}

export default App;
