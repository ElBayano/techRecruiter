import {SideNavStyle, ListNavStyle} from "./sideNav.style"
import {Link, useLocation} from "react-router-dom"
import Profile from "../profile/profile"

function Painel() {

    return(<>
    <SideNavStyle>
        <Profile/>
        <ListNavStyle>
            <Link to="/inicio"><li className={useLocation().pathname === "/inicio" ? "liActive" : "Li"}>Início</li></Link>
            <Link to="/candidatos"><li className={useLocation().pathname === "/candidatos" ? "liActive" : "Li"}>Candidatos</li></Link>
            <Link to="/vagas"><li className={useLocation().pathname === "/vagas" ? "liActive" : "Li"}>Vagas</li></Link>
        </ListNavStyle>
    </SideNavStyle>
    </>)
}

export default Painel