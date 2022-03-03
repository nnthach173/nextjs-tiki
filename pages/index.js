import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Link,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import useStyles from '../utils/styles';
import data from '../utils/data';
import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        backgroundColor: '#F6F5FA',
      }}
    >
      <Layout title="Tiki - Mua hàng online giá tốt, hàng chuẩn, ship nhanh">
        <Grid
          style={{
            backgroundColor: '#F6F5FA',
          }}
        >
          <div className={classes.carouselPosition}>
            <div className={classes.carousel}>
              <Carousel
                width={810}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                showThumbs={false}
              >
                <div>
                  <Image src="/1.png" alt="1" width={824} height={274} />
                </div>
                <div>
                  <Image src="/2.png" alt="2" width={824} height={274} />
                </div>
                <div>
                  <Image src="/3.png" alt="3" width={824} height={274} />
                </div>
                <div>
                  <Image src="/4.png" alt="4" width={824} height={274} />
                </div>
                <div>
                  <Image src="/5.png" alt="5" width={824} height={274} />
                </div>
                <div>
                  <Image src="/6.png" alt="6" width={824} height={274} />
                </div>
                <div>
                  <Image src="/7.png" alt="7" width={824} height={274} />
                </div>
                <div>
                  <Image src="/8.png" alt="8" width={824} height={274} />
                </div>
                <div>
                  <Image src="/9.png" alt="9" width={824} height={274} />
                </div>
                <div>
                  <Image src="/10.png" alt="10" width={824} height={274} />
                </div>
                <div>
                  <Image src="/11.png" alt="11" width={824} height={274} />
                </div>
                <div>
                  <Image src="/12.png" alt="12" width={824} height={274} />
                </div>
                <div>
                  <Image src="/13.png" alt="13" width={824} height={274} />
                </div>
                <div>
                  <Image src="/14.png" alt="14" width={824} height={274} />
                </div>
                <div>
                  <Image src="/15.png" alt="15" width={824} height={274} />
                </div>
              </Carousel>
            </div>
          </div>

          <div className={classes.carouselHeaderPosition}>
            <div className={classes.carouselHeader}>
              <Image src="/header.png" alt="header" width={400} height={274} />
            </div>
          </div>
        </Grid>

        <Grid
          style={{
            backgroundColor: '#FFFFFF',
          }}
        >
          <Grid
            className={classes.gridBorder}
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: '10px',
            }}
            container
            spacing={3}
          >
            <Grid>
              <div className={classes.mainTitle}>
                <div className={classes.mainTitle2}>
                  <div className={classes.flashIcon}>
                    <Image
                      className={classes.flashIcon}
                      src="/giasoc.svg"
                      alt=""
                      width={89}
                      height={28}
                    />
                  </div>
                  <div className={classes.flashIcon}>
                    <Image
                      className={classes.flashIcon}
                      src="/dealFlashIcon.svg"
                      alt=""
                      width={24}
                      height={28}
                    />
                  </div>
                  <div className={classes.flashIcon}>
                    <Image
                      className={classes.flashIcon}
                      src="/homnay.svg"
                      alt=""
                      width={113}
                      height={28}
                    />
                  </div>
                </div>
              </div>
            </Grid>
            <div className={classes.hangHoa}>
              {data.props.map((product) => (
                <Grid
                  className={classes.hangHoa}
                  item
                  md={2}
                  key={product.name}
                >
                  <Card>
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                        ></CardMedia>
                      </CardActionArea>
                    </NextLink>

                    <CardActions>
                      <Typography
                        style={{
                          fontWeight: 'bold',
                          color: 'red',
                          margin: '0px auto',
                        }}
                      >
                        {product.price}đ
                      </Typography>
                    </CardActions>

                    <Box textAlign="center">
                      <Button className={classes.soldButton}>
                        Đã bán {product.sold}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid
          style={{
            backgroundColor: '#F6F5FA',
          }}
        >
          <div className={classes.bannerMini1}>
            <div className={classes.bannerMini2}>
              <Image
                src="/bannerMini1.png"
                alt="bannerMini1"
                width={204}
                height={164}
              />
            </div>
            <div className={classes.bannerMini2}>
              <Image
                src="/bannerMini2.png"
                alt="bannerMini2"
                width={800}
                height={164}
              />
            </div>
            <div className={classes.bannerMini2}>
              <Image
                src="/bannerMini3.png"
                alt="bannerMini2"
                width={204}
                height={164}
              />
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.gridBorder}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className={classes.outerIcon}>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button1.png"
                    alt="santhuong"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Săn thưởng <br /> mỗi ngày
              </span>
            </div>

            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button2.png"
                    alt="dicho"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Đi chợ
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>

            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button3.png"
                    alt="magiamgia"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Mã giảm giá
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a> <br />
              </span>
            </div>

            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button4.png"
                    alt="baohiemtiki360"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Bảo hiểm <br /> Tiki 360
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button5.png"
                    alt="dichvu&tienich"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Dịch vụ & <br />
                Tiện ích
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button6.png"
                    alt="goihoivien"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Gói hội viên
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button7.png"
                    alt="giamden50%"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Giảm đến
                <br /> 50%
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button8.png"
                    alt="hoantien15%"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Hoàn tiền
                <br /> 15%
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/button9.png"
                    alt="uudaithanhtoan"
                    width={48}
                    height={52}
                  />
                </Button>
              </div>
              <span className={classes.span}>
                Ưu đãi
                <br /> thanh toán
              </span>
            </div>
          </div>
        </Grid>
        <Grid
          style={{
            backgroundColor: '#F6F5FA',
          }}
        >
          <div className={classes.bannerMini3}>
            <div className={classes.bannerMini4}>
              <Image
                src="/miniBannerA.png"
                alt="bannerMiniA"
                width={295}
                height={150}
              />
            </div>
            <div className={classes.bannerMini4}>
              <Image
                src="/miniBannerB.png"
                alt="bannerMiniB"
                width={295}
                height={150}
              />
            </div>
            <div className={classes.bannerMini4}>
              <Image
                src="/miniBannerC.png"
                alt="bannerMiniC"
                width={295}
                height={150}
              />
            </div>
            <div className={classes.bannerMini4}>
              <Image
                src="/miniBannerD.png"
                alt="bannerMiniD"
                width={295}
                height={150}
              />
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.gridBorder}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className={classes.mainTitle}>
            <div className={classes.mainTitle2}>
              <Image
                src="/checkmark.png"
                alt="checkmark"
                width={26}
                height={26}
              />
              <div className={classes.mainTitleText}>
                Thương Hiệu Chính Hãng
              </div>
            </div>

            <button className={classes.mainTitleText2}>XEM THÊM</button>
          </div>

          <div className={classes.bannerMini5}>
            <div className={classes.bannerMini6}>
              <Image
                src="/miniBannerE.png"
                alt="bannerMiniA"
                width={600}
                height={205}
              />
            </div>
            <div className={classes.bannerMini6}>
              <Image
                src="/miniBannerF.png"
                alt="bannerMiniB"
                width={600}
                height={205}
              />
            </div>
          </div>

          <div className={classes.bannerMini7}>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner1.png"
                alt="miniBanner1"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Mua 1 Tặng 1</p>
            </div>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner2.png"
                alt="miniBanner2"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Tặng Mẹ Voucher 50K</p>
            </div>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner3.png"
                alt="miniBanner3"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Flash Sale Đến 40%</p>
            </div>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner4.png"
                alt="miniBanner4"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Chỉ Từ 85K</p>
            </div>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner5.png"
                alt="miniBanner5"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Coupon đến 1,1 Triệu</p>
            </div>
            <div className={classes.bannerMini8}>
              <Image
                src="/miniBanner6.png"
                alt="miniBanner6"
                width={190}
                height={284}
              />
              <p className={classes.brandCardItemTitle}>Ưu Đãi Siêu Phẩm</p>
            </div>
          </div>
        </Grid>

        <Grid
          className={classes.gridBorder}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className={classes.mainTitle}>
            <div className={classes.mainTitle2}>
              <div className={classes.mainTitleText}>Danh Mục Nổi Bật</div>
            </div>
          </div>
          <div className={classes.outerIcon2}>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/1.webp"
                    alt="santhuong"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                TIKINGON
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>

            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/2.webp"
                    alt="tikingon"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Giày thể thao
                <br />
                nam
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/3.webp"
                    alt="balo"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Balo
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/4.webp"
                    alt="taybamgame"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Tay bấm game
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/5.webp"
                    alt="cap"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Các Loại Cáp
                <br />
                Khác
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/6.webp"
                    alt="vga"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Card Màn
                <br />
                Hình VGA
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/7.webp"
                    alt="manhinhphothong"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Màn Hình
                <br />
                Phổ Thông
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/8.webp"
                    alt="manhinhgaming"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Màn Hình
                <br />
                Gaming
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/9.webp"
                    alt="phone"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Điện thoại
                <br />
                Smartphone
              </span>
            </div>
            <div className={classes.innerIcon2}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/10.webp"
                    alt="book"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Sách Tư Duy
                <br />
                Kỹ Năng Sống
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/11.webp"
                    alt="tieuthuyet"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Tiểu thuyết
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>

            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/12.webp"
                    alt="truyenngan"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Truyện ngắn
                <br />
                Tản văn
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/13.webp"
                    alt="manga"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Truyện Tranh
                <br />
                Manga, Comic
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/14.webp"
                    alt="banghe"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Bàn ghế
                <br />
                làm việc
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/15.webp"
                    alt="tu"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Tủ
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/16.webp"
                    alt="bhkinhdoanh"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Bài Học
                <br />
                Kinh Doanh
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/17.webp"
                    alt="duongda"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Kem Và Sữa
                <br />
                Dưỡng Da
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/18.webp"
                    alt="other"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Khác
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/19.webp"
                    alt="phone"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Xe tay ga
                <br />
                <a style={{ color: '#FFFFFF' }}>|</a>
              </span>
            </div>
            <div className={classes.innerIcon3}>
              <div>
                <Button disableRipple={true} className={classes.buttonEffect}>
                  <Image
                    src="/featured-categories/20.webp"
                    alt="book"
                    width={60}
                    height={60}
                  />
                </Button>
              </div>
              <span className={classes.brandCardItemTitle2}>
                Phụ kiện nhà
                <br />
                bếp khác
              </span>
            </div>
          </div>
        </Grid>
        <div className={classes.cataBanner}>
          <div className={classes.cataBanner2}>
            <Image
              src="/featured-categories/miniBanner1.webp"
              alt="bannerMiniB"
              width={394}
              height={150}
            />
          </div>
          <div className={classes.cataBanner2}>
            <Image
              src="/featured-categories/miniBanner2.webp"
              alt="bannerMiniC"
              width={394}
              height={150}
            />
          </div>
          <div className={classes.cataBanner2}>
            <Image
              src="/featured-categories/miniBanner3.webp"
              alt="bannerMiniD"
              width={394}
              height={150}
            />
          </div>
        </div>

        <Tabs>
          <div className={classes.stickyTab}>
            <Grid
              className={classes.gridWidth}
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className={classes.outerTab}>
                <div className={classes.innerTab}>
                  <div>Gợi Ý Hôm Nay</div>
                </div>
              </div>
            </Grid>
            <Grid style={{ backgroundColor: '#F6F5FA' }}>
              <div className={classes.outerTab2}>
                <div className={classes.innerTab2}>
                  <div>
                    <TabList>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage1.webp"
                            alt="buttonimage1"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Dành cho bạn</span>
                      </Tab>

                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage2.webp"
                            alt="buttonimage2"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Deal Siêu Hot</span>
                      </Tab>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage3.webp"
                            alt="buttonimage3"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Rẻ Vô Đối</span>
                      </Tab>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage4.webp"
                            alt="buttonimage4"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Đi Chợ Siêu Sale</span>
                      </Tab>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage5.webp"
                            alt="buttonimage5"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Hàng Mới</span>
                      </Tab>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage6.webp"
                            alt="buttonimage6"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Không giới hạn</span>
                      </Tab>
                      <Tab className={classes.tabButton}>
                        <span className={classes.imageTags}>
                          <Image
                            src="/buttonImage7.webp"
                            alt="buttonimage7"
                            width={48}
                            height={48}
                          />
                        </span>
                        <span>Quà Tết 2022</span>
                      </Tab>
                    </TabList>
                  </div>
                </div>
              </div>
            </Grid>
          </div>

          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products1.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products2.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products3.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products4.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products5.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Grid
                className={classes.gridBorder}
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={classes.mainTitle}>
                  <div className={classes.mainTitle2}>
                    <Grid container spacing={3}>
                      {data.products6.map((product) => (
                        <Grid item md={2} key={product.name}>
                          <Card style={{ border: 'none', boxShadow: 'none' }}>
                            <NextLink
                              href={`/product/${product.slug}`}
                              passHref
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  image={product.image}
                                  title={product.name}
                                ></CardMedia>

                                <Typography className={classes.twoLines}>
                                  {product.name}
                                </Typography>

                                <div style={{ textAlign: 'left ' }}>
                                  <Typography
                                    style={{
                                      fontSize: '12px',
                                      color: 'black',
                                      fontWeight: 400,
                                    }}
                                  >
                                    {product.numReviews} đánh giá | đã bán{' '}
                                    {product.sold}
                                  </Typography>
                                </div>

                                <Typography
                                  style={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                    margin: '0px',
                                  }}
                                >
                                  {product.price}đ
                                </Typography>
                              </CardActionArea>
                            </NextLink>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </div>
          </TabPanel>
        </Tabs>
      </Layout>
    </Grid>
  );
}
