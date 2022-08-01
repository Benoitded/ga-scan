import "../styles/Header.css"
//import logo from "../assets/leaf.png";

function Header() {
    const title = "GAscan";
    return(
        <header>
            <div className="header-main-div">
                <div className="header-div">{title}</div>
                <div className="header-div search-div">
                    <span style={{color:"black", paddingRight:"5px"}}>Q</span>
                    <input className="search-input" type="search" placeholder="Are you looking to track someone ..." />
                </div>
                <div className="header-div">
                    <input type="button" value="Connect to wallet" className="connect-btn"/>
                </div>
            </div>
        </header>
    )
}

export default Header