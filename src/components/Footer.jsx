import "../styles/Footer.css"

function Footer() {
    const title = "GAscan";
    return(
        <footer>
            <div className="footer-main-div">
                <div className="footer-column">
                    <div className="footer-title">
                        Socials
                    </div>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                            Support us on
                    </div>
                    <a href="https://gitcoin.co/" target="_blank" rel="noopener noreferrer">Gitcoin</a>
                    <a href="https://etherscan.io/address/0x7426dd8546c43f4da37545594874575fce166b9e" target="_blank" rel="noopener noreferrer">Our address</a>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                            Usefull links
                    </div>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">Etherscan</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer