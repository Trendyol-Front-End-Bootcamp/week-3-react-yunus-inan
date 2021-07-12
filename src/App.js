
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import './Style/index.scss';
import Home from "./Pages/Home";
import CharacterDetail from "./Pages/CharacterDetail";




function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
