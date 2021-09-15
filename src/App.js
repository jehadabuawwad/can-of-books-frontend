import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BestBooks from './components/BestBooks';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      user: false,
    };
  }
  loginHandler = (user) => {
    this.setState({
      user: !this.state.user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: !this.state.user,
    });
  };

  formSubmit = () => {
    this.setState({
      submitted: !this.state.submitted,
    });
  };
  render() {
    return (
        <Router>
          <Row style={{ marginTop: 0 }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Header
                loginHandler={this.loginHandler}
                logoutHandler={this.logoutHandler}
                user={this.state.user}
                onLogout={this.logoutHandler}
              />
            </Col>
          </Row>
          <Switch>
            <Route exact path='/'>
              <Row>
                <Col style={{ marginTop: 10 }} md={{ span: 4, offset: 3 }}>
                  {<BestBooks />}
                </Col>
                <Col
                  style={{ marginTop: 20,marginBottom:20 }}
                  xs={{ span: 10,order: 'last', offset: 1 }}
                  md={{ span: 2, offset: 0 }}
                  sm={3}
                >
                  <LoginForm
                    loginHandler={this.loginHandler}
                    formSubmit={this.formSubmit}
                    submitted={this.state.submitted}
                    user={this.state.user}
                  />
                </Col>
              </Row>
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Row>
            <Col   md={{ span: 6, offset: 3 }}>
              <Footer />
            </Col>
          </Row>
        </Router>
    );
  }
}

export default App;
