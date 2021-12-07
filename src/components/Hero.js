const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <div className="text">
            <p>
              <h2>Buy, Rent, Sell or Build Your Dream Home Easily </h2>

              <span className="small">
                We are an all round real estate agency that will help you to
                find the residence of your dreams
              </span>
            </p>
          </div>
          <div className="img-area">
            <img src={props.img} alt="img" />
          </div>
        </div>
        <div className="input">
          <div className="input-wrap">
            <div className="input-area">
              <label>
                Location
                <input
                  type="text"
                  className="location"
                  placeholder="Thika, Kenya."
                />
              </label>
            </div>
            <span></span>
            <div className="input-area">
              <label>
                Type
                <select>
                  <option value= "Modern & Miniumalist">Modern & Miniumalist</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
            </div>
            <span></span>
            <div className="input-area">
            <label>
                Price
                <select>
                  <option value= "Modern & Miniumalist">$6000 - $12000</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
            </div>
            <div className="input-button">
              <button className = "button"><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
