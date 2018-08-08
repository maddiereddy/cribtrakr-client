// import React from 'react';
// import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchRentals} from '../actions/rentals';
// import './dashboard.css';
// import RentalCard from './rental-card';
// import Header from './header';
// // import spinner from '../images/ajax-loader.gif';

// export class Dashboard extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchRentals());
//   }

//   render() {
//     // if (this.props.loading) 
//     //   return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    

//     let rentals;

//     if (this.props.rentals && this.props.rentals.length) {
//       rentals = this.props.rentals.map((rental, index) => 
//         <RentalCard key={index} link={`/edit-rental`} name={rental.name} rental={rental} image={require("../images/home.png")} id={rental.id}/>
//       );
//     } 

//     let noRentalsMessage = (
//       <div>
//         <span>You don't have any rental properties yet.</span>
//       </div>
//     )
//     return (
//       <div className="dashboard">
//         <Header title='Rental Properties' />
//         { this.props.rentals && this.props.rentals.length ? rentals : 
//           noRentalsMessage }
//         {/* {rentals} */}
//         <RentalCard link='/add-rental' name='Add Property' newRental={true} image={require("../images/add-home.png")} />
//       </div>
//     );
//   }
// }
// Dashboard.defaultProps = {
//   rentals: [],
//   loading: false
// };
// const mapStateToProps = state => {
//   return {
//     rentals: state.rental.rentals,
//     loading: state.rental.loading
//   };
// };
// export default requiresLogin()(connect(mapStateToProps)(Dashboard));

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import requiresLogin from './requires-login';
import './dashboard.css';

export function Dashboard(props) {
	
	return (
		// <Redirect to="/rentals" />
		<div className="userHome">
			<h1><i>Hello, {props.name}!</i></h1>
      <h2>Do you want to start by viewing your <br />
      <Link to="/rentals">Rental Properties</Link> or <Link to="/expenses">Expenses</Link> ?</h2>
		</div>
	);
}

const mapStateToProps = state => {
	const {currentUser} = state.auth;
	return {
		name: `${currentUser.firstName} ${currentUser.lastName}`
	}
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));