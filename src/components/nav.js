import React from "react"
import { Link } from "gatsby"

const Nav = () => (

	<div className="nav_wrap">
		<ul className="nav">
			<li><Link activeClassName="active" to="/">Home</Link></li>
			<li><Link activeClassName="active" to="/about">About Me</Link></li>
			<li><Link activeClassName="active" to="/projects/">Projects</Link></li>
			<li><Link activeClassName="active" to="/contact/" className="btn_try">Contact Me</Link></li>
		</ul>
	</div>

)


export default Nav