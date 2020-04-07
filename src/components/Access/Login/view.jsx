import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormControl
} from "react-bootstrap";
class Login extends Component {
  render() {
    return (
      <div className="gray-bg">
        <div className="loginColumns animated fadeInDown">
          <Row>
            <Col className="md-6">
              <h2 className="font-bold">Welcome to IN+</h2>

              <p>
                Perfectly designed and precisely prepared admin theme with over
                50 pages with extra new web app views.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>

              <p>
                <small>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </small>
              </p>
            </Col>
            <Col className="md-6">
              <div className="ibox-content">
                <Form className="m-t" role="form" action="index.html">
                  <FormGroup>
                    <FormControl
                      type="email"
                      placeholder="Username"
                      required=""
                    />{" "}
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      required=""
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    className="btn btn-primary block full-width m-b"
                  >
                    Login
                  </Button>

                  <div>
                    <small>Forgot password?</small>
                  </div>
                  <p className="text-muted text-center">
                    <small>Do not have an account?</small>
                  </p>
                  <div className="btn btn-sm btn-white btn-block">
                    Create an account
                  </div>
                </Form>

                <p className="m-t">
                  <small>
                    Inspinia we app framework base on Bootstrap 3 &copy; 2014
                  </small>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="md-6">Copyright Example Company</Col>
            <Col className="md-6 text-right">
              <small>© 2014-2015</small>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Login;
