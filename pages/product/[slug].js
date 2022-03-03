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
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Grid className={classes.productImageGrid}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={444}
                  height={444}
                ></Image>
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
            </Grid>
            <Grid item md={8} xs={12}>
              <List>
                <ListItem style={{ fontSize: '50px' }}>{product.name}</ListItem>
                <ListItem>
                  Đánh giá: {product.rating} sao (Xem {product.numReviews} đánh
                  giá) | Đã bán {product.sold}
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </Grid>
  );
}
