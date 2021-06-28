import React from 'react'
import { Form, Input, Button, PageHeader } from 'antd'

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// }
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// }

const Login = () => {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    form.validateFields().then(values => {
      console.log('values+++++++++++++', values)
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
                name="username"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
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
                  <Button type="primary" onClick={() => handleSubmit()}>
                    Submit
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
