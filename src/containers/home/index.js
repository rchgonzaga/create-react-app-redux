import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Breadcrumb, Dropdown } from 'semantic-ui-react'
import MainComponent from '../../components/MainComponent'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'


class Home extends MainComponent {
  
  constructor(props){
    super(props)

    this.state = props
  }

  render() {

    const options = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ]

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

        <br/>
        
        <Dropdown placeholder='Skills' fluid multiple selection options={options} />

        <br/>

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
