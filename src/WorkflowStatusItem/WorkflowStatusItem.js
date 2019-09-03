import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import useStyles from './styles';

/**
 * Individual item for workflow
 */
const WorkflowStatusItem = props => {
  const { title, active, status, caption } = props;
  const classes = useStyles();
  const className = classNames({
    [classes.active]: active,
    [classes.inactive]: !active,
    [classes.declinedStatus]: status === 'declined',
    [classes.draftStatus]: status === 'draft',
    [classes.pendingStatus]: status === 'pending',
    [classes.acceptedStatus]: status === 'accepted',
  });

  return (
    <React.Fragment>
      <Card className={`${classes.activeCard} ${className}`}>
        <CardContent className={classes.content}>
          <Typography className={className} variant="overline">
            {title}
          </Typography>
        </CardContent>
        <CardContent className={`${classes.content} ${classes.caption}`}>
          <Typography variant="caption">{caption}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

WorkflowStatusItem.propTypes = {
  /**
   * Item label
   */
  title: PropTypes.string.isRequired,
  /**
   * Item caption
   */
  caption: PropTypes.string,
  /**
   * Apply underscore
   */
  active: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['declined', 'draft', 'pending', 'accepted']).isRequired,
};

WorkflowStatusItem.defaultProps = {
  caption: null,
};

export default WorkflowStatusItem;
