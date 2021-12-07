import Private from "../images/private.png";
import value from "../images/valueMoney.png"
import Apartment from "../images/apartment.png"

const PropertyTypes = () => {
  return (
    <>
      <div className="property">
        <div className="wrapper">
          <div className="text">
            <h2>Property Types</h2>
          </div>
          <div className="wrap">
            <div className="wrapped">
              <img src={Private} alt="house" />
              <div className="title"> Private House</div>
            </div>
            <div className="wrapped">
            <img src={Apartment} alt="house" />
              <div className="title">Apartments</div>
            </div>
            <div className="wrapped">
            <img src={value} alt="house" />
              <div className="title"> Rent to Own</div>
            </div>
            {/* <div className="wrapped">
            <img src=" " alt="house" />
              <div className="title"> </div>
              <i class="fa fa-house"></i>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyTypes;
