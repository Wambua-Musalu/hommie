import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="logo">
            	<Link to = "/"><h3>Hommie</h3></Link>
          </div>
         <div>
		 <div className="hide-for-mobile ">
		 <div className= "main-menu">
		  	<div className = "nav-center">
				  <span>Home</span>
				  <span>Services</span>
				  <span>Contact</span>
			  </div>
				<div className = "auth-logic">
					<div className = "user"><p>current user</p></div>
					<div className = "auth-btn"><Link to = "auth"><button>Sign up</button></Link></div>
				</div>
          </div>
		 </div>
		  <div className = "hide-for-desktop toogle-menu">
		 		 <a href = " "> 
					<span></span>
					<span></span>
					<span></span>
				</a>
		  </div>
		 </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
