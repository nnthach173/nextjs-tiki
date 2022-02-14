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
} from '@material-ui/core';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import useStyles from '../utils/styles';
import data from '../utils/data';

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        backgroundColor: '#F6F5FA',
      }}
    >
      <Layout>
        <Grid
          style={{
            backgroundColor: 'white',
          }}
        >
          <div className={classes.carousel}>
            <Carousel
              width={820}
              infiniteLoop={true}
              showStatus={false}
              autoPlay={true}
            >
              <div>
                <Image src="/1.png" alt="1" width={824} height={271} />
              </div>
              <div>
                <Image src="/2.png" alt="2" width={824} height={271} />
              </div>
              <div>
                <Image src="/3.png" alt="3" width={824} height={271} />
              </div>
              <div>
                <Image src="/4.png" alt="4" width={824} height={271} />
              </div>
              <div>
                <Image src="/5.png" alt="5" width={824} height={271} />
              </div>
              <div>
                <Image src="/6.png" alt="6" width={824} height={271} />
              </div>
              <div>
                <Image src="/7.png" alt="7" width={824} height={271} />
              </div>
              <div>
                <Image src="/8.png" alt="8" width={824} height={271} />
              </div>
              <div>
                <Image src="/9.png" alt="9" width={824} height={271} />
              </div>
              <div>
                <Image src="/10.png" alt="10" width={824} height={271} />
              </div>
              <div>
                <Image src="/11.png" alt="11" width={824} height={271} />
              </div>
              <div>
                <Image src="/12.png" alt="12" width={824} height={271} />
              </div>
              <div>
                <Image src="/13.png" alt="13" width={824} height={271} />
              </div>
              <div>
                <Image src="/14.png" alt="14" width={824} height={271} />
              </div>
              <div>
                <Image src="/15.png" alt="15" width={824} height={271} />
              </div>
            </Carousel>
          </div>
          <div className={classes.carouselHeader}>
            <Image src="/header.png" alt="header" width={410} height={271} />
          </div>

          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={2} key={product.name}>
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
        <Grid style={{ backgroundColor: '#FFFFFF' }}>
          <div className={classes.outerIcon}>
            <div className={classes.innerIcon}>
              <div>
                <Button>
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
                <Button>
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
                <a style={{ color: '#FFFFFF' }}>a</a>
              </span>
            </div>

            <div className={classes.innerIcon}>
              <div>
                <Button>
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
                <a style={{ color: '#FFFFFF' }}>a</a> <br />
              </span>
            </div>

            <div className={classes.innerIcon}>
              <div>
                <Button>
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
                <Button>
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
                <Button>
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
                <a style={{ color: '#FFFFFF' }}>a</a>
              </span>
            </div>
            <div className={classes.innerIcon}>
              <div>
                <Button>
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
                <Button>
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
                <Button>
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
      </Layout>
    </Grid>
  );
}
