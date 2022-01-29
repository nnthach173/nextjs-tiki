import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#1A94FF',
  },

  logo: {
    width: 55,
    height: 40,
    marginBottom: 30,
    marginLeft: 300,
  },

  logo2: {
    width: 80,
    height: 12,
    position: 'relative',
    marginTop: 35,
    marginLeft: -55,
  },

  customizeToolbar: {
    minHeight: 100,
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'left',
  },
});

export default useStyles;
