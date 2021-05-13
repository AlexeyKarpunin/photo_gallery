import Main from './pages/Main/index';
import Photographer from './pages/Photographer/index';
import NotFound404 from './pages/NotFound404/index';
import Gallery from './pages/Gallery/index';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/photographer/:name/:id" component={Photographer} />
        <Route exact path="/gallery/:name/:id" component={Gallery} />
        <Route component={NotFound404} />
      </Switch>
    </HashRouter>
  );
}

export default App;
