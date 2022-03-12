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
    boxShadow: 'none',
  },
  logoPosition: {
    position: 'relative',
    paddingLeft: 320,
  },
  logo: {
    position: 'relative',
    width: 55,
    height: 40,
  },

  logo2: {
    position: 'relative',
    width: 80,
    height: 12,
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    marginBottom: 20,
  },

  carousel: {
    position: 'relative',
    display: 'inline-block',
    paddingTop: 20,
  },
  carouselHeader: {
    position: 'relative',
    display: 'inline-block',
  },
  carouselHeaderPosition: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 10,
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
    color: '#FFFFFF',
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

    color: '#FFFFFF',
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
    marginTop: 10,
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
    border: '1px solid #FFFFFF',
    display: 'flex',
    backgroundColor: '#FFFFFF',
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
    marginRight: 5,
    textAlign: 'center',
  },
  dummyButton: {
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
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
    padding: 0,
  },
  footer: {
    color: 'black',
    marginTop: 16,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'normal',
    backgroundColor: '#FFFFFF',
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
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
  miniLink2: {
    color: '#0b74e5',

    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  gridBorder: {
    borderRadius: 5,
  },
  gridWidth: {
    width: 'auto',
    marginRight: 5,
  },
  buttonEffect: {
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  tabButton: {
    display: 'inline-block',
    textAlign: 'center',
    marginRight: 5,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    width: 151,
    height: 84,
    cursor: 'pointer',
  },
  productOuterGrid: {
    display: 'flex',
    marginBottom: '5px',
    borderRadius: 4,
  },
  productImageGrid: {
    position: 'relative',
    paddingTop: '16px',
    paddingRight: '0px',
    paddingLeft: '16px',
    paddingBottom: '16px',
  },
  productSharing: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',
    WebkitBoxAlign: 'center',
  },
  productImageSharingLeft: {
    marginLeft: '8px',
    marginRight: '8px',
    width: '28px',
    height: '28px',
    cursor: 'pointer',
  },
  productImageSharing: {
    width: '28px',
    height: '28px',
    marginRight: '8px',
    cursor: 'pointer',
  },
  productImageSharingLast: {
    width: '28px',
    height: '28px',
    cursor: 'pointer',
  },
  like: {
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  productSeparator: {
    width: '1px',
    backgroundColor: '#EBEBF0',
    height: '20px',
    marginLeft: '16px',
    marginRight: '16px',
  },
  productSeparator2: {
    marginTop: '0px',
    marginRight: '12px',
    marginBottom: '0px',
    marginLeft: '12px',
    width: '1px',
    backgroundColor: '#EBEBF0',
    flexShrink: 0,
  },
  productImage: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  productDetailGrid: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
  },
  productHeader: {
    paddingTop: '16px',
    paddingRight: '28px',
    paddingBottom: '16px',
    paddingLeft: '0px',
    position: 'relative',
  },
  productBrand: {
    display: 'flex',
    marginTop: '8px',
  },
  productBrandDetail: {
    display: 'flex',
    WebkitBoxAlign: 'baseline',
    alignItems: 'baseline',
    color: '#242424',
  },
  productNameDetail: {
    marginTop: '0px',
    marginRight: '0px',
    marginBottom: '4px',
    marginLeft: '0px',
    color: '#242424',
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: '32px',
  },
  belowTitle: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    marginTop: '4px',
  },
  belowTitleDetail: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
  },
  reviewsNumDetail: {
    display: 'block',
    cursor: 'pointer',
    marginLeft: '8px',
    color: '#787878',
    fontSize: '15px',
    lineHeight: '24px',
  },
  productSeparator3: {
    width: '1px',
    height: '12px',
    backgroundColor: '#EBEBF0',
    marginLeft: '8px',
    marginRight: '8px',
  },
  soldNumbersDetail: {
    fontSize: '15px',
    lineHeight: '24px',
    color: '#787878',
  },
  productBodyGrid: {
    display: 'flex',
    paddingTop: '0px',
    paddingRight: '24px',
    paddingBottom: '0px',
    paddingLeft: '0px',
  },
  productBodyGridLeft: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    paddingRight: '12px',
  },
  priceAndIcons: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    backgroundColor: '#fafafa',
    paddingTop: '0px',
    paddingRight: '16px',
    paddingBottom: '12px',
    paddingLeft: '16px',
  },
  productPrice: {
    fontSize: '32px',
    lineHeight: '40px',
    marginRight: '8px',
    fontWeight: 500,
    color: '#ff424e',
  },
  belowPrice: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '12px',
    cursor: 'pointer',
  },
  reHonHoanTien: {
    position: 'relative',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },
  iconsDetail: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px 0px',
  },
  viewMore: {
    marginLeft: '4px',
    position: 'relative',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },
  viewMore2: {
    marginLeft: '4px',

    lineHeight: '24px',
  },
  productBodyGridRight: {
    width: '240px',
    paddingBottom: '20px',
  },
  productBodyGridRightDetail: {
    borderRadius: '4px',
    boxShadow: '#f2f2f2 1px 1px 0px 0px inset, #f2f2f2 -1px -1px 0px 0px inset',
  },
  productSeparatorMini: {
    content: '',
    height: '1px',
    backgroundColor: '#EBEBF0',
    width: '479px',
    marginTop: '10px',
  },
  addressGrid: {
    backgroundColor: '#FFFFFF',
    margin: '16px 0px 0px',
    borderTop: '1px solid #f2f2f2',
  },
  mainChangeAddress: {
    display: 'flex',
    padding: '12px 0px',
    WebkitBoxPack: 'justify',

    cursor: 'pointer',
  },
  changeAddress: {
    color: '#0b74e5',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    flexShrink: 0,
  },
  shippingInfoGrid: {
    marginBottom: '16px',
  },
  shippingInfoGridInner: {
    display: 'flex',
  },
  shippingInfoItem: {
    border: '1px solid #eeeeee',
    borderRadius: '12px',
    padding: '8px 12px',
    position: 'relative',
    marginRight: '12px',
    zIndex: 1,
    fontSize: '13px',
    lineHeight: '20px',
    color: '#787878',
    flex: '1 1 0%',
  },
  shippingInfoHeader: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    height: '20px',
    fontSize: '14px',
  },
  divider: {
    content: '',
    width: '1px',
    height: '8px',
    margin: '0px 4px',
    backgroundColor: '#ebebf0',
  },
  date1: {
    color: '#00ab56',
    fontWeight: 500,
  },
  shippingPrice: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#38383d',
  },
  buyGrid: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: '16px 0px 0px',
    padding: '16px 0px',
    borderTop: '1px solid #f2f2f2',
  },
  groupButton: {
    marginTop: '16px',
    flex: '1 1 0%',
    display: 'flex',
  },
  productBuyButton: {
    color: '#ffffff',
    backgroundColor: '#ff3945',
    cursor: 'pointer',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    minWidth: '190px',
    width: '100%',
    maxWidth: '300px',
    height: '48px',
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 500,
    textTransform: 'capitalize',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
  },
  sellerInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 12px',
  },
  shopOverview: {
    display: 'flex',
    alignItems: 'flexStart',
  },
  shopIcon: {
    width: '44px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  shopName: {
    margin: '0px 0px 0px 12px',
  },
  sellerName: {
    margin: '0px 0px 2px',
    fontSize: '15px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.6,
    letterSpacing: 'normal',
    color: '#242424',
  },
  sellerNameDetail: {
    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: 1,
    overflow: 'hidden',
  },
  officialIcon: {
    width: '74px',
    height: '18px',
  },
  sellerDetail: {
    display: 'flex',
    minHeight: '39px',
  },
  itemReview: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
    webkitBoxAlign: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
  },
  shopRating: {
    fontSize: '15px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.6,
    letterSpacing: 'normal',
  },
  subTitle: {
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.45,
    letterSpacing: 'normal',
    color: '#787878',
  },
  borderLeft: {
    alignSelf: 'center',
    width: '1px',
    height: '16px',
    backgroundColor: '#f2f2f2',
  },
  itemNormal: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
    webkitBoxAlign: 'center',
    alignItems: 'center',
  },
  qtyAndMessage: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  label: {
    fontSize: '15px',
    lineHeight: 1.6,
    margin: '0px 0px 10px',
  },
  groupInput: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    marginTop: '8px',
  },
  groupInputFirstButton: {
    borderRight: 'none',
    borderRadius: '4px 0px 0px 4px',
    padding: '4px',
    cursor: 'pointer',
    width: '30px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #ececec',
  },
  input: {
    width: '40px',
    border: '1px solid #ececec',
    height: '30px',
    color: '#242424',
    fontSize: '14px',
    textAlign: 'center',
    outline: 'none',
  },
  sellerAction: {
    display: 'flex',
    padding: '12px',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  sellerShop: {
    display: 'flex',
    padding: '6px 9px',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    border: '1px solid #0d5cb6',
    cursor: 'pointer',
  },
  shopSpan: {
    fontSize: '13px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.54,
    letterSpacing: 'normal',
    color: '#0d5cb6',
    marginLeft: '4px',
  },
  sellerShop2: {
    padding: '6px 11.3px',
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    border: '1px solid #0d5cb6',
    cursor: 'pointer',
  },
  warrantyDetails: {
    fontSize: '13px',
    lineHeight: '20px',
    padding: '8px 12px',
    borderTop: '1px solid #f2f2f2',
  },
  warrantyItem: {
    padding: '0px',
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemLeft: {
    color: '#787878',
    flexShrink: 0,
    marginRight: '16px',
  },
  customerBenefits: {
    display: 'flex',
    padding: '8px',
    borderTop: '1px solid #f2f2f2',
  },
  benefitItem: {
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 30%',
    webkitBoxFlex: 1,
    webkitBoxAlign: 'center',
    alignItems: 'center',
  },
  benefitItemSpan: {
    textAlign: 'center',
    fontSize: '13px',
    lineHeight: '20px',
    marginTop: '8px',
  },
  container: {
    border: '1px solid #eeeeee',
    display: 'flex',
    borderRadius: '4px',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    marginTop: '16px',
    padding: '8px 12px',
  },
  trackingBrandAd: {
    display: 'flex',
    flexDirection: 'column',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    webkitBoxPack: 'center',
    justifyContent: 'center',
    width: '360px',
    height: '120px',
    overflow: 'hidden',
    margin: '24px auto 0px',
    position: 'relative',
  },
  productSlideWrapper: {
    marginBottom: '25px',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    marginTop: '15px',
  },
  blockTitle: {
    color: '#333333',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '32px',
    padding: '8px 16px',
    textTransform: 'capitalize',
    display: 'flex',
    webkitBoxPack: 'justify',
    justifyContent: 'space-between',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    margin: '0px',
  },
});

export default useStyles;
