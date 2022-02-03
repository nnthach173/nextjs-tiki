import { makeStyles } from '@material-ui/core';
import { BiCommentError, BiLock } from 'react-icons/bi';
import { contentMatchCache } from 'tailwindcss/lib/jit/lib/sharedState';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#1A94FF',
  },

  navbar2: {
    backgroundColor: '#FFFFFF',
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
  customizeToolbar2: {
    minHeight: 35,
  },

  menuWordsPosition: {
    marginLeft: 320,
  },

  menuWordsColor: {
    color: '#000000',
  },

  menuWords: {
    color: '#000000',
    marginLeft: 30,
  },
  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'left',
  },

  searchBar: {
    marginLeft: 200,
  },

  searchIcon: {
    width: 5,
    height: 5,
  },

  button: {
    backgroundColor: '#0D5CB8',
    height: '35px',
    width: '100px',
    color: 'white',
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#0D5CB8',
    },
  },

  suggestWords: {
    display: 'inline-block',
    position: 'relative',
    marginLeft: 15,
    fontSize: 11,
    marginTop: 55,
  },

  suggestWordsFinal: {
    position: 'absolute',
    top: 20,
    left: 600,
  },

  loginButton: {
    position: 'relative',
    left: 20,
  },
  personIcon: {
    position: 'relative',
    left: 20,
  },
  shoppingCart: {
    position: 'relative',
    left: 70,
  },
  shoppingButton: {
    positon: 'relative',
    top: 30,
    right: 60,
    textTransform: 'none',
    color: 'white',
    fontSize: 10,

    borderRadius: 50,
    backgroundColor: '#49B3FF',
    width: 140,
    height: 20,
    '&:hover': {
      backgroundColor: '#48A8F5',
    },
    boxShadow: 'none',
    border: 'none',
  },
});

export default useStyles;
