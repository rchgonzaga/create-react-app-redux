import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Permissions from '../permissions'
import { Input, Menu, Segment } from 'semantic-ui-react'

class App extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name })
  }

  render(){

    const { activeItem } = this.state
    return (

      <div>

        <Menu pointing>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/about-us' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/permissions' name='permissions' active={activeItem === 'permissions'} onClick={this.handleItemClick} />
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>

        </Menu>

        <Segment>
          {this.state.name}
        </Segment>

        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/permissions">Permissions</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/permissions" component={Permissions} />
        </main>
      </div>
    )
  }
}

export default App
