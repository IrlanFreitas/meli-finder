import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Details from '../pages/Details'

const Routes = () =>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' exact component={Details} />
    </Switch>


export default Routes