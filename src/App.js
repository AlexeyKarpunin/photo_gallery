import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './pages/Main/index';
import Photographer from './pages/Photographer/index';
import NotFound404 from './pages/NotFound404/index';
import Gallery from './pages/Gallery/index';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/photographer/:name/:id" component={Photographer} />
        <Route exact path="/gallery/:name/:id" component={Gallery} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
