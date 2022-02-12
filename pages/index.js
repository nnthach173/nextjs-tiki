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
    <Layout>
      <div className={classes.carousel}>
        <Carousel width={825} infiniteLoop={true} showStatus={false}>
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
    </Layout>
  );
}
