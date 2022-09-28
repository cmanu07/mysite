
const NavBar = (props) => {

    return ( <div>
                <h3><a href="/projects">{props.proiecte}</a></h3>
                <h3><a href="/myCV">{props.cv}</a></h3>
                <h3><a href="/about">{props.despre}</a></h3>
        </div> );
}

export default NavBar;