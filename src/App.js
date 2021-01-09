import Home from "./pages/Home";
import { connect } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Detail from "./pages/Detail";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/detail/:movieId" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default connect()(App);
