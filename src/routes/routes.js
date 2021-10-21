import { Route, BrowserRouter as Routers } from "react-router-dom";
import Home from '../pages/Home'
import Data from '../pages/Details'

const Routes = ({ search }) =>
    <Routers>
        <Route path='/'  exact component={() => <Home search={search} />} />
        {/* <Route path='/details'exact component={() => <Details />} /> */}
        <Route path='/details/:id'exact component={Data} />
    </Routers>


export default Routes