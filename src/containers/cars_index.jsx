import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index'; 


class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }
  rendercars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="">
            <h3>{car.brand} - {car.model}</h3>
            <p>Owner: {car.owner}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        {this.rendercars()}
        <Link to="/cars/new">Add a car</Link>
      </div>
    );
 }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
 } 

function mapStateToProps(state) {
  return { cars: state.cars,
    garage: state.garage };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

