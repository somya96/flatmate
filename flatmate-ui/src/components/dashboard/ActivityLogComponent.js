import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';


export default class ActivityLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: {
                root: {
                    width: '100%',
                }
            }
        }
    }
    render() {
        const activitiesInDOM = this.props.activities.map((activity) => {
            return (
                <ExpansionPanel key={activity.heading}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >{activity.heading}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {activity.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        });
        return (
            <div className={this.state.classes.root}>
                {activitiesInDOM}
            </div>
        );
    }
}
