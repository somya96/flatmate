import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import { withStyles } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { compose } from 'recompose';

const useStyles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
});

class SignInGoogleBase extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                this.setState({ error: null });
                this.props.history.push("/dashboard");
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    render() {
        const { error } = this.state;
        const { classes } = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <div className={classes.button}>
                    <label>Or</label>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<ExitToAppIcon />}
                >
                    Sign In with Google
                </Button>
            </form>
        );
    }
}

const SignInGoogle = compose(
    withRouter,
    withFirebase,
    withStyles(useStyles),
)(SignInGoogleBase);

export default SignInGoogle;