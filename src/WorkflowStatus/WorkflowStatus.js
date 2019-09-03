import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import WorkflowStatusItem from '../WorkflowStatusItem';
import useStyles from './styles';

/**
 * Displays the current state of an editorial workflow
 *
 * @example ./__docs__/WorkflowStatus.md
 */
const WorkflowStatus = ({ status }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.grow}>
      <Grid container justify="space-evenly" wrap="nowrap">
        <WorkflowStatusItem
          title="Declined"
          active={status === 'declined'}
          status="declined"
          caption="Proposal has been rejected by the parties."
        />
        <ArrowLeftIcon className={classes.arrow} />
        <WorkflowStatusItem
          title="Draft"
          active={status === 'draft'}
          status="draft"
          caption="Proposal is in writing stage, not yet submitted for an approval."
        />
        <ArrowRightIcon className={classes.arrow} />
        <WorkflowStatusItem
          title="Pending"
          active={status === 'pending'}
          status="pending"
          caption="Proposal is being vetted by the parties."
        />
        <ArrowRightIcon className={classes.arrow} />
        <WorkflowStatusItem
          title="Accepted"
          active={status === 'accepted'}
          status="accepted"
          caption="Proposal has been accepted and become an agreement."
        />
      </Grid>
    </Grid>
  );
};

WorkflowStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default WorkflowStatus;
