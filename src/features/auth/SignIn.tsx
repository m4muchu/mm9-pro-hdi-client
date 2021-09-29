import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { Form, Input, Button, PageHeader } from 'antd'
import { isEmpty } from 'lodash'
import { useHistory } from 'react-router-dom'
import { authServices } from '../../api/auth'
import { signInParam } from './model'
import { configConstants } from '../../constants/config-constants'
import { LoginResponse } from './model'
import { setUserAuthenticated } from './authSlice'

const Login = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [serverValidationMessage, setServerValidationMessage] = useState<string>('')
  const dispatch = useAppDispatch()

  const history = useHistory()

  const apiCalls = {
    signInApi: (params: signInParam) => {
      setIsLoading(true)
      authServices
        .signIn(params)
        .then((response: LoginResponse) => {
          const { data } = response
          if (data?.accessToken) {
            localStorage.setItem(configConstants.TOKEN_NAME, data?.accessToken)
            dispatch(setUserAuthenticated({ authenticated: true }))
            history.push('/')
          }
        })
        .catch(({ data: { message } }: { data: { message: string } }) => {
          console.log('err++++++++++++++++', message)
          setServerValidationMessage(message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
  }

  const handleSubmit = () => {
    form.validateFields().then(values => {
      apiCalls.signInApi(values)
    })
  }

  return (
    <div className="login">
      <PageHeader className="site-page-header" title="Sign In to your account" />

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
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
              >
                <Input />
              </Form.Item>
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

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error('The two passwords that you entered do not match!'),
                      )
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              {!isEmpty(serverValidationMessage) && (
                <p className="text-danger">{serverValidationMessage}</p>
              )}
              <div className="login-button-wrapper">
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={() => handleSubmit()}
                    style={{ backgroundColor: '#333' }}
                    loading={isLoading}
                  >
                    SIGN IN
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
