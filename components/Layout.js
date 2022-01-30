import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';
import Image from 'next/image';

// const useStyles = makeStyles({
//   logo: {
//     width: 55,
//     height: 40,
//     marginBottom: 30,
//   },

//   logo2: {
//     width: 80,npm
//     height: 12,
//     position: 'relative',
//     marginTop: 35,
//     marginLeft: -55,
//   },

//   customizeToolbar: {
//     minHeight: 100,
//   },
// });

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Tiki</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.customizeToolbar}>
          <div className={classes.logo}>
            <Image src="/tiki.png" alt="tiki" width={55} height={40} />
          </div>
          <div className={classes.logo2}>
            <Image src="/freeship.png" alt="freeship" width={80} height={12} />
          </div>
          <div className={classes.searchBar}>
            <input
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
              style={{ height: '35px', width: '600px' }}
            />
          </div>
          <div>
            <button className={classes.button}>Tìm kiếm</button>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="relative" className={classes.navbar2}>
        <Toolbar className={classes.customizeToolbar2}>
          <div className={classes.menuwordsPosition}>Thịt, rau củ</div>
          <div className={classes.menuWords}>Thịt, rau củ</div>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <p>
          Địa chỉ văn phòng: 52 Út Tịch, phường 4, quận Tân Bình, thành phố Hồ
          Chí Minh
        </p>
        <p>
          Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và
          nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý.
        </p>
        <p>
          Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
        </p>
        <p>© 2021 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</p>
      </footer>
    </div>
  );
}
