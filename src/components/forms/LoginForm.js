import React from 'react';
import { Form, Input, Button, Icon, Checkbox } from 'antd';
// import { isEmail } from 'validator';
// import InLineError from '../messages/InLineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

  state = {
    data: {
      email: "",
      password: "",
      rememberme: false
    },
    errors: {},
    validateMessage: {
      status: "",
      id: ""
    },
    loading: false
  };
  

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Blad');
      }
    });
  };



  // handleSubmit = () => {
  //   // e.prefentDefault();
  //   console.log('submit');
  //   const errors = this.validate(this.state.data);
  //   this.setState({ errors });
  // }

  // validate = (data) => {
  //   const errors = {};
  //   if (!data.email) errors.email = "Adres E-mail jest wymagany !";
  //   if (!isEmail(data.email)) errors.email = "Adres E-mail jest błędnie wpisany !";
  //   if (!data.password) errors.password = "Hasło jest wymagane!";
  //   return errors;
  // }

  render() {
    const { data, errors } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="LoginForm">
        <div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Adres E-mail jest wymagany"
                  }
                ]
              })(<Input placeholder="E-mail"/>)}

              {/* <Input type="email" name="email" prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="E-mail" value={data.email} onChange={this.onChange} />)} */}
            </Form.Item>
            <Form.Item className="login-formitem-container">
              <Input
                id="password"
                type="password"
                name="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Hasło"
                value={data.password}
                onChange={this.onChange}
              />
              {/* {errors.password && <InLineError text={errors.password} />} */}
            </Form.Item>
            <Form.Item className="checkbox-login-form">
              <Checkbox value={data.rememberme} id="rememberme">
                Zapamiętaj mnie
              </Checkbox>
            </Form.Item>
            <Form.Item className="login-formitem-container">
              <Button type="primary" size="large">
                Zaloguj się
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.shape.isRequired,
  getFieldDecorator: PropTypes.func.isRequired
}

export default Form.create()(LoginForm);