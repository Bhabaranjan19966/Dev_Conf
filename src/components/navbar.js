import React from 'react';
import { Image, Menu,Divider,Dropdown,Icon} from 'semantic-ui-react';
import { Redirect } from 'react-router';

 export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: 0,
      signOut: false,
    };
  }
  handleSignOut = () =>{
    console.log("User Signed Out")
    sessionStorage.clear();
    this.setState({
    signOut: true,
    });
  }

  render() {
    const trigger = (
      <span>
        <Image avatar src={sessionStorage.getItem("userProfileImage")} />
      </span>
    )

    return (
      <div>
      {(this.state.signOut)? <Redirect to="/"/>:
        <Menu inverted>
          <Menu.Item>
            <Image size="mini"
              src="https://cdn2.iconfinder.com/data/icons/world-currencies-gold/512/indian_rupee_sign_currency_gold_symbol-512.png"
              verticalAlign='middle' />
            <span>{(this.props.credits==null)?0:this.props.credits}</span>
          </Menu.Item>
          <Menu.Item position='right' >
          <Dropdown trigger={trigger} pointing='top right' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Header>{sessionStorage.getItem("userName")}</Dropdown.Header>
            <Dropdown.Item onClick={this.handleSignOut}><Icon name='sign out' />Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>
        </Menu>}
        </div>
    );
  }
}

