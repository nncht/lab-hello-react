import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Features() {
  return (
    <main>
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <div className="row">
            <img src={icon1} alt="Declarative" />
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
            <img src={icon2} alt="Components" />
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
            <img src={icon3} alt="Single-Way" />
          </div>
        </div>
        <div className="col-auto">
          <div className="row">
            <img src={icon4} alt="JSX" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Features;
