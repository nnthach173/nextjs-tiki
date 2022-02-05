import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import substituteClassApplyAtRules from 'tailwindcss/lib/lib/substituteClassApplyAtRules';
import useStyles from '../utils/styles';

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
    </Layout>
  );
}
