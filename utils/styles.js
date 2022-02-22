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
  logoPosition: {
    position: 'relative',
    paddingLeft: 320,
  },
  logo: {
    position: 'relative',
    width: 55,
    height: 40,
    // marginBottom: 30,
    // marginLeft: 300,
  },

  logo2: {
    position: 'relative',
    width: 80,
    height: 12,

    // marginTop: 35,
    // marginLeft: 55,
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
    //marginLeft: 30,
    position: 'relative',
    display: 'inline-block',
    paddingLeft: 30,
  },
  menuWordsPosition: {
    position: 'relative',
    paddingLeft: 300,
  },

  main: {
    minHeight: '80vh',
  },

  searchBar: {
    //marginLeft: 150,
    position: 'relative',
    display: 'inline-block',
  },

  searchIcon: {
    width: 5,
    height: 5,
  },
  buttonPosition: {
    position: 'relative',
    display: 'inline-block',
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
  searchBarPosition: {
    position: 'relative',
    paddingLeft: 120,
    paddingTop: 10,
  },

  suggestWords: {
    position: 'relative',
    display: 'inline-block',

    marginLeft: 15,
    fontSize: 11,
    // marginTop: 55,
  },

  suggestWordsFinal: {
    position: 'relative',
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

  carouselPosition: {
    position: 'relative',
    display: 'inline-block',
  },

  carousel: {
    position: 'relative',
    display: 'inline-block',
    paddingTop: 20,
  },
  carouselHeader: {
    position: 'absolute',
    right: 350,
    top: 150,
    // top: 100,
    // right: 335,
    // position: 'relative',
    // display: 'inline-block',

    // paddingLeft: 10,
    // paddingBottom: 10,
    // marginBottom: 10,
  },
  carouselHeaderPosition: {
    position: 'relative',
    display: 'inline-block',

    // position: 'absolute',
    // top: 100,
    // right: 335,
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
    zIndex: 998,
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
    marginTop: 0,
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
  cardActionsProducts: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },
  footer: {
    color: 'black',
    marginTop: 16,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    backgroundColor: 'white',
    display: 'block',
    boxSizing: 'border-box',
  },
  footerPadding: {
    padding: '16px 0px',
    display: 'block',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    boxSizing: 'border-box',
  },
  footerBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '1270px',
    boxSizing: 'border-box',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  cardNames: {
    padding: 0,
  },
  twoLines: {
    whiteSpace: 'wrap',
    width: '400px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    border: '1px solid #FFFFFF',
  },
  block: {
    display: 'block',
    width: '268px',
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    color: '#808089',
  },

  customerSupport: {
    display: 'block',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    color: '#3D3838',
    marginBottom: '12px',
    marginTop: '0px',
  },
  hotline: {
    marginBottom: '8px',
    fontSize: '13px',
    lineHeight: '16px',
    color: '#808089',
    marginTop: '0px',
  },
  smallText: {
    display: 'block',
    marginBottom: '8px',
    color: '#808089',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
  },
  phoneNumbers: {
    color: '#808089',
    fontWeight: '500',
  },
  block2: {
    display: 'block',
    width: '226px',
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    color: '#808089',
  },
  h4: {
    display: 'block',
    marginBlockStart: '1.33em',
    marginBlockEnd: '1.33em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  hangHoa: {
    position: 'relative',
    display: 'inline-block',
    padding: 5,
  },
  customerSupport2: {
    marginTop: '24px',
    display: 'block',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    color: '#3D3838',
    marginBottom: '12px',
  },
  iconChungNhan: {
    width: '226px',
    display: 'flex',
  },
  boCongThuong: {
    marginLeft: '10px',
    display: 'inline-block',
  },
  iconBorder: {
    width: '226px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
    columnGap: '8px',
    rowGap: '8px',
  },
  qrCode: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
  },
  separator: {
    content: '',
    height: '1px',
    backgroundColor: '#EBEBF0',
    width: '1240px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  block3: {
    display: 'block',
    width: '800px',
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    color: '#808089',
  },
  h1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    color: '#3D3838',
    marginBottom: '12px',
    marginTop: '10px',
  },
  block4: {
    display: 'block',
    width: '1240px',
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    color: '#808089',
  },
  h2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    marginBottom: '4px',
    marginTop: '0px',
    color: '#808089',
  },
  miniLink: {
    color: '#0b74e5',
    textDecorationLine: 'none',
    textDecorationThickness: 'initial',
    textDecorationStyle: 'initial',
    textDecorationColor: 'initial',
    cursor: 'pointer',
  },
});

export default useStyles;
