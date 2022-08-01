import "../styles/Menu.css"
function copyText (address){
    console.log("Text copied");
    navigator.clipboard.writeText(address);
}
function Menu() {
    const address="0x19fb84839c6fdbbd0a7227fef6dafeae869d8c4d"
    return(
        <section>
            <div className="menu-main-div">
                <div className="choice-div actif" title="Under construction">Portfolio</div>
                <div className="choice-div" title="See you soon ...">NFTs</div>
                <div className="choice-div" title="See you soon ...">History</div>
                <div className="choice-div" title="See you soon ...">Alerts</div>
            </div>
        </section>
    )
}

export default Menu