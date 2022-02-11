import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Link, List, ListItem, AppBar, Toolbar } from '@material-ui/core';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Trở về</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={444}
            height={444}
          ></Image>
        </Grid>
        <Grid item md={5} xs={12}>
          <List>
            <ListItem style={{ fontSize: '50px' }}>{product.name}</ListItem>
            <ListItem>
              Đánh giá: {product.rating} sao (Xem {product.numReviews} đánh giá)
              | Đã bán {product.sold}
              <AppBar className={classes.buyButton}>
                <Toolbar>
                  {product.price}
                  <u>đ</u>
                </Toolbar>
              </AppBar>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
