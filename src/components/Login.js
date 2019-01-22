import React from "react";
import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
// import clientID from "../../config/keys";
import "../css/style.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    // userService.logout();
    this.state = {
      userid: '',
      submitted: false,
      loading: false,
      error: ''
    };
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleChange(e){
    const {name, value} =  e.target;
    this.setState({ [name]: value});
  }
  handleSubmit(e){
    e.preventDefault();

    this.setState({submitted: true});

    const {userid} =  this.state;
    if(!userid){
      return;
    }

    this.setState({loading: true});

    console.log(this.state.userid);

    // userService.login(userid).then(
    //   user => {
    //     const { from } = this.props.location.state || { from : {pathname: "/"}};
    //     this.props.history.push(from);
    //   },
    //   error => this.setState({error, loading:false})6d1ed2b0-51ec-4078-9b98-6f4989d837c2
    // )
  }

  onSignIn(response) {
    console.log(response);
    sessionStorage.setItem("userid", response.profileObj.name);
    sessionStorage.setItem("userProfileImage", response.profileObj.imageUrl);
    this.setState({
      redirect: true
    });
  }

  onFailure(response) {
    console.log("Login Failed");
    this.setState({
      redirect: false
    });
  }

  render() {
    const {userid, submitted, loading, error} =  this.state;
    return (
      <Container>
        <Segment style={{ minHeight: '100vh', padding: '1em 0em' }}>
          <Image
            src="./images/buzzinga.png"
            size="big"
            className="m-b"
            centered
          />
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column verticalAlign='middle' style={{ maxWidth: 450 }}>
              <Segment raised>
                <Header as="h2" textAlign="center">
                  Log-in
                </Header>
                <Form name="loginForm" onSubmit={this.handleSubmit} size="large">
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="User Id"
                      name="userid"
                      value={this.state.userid}
                      onChange={this.handleChange}
                    />
                    <Button  color="black" fluid size="large">
                      Login
                    </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Login;
