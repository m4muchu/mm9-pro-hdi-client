import React, { useState } from 'react'
import { Form, Input, Button, PageHeader } from 'antd'
import { useHistory } from 'react-router-dom'
import { authServices } from '../../api/auth'
import { loginParam } from './model'
import { configConstants } from '../../constants/config-constants'
import { LoginResponse } from './model'

const Login = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const history = useHistory()

  const apiCalls = {
    loginApi: (params: loginParam) => {
      setIsLoading(true)
      authServices
        .login(params)
        .then((response: LoginResponse) => {
          const { data } = response
          if (data) {
            localStorage.setItem(configConstants.TOKEN_NAME, data.accessToken)
            history.push('/')
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }

  const handleSubmit = () => {
    form.validateFields().then(values => {
      apiCalls.loginApi(values)
    })
  }

  return (
    <div className="login">
      <PageHeader className="site-page-header" title="Login to your account" />

      <div className="login-wrapper">
        <div className="card-custom">
          <div className="card-content">
            <Form
              layout="vertical"
              className="login-form"
              form={form}
              name="basic"
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid email!',
                  },
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              <div className="login-button-wrapper">
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => handleSubmit()}
                    style={{ backgroundColor: '#333' }}
                    loading={isLoading}
                  >
                    LOGIN
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
