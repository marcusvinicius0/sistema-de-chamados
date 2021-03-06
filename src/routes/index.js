import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Customers from '../pages/Customers';
import Newcall from '../pages/Newcall';

export default function Routes(){

    return(
        <Switch>    
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />

            <Route exact path="/dashboard" component={Dashboard} isPrivate />
            <Route exact path="/profile" component={Profile} isPrivate />
            <Route exact path="/customers" component={Customers} isPrivate />
            <Route exact path="/newcall" component={Newcall} isPrivate />
            <Route exact path="/newcall/:id" component={Newcall} isPrivate />

        </Switch>
    )
}

//switch faz renderizar um component por pagina.