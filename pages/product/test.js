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
    spacing={3} //spacing between items
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

    {/* /////////////////////// */}
    {/* //// Display data ///// */}
    {/* /////////////////////// */}
    <div className={classes.hangHoa}>
      {data.props.map(
        (
          product //take data from props array in data.js
        ) => (
          <Grid className={classes.hangHoa} item md={2} key={product.name}>
            {/* used Card component from Material UI */}
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
        )
      )}
    </div>
  </Grid>
</Grid>;

<Tabs>
  {/* zIndex (in class stickyTab) indicates stack order of elements */}
  <div className={classes.stickyTab}>
    {/* Mini icon - use padding to format positions */}
    <Grid className={classes.gridWidth} style={{ backgroundColor: '#FFFFFF' }}>
      <div className={classes.outerTab}>
        <div className={classes.innerTab}>
          <div>Gợi Ý Hôm Nay</div>
        </div>
      </div>
    </Grid>
    {/* Tab list */}
    <Grid style={{ backgroundColor: '#F6F5FA' }}>
      <div className={classes.outerTab2}>
        <div className={classes.innerTab2}>
          <div>
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
          </div>
        </div>
      </div>
    </Grid>
  </div>

  {/* Tab 1 content, repeat for other tabs */}
  <TabPanel>
    <div>
      <Grid
        className={classes.gridBorder}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* listing products */}
        <div className={classes.mainTitle}>
          <div className={classes.mainTitle2}>
            <Grid container spacing={3}>
              {/* take data from "products" array in data.js */}
              {data.products.map((product) => (
                <Grid item md={2} key={product.name}>
                  <Card style={{ border: 'none', boxShadow: 'none' }}>
                    {/* open a new page */}
                    <NextLink href={`/product/${product.slug}`} passHref>
                      {/* content */}

                      <CardActionArea>
                        {/* image and title of product */}
                        <CardMedia
                          component="img"
                          image={product.image}
                          title={product.name}
                        ></CardMedia>

                        {/* IMPORTANT, display product's names in 2 line and dots (AKA lineclamp) */}
                        {/* overflow: 'hidden', the overflow is clipped, and the rest of the content is hidden
                                    textOverflow: 'ellipsis', Render an ellipsis ("...") to represent the clipped text
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2, Number of word lines 
                                */}
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
                            {/* products sold */}
                            {/* Star rating */}
                            {product.starRating} | đã bán {product.sold}
                          </Typography>
                        </div>

                        {/* Product price*/}
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

  {/* ***************** */}
  {/* FROM THEN ON, this is the content of other tabs, identical to the previous tab */}
  {/* ***************** */}

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
                            {product.starRating} | đã bán {product.sold}
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
                            {product.starRating} | đã bán {product.sold}
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
                            {product.starRating} | đã bán {product.sold}
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
                            {product.starRating} | đã bán {product.sold}
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
                            {product.starRating} | đã bán {product.sold}
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
                            {product.starRating} | đã bán {product.sold}
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
</Tabs>;
