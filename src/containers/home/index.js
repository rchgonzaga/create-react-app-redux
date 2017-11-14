import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Breadcrumb } from 'semantic-ui-react'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'

class Home extends Component {
  
  constructor(props){
    super(props)

    this.state = props
  }

  render() {
    return(
      <div>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button 
            onClick={this.props.increment} 
            disabled={this.props.isIncrementing}>
              Increment
          </button>

          <button 
            onClick={this.props.incrementAsync} 
            disabled={this.props.isIncrementing}>
              Increment Async
          </button>
        </p>

        <p>
          <button 
            onClick={this.props.decrement} 
            disabled={this.props.isDecrementing}>
              Decrement
          </button>

          <button 
            onClick={this.props.decrementAsync} 
            disabled={this.props.isDecrementing}>
              Decrement Async
          </button>
        </p>

        <p>
          <button 
            onClick={() => this.props.changePage()}>
              Go to about page via redux
          </button>
        </p>

        <hr/>


        <Breadcrumb size='tiny'>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
        </Breadcrumb>


        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive>Save</Button>
        </Button.Group>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
