import {SideNavStyle, ListNavStyle} from "./sideNav.style"
import {Link} from "react-router-dom"

function Painel() {
    return(
    <SideNavStyle>
        <ListNavStyle>
            <Link to="/"><li>Início</li></Link>
            <Link to="/candidatos"><li>Candidatos</li></Link>
            <Link to="/vagas"><li>Início</li></Link>
        </ListNavStyle>
    </SideNavStyle>)
}

export default Painel