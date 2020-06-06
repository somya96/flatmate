import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFirebase } from '../../firebase';

class BoardBase extends Component {

    constructor(props) {
        super(props);
        this.state = {displayName: ''};
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            if (authUser) {
              this.setState({displayName: authUser.displayName})
            }
          },
        );
      }
   
      componentWillUnmount() {
        this.listener();
      }

    render() {
        const { displayName } = this.state;
        return (
            <div>
                <h1>
                    Welcome, {displayName}!
                </h1>
            </div>
        )
    }
}

const Board = compose(
    withFirebase,
)(BoardBase);

export default Board;
