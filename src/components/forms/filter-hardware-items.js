import React, {Component} from "react";
import {reduxForm, Field, submit} from "redux-form";
import PropTypes from "prop-types";

class FilterHardwareItems extends Component {

  submit = values => {
    this.props.fnToExecute(values);
  };

  render() {

    const {handleSubmit, submitting} = this.props;

    return (
        <form id="filterHardwareItems">
          <div className="form-group">
            <label htmlFor={this.props.htmlFor}>Model mouse: </label>
            <Field className="form-control" name={this.props.fieldName}
                   id={this.props.id}
                   component={this.props.component}
                   placeholder={this.props.placeholder}
                   label={this.props.label}>
            </Field>
            <button style={{marginTop: "10px"}}
                    className="btn btn-primary"
                    onClick={handleSubmit(this.submit)} disabled={submitting}>
              { submitting ? "Filtram..." : "Filtreaza" }
            </button>
          </div>
        </form>
    );
  }
}

FilterHardwareItems = reduxForm({
  form: 'filterHardwareItems',
  onSubmit: submit
})(FilterHardwareItems);

FilterHardwareItems.propTypes = {
  htmlFor: PropTypes.string,
  fieldName: PropTypes.string,
  id: PropTypes.string,
  component: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fnToExecute: PropTypes.func
};

export default FilterHardwareItems;