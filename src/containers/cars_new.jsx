import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { addCar } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class CarsNew extends Component {
    onSubmit = (values) => {
      this.props.addCar(this.props.garage, values, () => {
        this.props.history.push('/');
      });
    }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <Link to="/">Back to list</Link>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Car
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}
export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { addCar })(CarsNew)
);
