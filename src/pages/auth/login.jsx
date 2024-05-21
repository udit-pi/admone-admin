import React from 'react'
import { Form, Button } from 'react-bootstrap';
import logo from "../../assets/images/adm_logo.png";
import Layout from '../../components/layout/Layout_login'
const Login = () => {
    return (
        <Layout>
        <div className='login' style={{height:'100vh'}}>
            <div className="login-form-wrapper">

                <div className="login-card">
                    <img src={logo} width="160" className="logo" alt="Logo" />

                    <h3>Sign in</h3>
                    <Form >
                        <Form.Group className='form-group' controlId="userSigninLogin">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your email"
                            // value={login}
                            // onChange={(e) => setLogin(e.target.value)}
                            // isInvalid={!!errors.login}
                            />
                            <Form.Control.Feedback type="invalid">
                                {/* {errors.login} */}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group  className='form-group' controlId="userSigninPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            // isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {/* {errors.password} */}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                    <div id="result"></div>
                </div>



            </div>
        </div>
        </Layout>
    )
}

export default Login