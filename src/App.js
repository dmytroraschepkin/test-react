import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Houses from './components/Houses';
import House from './components/House';
import Rooms from './components/Rooms';
import Room from './components/Room';
import Tenancies from './components/Tenancies';
import Tenancy from './components/Tenancy';

export default function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/houses">Houses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rooms">Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tenancies">Tenancies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid mt-5">
                <Switch>
                    <Route path="/houses">
                        <Houses />
                    </Route>
                    <Route path="/house/:id">
                        <House />
                    </Route>
                    <Route path="/rooms">
                        <Rooms />
                    </Route>
                    <Route path="/room/:id">
                        <Room />
                    </Route>
                    <Route path="/tenancies">
                        <Tenancies />
                    </Route>
                    <Route path="/tenancy/:id">
                        <Tenancy />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
