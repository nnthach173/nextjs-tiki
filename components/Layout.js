import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Button,
  Grid,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineStorefront } from 'react-icons/md';

export default function Layout({ title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Tiki` : 'Next Tiki'}</title>
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
            <Typography>
              <Button className={classes.button}>
                <BiSearchAlt size={20} />
                Tìm kiếm
              </Button>
            </Typography>
          </div>
          <div className={classes.suggestWordsFinal}>
            <div className={classes.suggestWords}>trái cây</div>
            <div className={classes.suggestWords}>thịt trứng</div>
            <div className={classes.suggestWords}>rau củ quả</div>
            <div className={classes.suggestWords}>sữa, bơ, phô mai</div>
            <div className={classes.suggestWords}>hải sản</div>
            <div className={classes.suggestWords}>gạo, mì ăn liền</div>
            <div className={classes.suggestWords}>đồ uống, bia rượu</div>
            <div className={classes.suggestWords}>bánh kẹo</div>
          </div>
          <BsPerson size={30} className={classes.personIcon} />
          <div className={classes.loginButton}>
            <Link href="#" underline="none">
              <div style={{ fontSize: '12px', color: 'white' }}>
                Đăng nhập / Đăng ký
              </div>
            </Link>
            <Link href="#" underline="none">
              <div style={{ fontSize: '12px', color: 'white' }}>
                Tài khoản <AiFillCaretDown />
              </div>
            </Link>
          </div>

          <div
            className={classes.shoppingCart}
            style={{ fontSize: '12px', color: 'white' }}
          >
            <FiShoppingCart size={30} />
            <Link href="#" underline="none" color="white">
              Giỏ Hàng
            </Link>
          </div>

          <div>
            <Button className={classes.shoppingButton} variant="contained">
              <MdOutlineStorefront />
              Bán hàng cùng Tiki
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="relative" className={classes.navbar2}>
        <Toolbar className={classes.customizeToolbar2}>
          <div
            className={`${classes.menuWordsPosition} ${classes.menuWordsColor}`}
          >
            Thịt, rau củ
          </div>
          <div className={classes.menuWords}>Bách Hóa</div>
          <div className={classes.menuWords}>Nhà Cửa</div>
          <div className={classes.menuWords}>Điện tử</div>
          <div className={classes.menuWords}>Thiết bị số</div>
          <div className={classes.menuWords}>Điện thoại</div>
          <div className={classes.menuWords}>Mẹ & Bé</div>
          <div className={classes.menuWords}>Gia Dụng</div>
          <div className={classes.menuWords}>Thời trang nữ</div>
          <div className={classes.menuWords}>Thời trang nam</div>
          <div className={classes.menuWords}>Giày nữ</div>
          <div className={classes.menuWords}>Túi nữ</div>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>
      <Grid style={{ backgroundColor: '#FFFFFF' }}>
        <footer className={classes.footer}>
          <div className={classes.footerPadding}>
            <div className={classes.footerBlock}>
              <div className={classes.block}>
                <h4 className={classes.customerSupport}>Hỗ trợ khách hàng</h4>
                <p className={classes.hotline}>
                  <a className={classes.phoneNumbers}>1900-6035</a>
                  <span className={classes.smallText}>
                    (1000 đ/phút, 8-21h kể cả T7, CN)
                  </span>
                </p>
                <a className={classes.smallText}>Các câu hỏi thường gặp</a>
                <a className={classes.smallText}>Gửi yêu cầu hỗ trợ</a>
                <a className={classes.smallText}>Hướng dẫn đặt hàng</a>
                <a className={classes.smallText}>Phương thức vận chuyển</a>
                <a className={classes.smallText}>Chính sách đổi trả</a>
                <a className={classes.smallText}>Hướng dẫn trả góp</a>
                <a className={classes.smallText}>Chính sách hàng nhập khẩu</a>
                <a className={classes.smallText}>
                  Hỗ trợ khách hàng: hotro@tiki.vn
                </a>
                <a className={classes.smallText}>
                  Báo lỗi bảo mật: security@tiki.vn
                </a>
              </div>
              <div className={classes.block2}>
                <h4 className={classes.customerSupport}>Về Tiki</h4>
                <a className={classes.smallText}>Giới thiệu Tiki</a>
              </div>
            </div>
          </div>
        </footer>
      </Grid>
    </div>
  );
}
