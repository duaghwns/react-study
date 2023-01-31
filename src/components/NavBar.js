import { 
    Switch,
    Route,
    NavLink,
 } from "react-router-dom";
import { 
    Nav,
    Container,
    Navbar,
 } from "react-bootstrap";

import Main from "./Main";
import NonPage from "./NonPage";

const style = {
    fontWeight: "bold",
    color:'red',
}

export default function NavBar() {
    return (
        <div>
            <header>
                <h1>
                    <p>
                        <NavLink to="/" activeStyle={style}>Home</NavLink>
                    </p>
                </h1>
            </header>
            {/* <Switch>
                <Route exact path="/" component={Main} />
                <Route path="*" component={NonPage} />  
            </Switch> */}
        </div>
    )
}