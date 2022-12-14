import "../styles/Portfolio.css";
import logo from "../assets/pepe.png";
import { listAssets } from "../datas/listAssets";

function Portfolio() {
  /*const tag = "ETH";
  const price = "1706$";
  const balance = "1.5406";//*/
  return (
    <section>
      <div className="portfolio-main-div">
        <div className="title-portfolio-div">Wallet</div>
        <div className="portfolio-item header">
          <div className="portfolio-item-element assets">Assets</div>
          <div className="portfolio-item-element">Price</div>
          <div className="portfolio-item-element">Balance</div>
          <div className="portfolio-item-element">Value</div>
        </div>
        {listAssets.map(({ tag, value, balance, blockchain }) => (
          <div className="portfolio-item">
            <div className="portfolio-item-element assets">
              <img src={logo} alt="Ethereum logo" className="logo-item" />
              <div>{tag}</div>
            </div>
            <div className="portfolio-item-element">{value}</div>
            <div className="portfolio-item-element">{balance}</div>
            <div className="portfolio-item-element">{value * balance}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
