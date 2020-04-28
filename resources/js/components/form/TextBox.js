import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bulma-components';

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleEnter(e) {
    console.log({ e })
  }

  handleChange(e) {
    const { onChange } = this.props;
    const { value } = e.target;

    onChange(value);
  }

  render() {
    const { value, label, error, placeholder, type } = this.props;

    return (
      <Form.Field>
        {label && (
          <Form.Label>{label}</Form.Label>
        )}
        <Form.Control>
          <Form.Input
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={this.handleChange}
          />
          {error && (
            <Form.Help color="danger">{error}</Form.Help>
          )}
        </Form.Control>
      </Form.Field>
    )
  }
}

TextBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextBox.defaultProps = {
  value: '',
  error: null,
  label: null,
  placeholder: '',
  type: 'text',
};

export default TextBox;
