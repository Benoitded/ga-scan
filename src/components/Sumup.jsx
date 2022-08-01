import "../styles/Sumup.css"
import icon from "../assets/pepe.png";
function copyText (address){
    console.log("Text copied");
    navigator.clipboard.writeText(address);
}
function Sumup() {
    const address="0x19fb84839c6fdbbd0a7227fef6dafeae869d8c4d"
    return(
        <section>
            <div className="sumup-main-div">
                <div className="sumup-first-line">
                    <div className="sumup-first-left">
                        <div className="sumup-div-img">
                            <img src={icon} alt="Your personal image" className="sumup-img"/>
                        </div>
                        <div className="names-div">
                            <div className="name-div">Le goat</div>
                            <div className="address-div" title="Press to copy" onClick={() => copyText(address)}>
                                {address}
                            </div>
                        </div>
                    </div>
                    <div className="money-div">
                        <div className="dollar-div">50,112$</div>
                        <div className="eth-div">~42.153Ξ</div>
                    </div>
                </div>
                <div className="sumup-second-line">
                    <div className="progress-bar-div">
                        <div className="progress-bar-name">Eth</div>
                    </div>
                    <div className="progress-bar-div second">
                        <div className="progress-bar-name">Avax</div>
                    </div>
                    <div className="progress-bar-div others">
                        <div className="progress-bar-name">Others</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sumup