import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { BrowserRouter as Router, Redirect } from "react-router-dom"
import './../assets/css/Login.css'
// const PropTypes = require('prop-types')
// BottomNavigationExampleSimple.contextTypes = {
//     router: PropTypes.object
// }
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            form: {},
            haslogin: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('----------------提交成功----------------')
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    form: values
                })
                this.setState({
                    haslogin: true
                })
            }
        })
    }
    render() {
        if(this.state.haslogin) {
            return <Redirect to={{pathname: '/home'}}/>
        }
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login-container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账户' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账户" autoComplete="on"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" autoComplete="on"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住</Checkbox>
                        )}
                        <span className="login-my-btn login-form-forgot">忘记密码</span>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                        或者 <span className="login-my-btn">立即注册!</span>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const Login = Form.create()(LoginForm);

ReactDOM.render(<Login />, document.getElementById('root'))

export default Login