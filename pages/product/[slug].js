import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Typography } from '@mui/material';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Grid
      style={{
        backgroundColor: '#F6F5FA',
      }}
    >
      <Layout title={product.name}>
        <Grid
          style={{
            backgroundColor: '#FFFFFF',
            marginTop: '15px',
          }}
          className={classes.productOuterGrid}
        >
          <Grid className={classes.productImageGrid}>
            <div className={classes.productImage}>
              <Image
                src={product.image}
                alt={product.name}
                width={444}
                height={444}
              />
            </div>
            <div className={classes.productSharing}>
              <div
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: '#242424',
                }}
              >
                Chia sẻ:
              </div>
              <div className={classes.productImageSharingLeft}>
                <Image
                  src="/pdp-images/social-facebook.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className={classes.productImageSharing}>
                <Image
                  src="/pdp-images/social-messenger.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className={classes.productImageSharing}>
                <Image
                  src="/pdp-images/social-pinterest.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className={classes.productImageSharing}>
                <Image
                  src="/pdp-images/social-twitter.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className={classes.productImageSharingLast}>
                <Image
                  src="/pdp-images/social-copy.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className={classes.productSeparator}></div>
              <div className={classes.like}>
                <div className={classes.productImageSharing}>
                  <Image
                    src="/pdp-images/icons-like.svg"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: '#242424',
                  }}
                >
                  Thích
                </div>
              </div>
            </div>
            <div className={classes.trackingBrandAd}>
              <a style={{ color: '#0b74e5', textDecoration: 'none' }}>
                <Image
                  src="/pdp-images/trackingbrand.webp"
                  alt=""
                  width={360}
                  height={120}
                />
              </a>
            </div>
          </Grid>
          <div className={classes.productSeparator2}></div>
          <Grid className={classes.productDetailGrid}>
            <div className={classes.productHeader}>
              <div className={classes.productBrand}>
                <span className={classes.productBrandDetail}>
                  Thể loại: {product.category}
                </span>
              </div>
              <h1 className={classes.productNameDetail}>{product.name}</h1>
              <div className={classes.belowTitle}>
                <div className={classes.belowTitleDetail}>
                  <a className={classes.reviewsNumDetail}>
                    Xem {product.numReviews} đánh giá
                  </a>
                  <div className={classes.productSeparator3}></div>
                </div>
                <div className={classes.soldNumbersDetail}>
                  Đã bán {product.sold}
                </div>
              </div>
            </div>

            <div className={classes.productBodyGrid}>
              <div className={classes.productBodyGridLeft}>
                <div className={classes.priceAndIcons}>
                  <div className={classes.productPrice}>{product.price} ₫</div>
                  <div className={classes.belowPrice}>
                    <div className={classes.reHonHoanTien}>
                      <Image
                        src="/pdp-images/rehonhoantien.png"
                        alt=""
                        width={130}
                        height={24}
                      />
                      <div className={classes.viewMore}>
                        <Image
                          src="/pdp-images/question.svg"
                          alt=""
                          width={11}
                          height={11}
                        />
                      </div>
                    </div>
                    <div className={classes.reHonHoanTien}>
                      <Image
                        src="/pdp-images/tikicard.png"
                        alt=""
                        width={48}
                        height={24}
                      />

                      <span className={classes.viewMore2}>
                        Hoàn tiền 15%, miễn phí phí thường niên
                      </span>

                      <div className={classes.viewMore}>
                        <Image
                          src="/pdp-images/question.svg"
                          alt=""
                          width={11}
                          height={11}
                        />
                      </div>
                    </div>
                    <div className={classes.reHonHoanTien}>
                      <Image
                        src="/pdp-images/freeship.png"
                        alt=""
                        width={76}
                        height={11}
                      />

                      <span className={classes.viewMore2}>
                        Hoàn tiền 15%, miễn phí phí thường niên
                      </span>

                      <div className={classes.viewMore}>
                        <Image
                          src="/pdp-images/question.svg"
                          alt=""
                          width={11}
                          height={11}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes.addressGrid}>
                  <div className={classes.mainChangeAddress}>
                    <span>Giao đến</span>

                    <span className={classes.changeAddress}>Đổi địa chỉ</span>
                  </div>
                  <div>
                    <div className={classes.shippingInfoGrid}>
                      <div className={classes.shippingInfoGridInner}>
                        <div className={classes.shippingInfoItem}>
                          <div className={classes.shippingInfoHeader}>
                            <div>
                              <Image
                                src="/pdp-images/tikinow.png"
                                alt="alt"
                                width={49}
                                height={14}
                              />
                            </div>
                            <div className={classes.divider}></div>
                            <div className={classes.date1}>
                              Trước 10:00 hôm nay
                            </div>
                          </div>
                          <div className={classes.shippingPrice}>44.000đ</div>
                        </div>
                        <div className={classes.shippingInfoItem}>
                          <div className={classes.shippingInfoHeader}>
                            <div>
                              <Image
                                src="/pdp-images/tikifast.png"
                                alt="alt"
                                width={49}
                                height={14}
                              />
                            </div>
                            <div className={classes.divider}></div>
                            <div className={classes.date1}>
                              Trước 11:00 ngày mai
                            </div>
                          </div>
                          <div className={classes.shippingPrice}>0đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.buyGrid}>
                  {/* <div className={classes.qtyAndMessage}>
                    <div>
                      <p className={classes.label}>Số lượng</p>
                      <div className={classes.groupInput}>
                        <button className={classes.groupInputFirstButton}>
                          <AiOutlineMinus width={20} height={20} />
                        </button>
                        <input
                          className={classes.input}
                          type="text"
                          value="1"
                        />
                      </div>
                    </div>
                  </div> */}{' '}
                  <div className={classes.groupButton}>
                    <button className={classes.productBuyButton}>
                      Chọn Mua
                    </button>
                  </div>
                </div>
              </div>

              <div className={classes.productBodyGridRight}>
                <div className={classes.productBodyGridRightDetail}>
                  <div>
                    <div className={classes.sellerInfo}>
                      <a className={classes.shopOverview}>
                        <div>
                          <img
                            className={classes.shopIcon}
                            src={product.shopIcon}
                            style={{ width: '44px' }}
                          />
                        </div>
                        <div className={classes.shopName}>
                          <span className={classes.sellerName}>
                            <span className={classes.sellerNameDetail}>
                              {product.shop}
                            </span>
                            <div>
                              <Image
                                className={classes.officialIcon}
                                src="/pdp-images/official.webp"
                                alt=""
                                width={74}
                                height={18}
                              />
                            </div>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className={classes.sellerDetail}>
                      <div className={classes.itemReview}>
                        <div className={classes.title}>
                          <span className={classes.shopRating}>
                            {product.shopRating} / 5
                          </span>
                          <AiFillStar
                            style={{ marginLeft: '3px' }}
                            size={14}
                            color="#ffc120"
                          />
                        </div>
                        <div className={classes.subTitle}>
                          {product.shopReviewsNum}+
                        </div>
                      </div>
                      <div className={classes.borderLeft}></div>
                      <div className={classes.itemNormal}>
                        <div className={classes.title}>
                          <span className={classes.shopRating}>
                            {product.shopFollows}
                          </span>
                        </div>
                        <div className={classes.subTitle}>Theo dõi</div>
                      </div>
                    </div>
                    <div className={classes.sellerAction}>
                      <a className={classes.sellerShop}>
                        <Image
                          src="/pdp-images/shopMini.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span className={classes.shopSpan}>Xem Shop</span>
                      </a>
                      <div className={classes.sellerShop2}>
                        <Image
                          src="/pdp-images/plusMini.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <span className={classes.shopSpan}>Theo Dõi</span>
                      </div>
                    </div>
                  </div>

                  <div className={classes.warrantyDetails}>
                    <div className={classes.warrantyItem}>
                      <span className={classes.itemLeft}>
                        Thời gian bảo hành
                      </span>
                      <span>12 tháng</span>
                    </div>
                  </div>
                  <div className={classes.customerBenefits}>
                    <div className={classes.benefitItem}>
                      <Image
                        src="/pdp-images/hoantien.png"
                        alt=""
                        width={32}
                        height={32}
                      />
                      <span className={classes.benefitItemSpan}>
                        Hoàn tiền
                        <br />
                        <b style={{ fontWeight: 500 }}>111%</b>
                        <br />
                        nếu hàng giả
                      </span>
                    </div>
                    <div className={classes.benefitItem}>
                      <Image
                        src="/pdp-images/mohop.png"
                        alt=""
                        width={32}
                        height={32}
                      />
                      <span className={classes.benefitItemSpan}>
                        Mở hộp
                        <br />
                        kiểm tra
                        <br />
                        nhận hàng
                      </span>
                    </div>
                    <div className={classes.benefitItem}>
                      <Image
                        src="/pdp-images/doitra.png"
                        alt=""
                        width={32}
                        height={32}
                      />
                      <span className={classes.benefitItemSpan}>
                        Đổi trả trong
                        <br />
                        <b style={{ fontWeight: 500 }}>7 ngày</b>
                        <br />
                        nếu sp lỗi
                      </span>
                    </div>
                  </div>
                  <div className={classes.container}>
                    <div>
                      <div
                        style={{
                          color: '#242424',
                          fontSize: '15px',
                          fontWeight: 500,
                          lineHeight: '24px',
                        }}
                      >
                        2 nhà bán khác
                      </div>
                      <div
                        style={{
                          color: '#787878',
                          fontSize: '13px',
                          lineHeight: '20px',
                        }}
                      >
                        Giá từ {product.discount}
                      </div>
                    </div>
                    <a
                      style={{
                        fontSize: '13px',
                        lineHeight: '20px',
                        fontWeight: 500,
                        color: '#0d5cb6',
                        border: '1px solid #0d5cb6',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        height: '34px',
                        textAlign: 'center',
                        display: 'block',
                        marginLeft: 'auto',
                        cursor: 'pointer',
                      }}
                    >
                      So sánh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.productSlideWrapper}>
          <h2 className={classes.blockTitle}>Sản Phẩm Tương Tự</h2>
          <Grid container spacing={3}>
            {data.recommend.map((product) => (
              <Grid item md={2} key={product.name}>
                <Card style={{ border: 'none', boxShadow: 'none' }}>
                  <NextLink href={`/product/${product.slug}`} passHref>
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
                          {product.numReviews} đánh giá | đã bán {product.sold}
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
        </Grid>
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
                    <Tab className={classes.tabButton}>
                      <span className={classes.imageTags}>
                        <Image
                          src="/pdp-images/danhchoban.webp"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </span>
                      <span>Dành cho bạn</span>
                    </Tab>

                    <Tab className={classes.tabButton}>
                      <span className={classes.imageTags}>
                        <Image
                          src="/pdp-images/dichosieusale.webp"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </span>
                      <span>Đi Chợ Siêu Sale</span>
                    </Tab>
                    <Tab className={classes.tabButton}>
                      <span className={classes.imageTags}>
                        <Image
                          src="/pdp-images/dealsieuhot.webp"
                          alt="buttonimage3"
                          width={48}
                          height={48}
                        />
                      </span>
                      <span>Deal Siêu Hot</span>
                    </Tab>
                    <Tab className={classes.tabButton}>
                      <span className={classes.imageTags}>
                        <Image
                          src="/pdp-images/trending.webp"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </span>
                      <span>Trending</span>
                    </Tab>
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
        </Tabs>
      </Layout>
    </Grid>
  );
}
