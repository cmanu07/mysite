import NavBar from "./NavBar"


const Header = () => {

    

    let className = "header";
    const navList = [{buton1: 'CAREER', buton2: 'PROJECTS', buton3: 'CV', buton4: 'ABOUT ME'}];

    return (
        <div className = {`${className}`}>
            <h1 title="Emanuel Caradan - My Site"><a href="/">Emanuel Caradan</a></h1>
            {navList.map((buton) => {
                return <NavBar
                    key = {buton.buton1}
                    cariera = {buton.buton1}
                    proiecte = {buton.buton2}
                    cv = {buton.buton3}
                    despre = {buton.buton4}
                />
            })}
        </div>
    )
};

export default Header;