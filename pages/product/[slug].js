import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  AppBar,
  Toolbar,
  TextField,
  Button,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
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
                              Trước 10:00 ngày mai
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
                            <div className={classes.date1}>Thứ 7</div>
                          </div>
                          <div className={classes.shippingPrice}>0đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.buyGrid}>
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
                          {/* <Image
                            className={classes.shopIcon}
                            src={product.shopIcon}
                            alt=""
                            width={44}
                            height={44}
                          /> */}
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
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Layout>
    </Grid>
  );
}
