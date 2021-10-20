import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Details from '../pages/Details'

const Routes = ({ search }) =>
    <Switch>
        <Route path='/' exact component={() => <Home search={search} />} />
        <Route path='/details/:id' exact component={Details} />
    </Switch>


export default Routes