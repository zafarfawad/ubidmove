import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

return (

		<div className='container'>
			<div className='row'>
				<div className='col-sm-12 center'>
				<br/>
					<h1 className='title'>Become a part of UBidMove Family</h1>
				</div>
			</div>
			<div className='row'>
				<div className = 'col-sm-3'></div>
					<div className = 'center signin-div col-sm-6'>
						<form name = "/auth/signin" onSubmit = {props.handleSubmit} className='signin-form'>
							<h1>SIGN IN</h1>
							<br/>
							<div className='input-group-prepend'>
								<input className="form-control center" value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder="EMAIL"/>
							</div>
							<br/>
							<div className='input-group-prepend'>
								<input className=" center form-control" autoComplete="new-password" name='password' type='password' value = {props.password} onChange = {props.handleChange} placeholder="PASSWORD"/>
							</div>
							<br/>
							<Link to = "/signup" >REGISTER</Link>
							<br/>
							<input type="submit" style={{display:"none"}}/>
						</form>
						<button style={{marginTop: -9+ '%'}} className = 'signin-btn btn btn-primary center' name = "/auth/signin" onClick = {props.handleSubmit} type = 'submit' >Sign In</button>
					</div>
				</div>
			<div className = 'col-sm-3'></div>
		</div>
	);
}

export default SignIn;

{/* <div>
      <h1>SIGN IN</h1>
      <Link to="/signup">Go to sign up</Link>
      <form className="signInPage">
        <label>Email</label>
        <br />
        <input className="inputBoxes" value={props.username} onChange={props.handleChange} name="username" type="email" placeholder="example@email.com" />
        <br />
        <label>Password</label>
        <br />
        <input className="inputBoxes" name="password" type="password" value={props.password} onChange={props.handleChange} />
        <br />
        <button type="submit" name="/auth/signin" onClick={props.handleSubmit}>
          Sign In
        </button>
	  </form> 
	</div>
)
} */}

{/* <div className="limiter">
	<div className="container-login100" style="background-image: url('images/bg-01.jpg');">
		<div className="wrap-login100">
			<form className="login100-form validate-form">
				<span cclassNamelass="login100-form-logo">
					<i className="zmdi zmdi-landscape"></i>
				</span>

				<span className="login100-form-title p-b-34 p-t-27">
						Log in
				</span>

				<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
				</div>

				<div className="contact100-form-checkbox">
					<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
					<label className="label-checkbox100" for="ckb1">
						Remember me
					</label>
				</div>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn">
						Login
					</button>
				</div>

				<div className="text-center p-t-90">
					<a className="txt1" href="#">
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	</div>
< div id = "dropDownSelect1" > </div>
</div>

)
} */
}