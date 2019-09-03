import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  active: {
    fontWeight: 'bold',
    borderBottomWidth: '.1rem',
    borderBottomStyle: 'solid',
  },
  activeCard: {
    borderStyle: 'solid',
    maxWidth: '15rem',
  },
  inactive: {
    borderWidth: 'thin',
    opacity: '.4',
  },
  declinedStatus: {
    borderColor: '#DB3737',
  },
  draftStatus: {
    borderColor: '#FF6F00',
  },
  pendingStatus: {
    borderColor: '#FFE900',
  },
  acceptedStatus: {
    borderColor: '#00D226',
  },
  content: {
    padding: '0.4rem 0.7rem 0rem 0.7rem',
    textAlign: 'center',
  },
  caption: {
    '&:last-child': {
      paddingBottom: '0.7rem',
    },
  },
}));

export default useStyles;
