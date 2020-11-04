import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  rendercars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="">
            <h3>{car.brand}-{car.model}</h3>
            <p>Owner:{car.owner}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        {this.rendercars()}
      </div>
    );
 }
}

function mapStateToProps(state) {
  return { cars: state.cars };
 }
 export default connect(mapStateToProps)(CarsIndex);
