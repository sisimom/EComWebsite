import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
// import { login } from '../actions/userActions'
import { useLoginMutation } from '../slices/usersApiSlice'
import {setCredentials} from '../slices/authSlice'
// import { disable } from 'colors'
// import {toast} from 'react-toastify'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth)
  console.log('userInfo',userInfo)
  const {search} = useLocation();
  const sp = new URLSearchParams(search);

  // const { loading, error, userInfo } = userLogin

  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      // history.push(redirect)
      console.log('navigating')
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = async(e) => {
    e.preventDefault()
    console.log('submit')
    try{
      const res=await login({email,password}).unwrap();
      dispatch(setCredentials({...res,}));
      navigate(redirect);
    } catch(error){
      alert('Login error' )
    }
    // dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
        {isLoading && <Loader/>}
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen