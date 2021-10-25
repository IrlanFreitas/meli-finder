import { Route, BrowserRouter as Routers } from "react-router-dom";
import Home from '../pages/Home'
import Details from '../pages/Details'

const Routes = () =>
    <Routers>
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' exact component={Details} />
    </Routers>

export default Routes