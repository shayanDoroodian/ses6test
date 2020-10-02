import React, { useState  , useEffect} from 'react';
import { BrowserRouter as Router, Switch, useLocation, Route } from "react-router-dom";
import './App.css';
import axios from "axios";

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NewsList from './components/landingSection/News/newsList/newsList'

function App() {
  const [basket, setBasket] = useState(0);
	const [newsList, setnewsList] = useState([]);
  useEffect(() => {
    axios({
      method: 'Get',
      url: `https://jsonplaceholder.typicode.com/photos`,
    }).then((res) => {
      setnewsList(res.data);
    });
  });
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path='/newsList' className='newsLink'>
				  	<NewsList data={newsList}/>
				  </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;