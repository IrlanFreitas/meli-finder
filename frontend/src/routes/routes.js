import { Route, BrowserRouter as Routers } from "react-router-dom";
import Home from '../pages/Home'
import Details from '../pages/Details'

const Routes = ({ search, setBreadCrumb, breadCrumb }) =>
    <Routers>
        <Route path='/' exact component={() => <Home search={search} setBreadCrumb={setBreadCrumb} breadCrumb={breadCrumb} />} />
        <Route path='/details/:id'exact component={() => <Details breadCrumb={breadCrumb}/>} />
    </Routers>


export default Routes