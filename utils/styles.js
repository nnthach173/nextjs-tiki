import { makeStyles } from '@material-ui/core';
import Column from 'antd/lib/table/Column';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BiCommentError, BiLock, BiVerticalCenter } from 'react-icons/bi';
import LinesEllipsis from 'react-lines-ellipsis';

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
    textAlign: 'center',
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
      boxShadow: 'none',
    },
    boxShadow: 'none',
    border: 'none',
  },

  carousel: {
    position: 'relative',
    top: 30,
  },
  carouselHeader: {
    position: 'absolute',
    top: 165,
    right: 335,
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  priceTag: {
    backgroundColor: '#FF5A32',
    position: 'absolute',
    top: 50,
    left: 10,
  },
  soldButton: {
    positon: 'relative',
    textTransform: 'none',
    size: 'small',
    color: 'white',
    fontSize: 13,
    bottom: 5,
    borderRadius: 50,
    backgroundColor: 'red',
    width: 140,
    height: 20,
    '&:hover': {
      backgroundColor: '#FF6863',
      boxShadow: 'none',
    },
    boxShadow: 'none',
    border: 'none',
  },
  quantitySelect: {
    position: 'absolute',
    top: 150,
  },
  buyButton: {
    positon: 'absolute',
    top: 230,
    right: 350,
    textTransform: 'none',

    color: 'white',
    fontSize: 20,
    borderRadius: 3,
    backgroundColor: 'red',
    width: 350,
    height: 50,
    '&:hover': {
      backgroundColor: '#FF6863',
      boxShadow: 'none',
    },
    boxShadow: 'none',
    border: 'none',
  },
  bannerMini1: {
    position: 'relative',
    marginTop: 30,
    marginBottom: 20,
  },
  bannerMini2: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 8,
  },
  span: {
    fontSize: '13px',
  },
  innerIcon: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 65,
    marginTop: 10,

    textAlign: 'center',
  },
  outerIcon: {
    position: 'relative',
  },
  bannerMini3: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 20,
  },
  bannerMini4: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  mainTitle: {
    display: 'flex',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  mainTitle2: {
    display: 'flex',
    fontSize: '20px',
  },
  mainTitleText: {
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  mainTitleText2: {
    marginTop: 'auto',
    marginRight: 0,
    marginBottom: 'auto',
    marginLeft: 'auto',
    lineHeight: '24px',
    fontSize: '15px',
    color: '#0B74E5',
    border: 'none',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      cursor: 'pointer',
    },
  },
  bannerMini5: {
    position: 'relative',
    marginTop: 5,
    marginBottom: 20,
  },
  bannerMini6: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 10,

    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  brandCardItemTitle: {
    display: 'inline-block',
    textAlign: 'center',
    position: 'absolute',
    color: '#0B74E5',
    bottom: 2,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
  },
  bannerMini7: {
    position: 'relative',
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 20,
  },
  bannerMini8: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },

  outerIcon2: {
    position: 'relative',
    marginBottom: 10,
  },
  innerIcon2: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 40,

    marginTop: 2,
    textAlign: 'center',
  },
  brandCardItemTitle2: {
    position: 'relative',
    fontSize: '13px',
    color: '#000000',
  },
  innerIcon3: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  cataBanner: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
  },
  cataBanner2: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 11,
    marginRight: 5,
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  stickyTab: {
    position: 'sticky',
    top: '0',
    width: '100%',
  },
  outerTab: {
    display: 'flex',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  innerTab: {
    fontSize: '20px',
    display: 'flex',
  },
  outerTab2: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
  },
  innerTab2: {
    position: 'relative',
    marginLeft: 0,
    marginRight: 10,
    marginBottom: 10,
  },
  insideTabsCurrent: {
    border: '1px solid blue',
  },
  insideTabs: {
    border: '1px solid white',
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexShrink: 0,
    minHeight: '78px',
    cursor: 'pointer',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '8px',
    paddingLeft: '8px',
  },

  widgetTabs: {
    display: 'flex',
    flexDirection: 'column',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  tabText: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 5,
    textAlign: 'center',
  },
  dummyButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    border: 'none',
    width: 151,
    height: 84,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F6F5FA',
    },
  },
  imageTags: {
    display: 'block',
  },
});

export default useStyles;
