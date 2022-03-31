<AppBar position="static" className={classes.navbar}>
  <Toolbar className={classes.customizeToolbar}>
    <div className={classes.logoPosition}>
      <div className={classes.logo}>
        <Image src="/tiki.png" alt="tiki" width={55} height={40} />
      </div>
      <div className={classes.logo2}>
        <Image src="/freeship.png" alt="freeship" width={80} height={12} />
      </div>
    </div>

    <div className={classes.searchBarPosition}>
      <div className={classes.searchBar}>
        {/* place holder = words that appear inside the search bar */}
        <input
          placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
          style={{ height: '35px', width: '600px' }}
        />
      </div>

      <div className={classes.buttonPosition}>
        <Typography>
          {/* Icon imported from: https://react-icons.github.io/react-icons/ */}
          <Button className={classes.button}>
            {/* size: icon size (in px) */}
            <BiSearchAlt size={20} />
            Tìm kiếm
          </Button>
        </Typography>
      </div>

      {/* suggest tag */}
      {/* outer div (suggestWordsFinal) has relative position */}
      <div className={classes.suggestWordsFinal}>
        {/* inner divs (suggestWords) has display: inline-block. To make them appear in a single line */}
        <div className={classes.suggestWords}>trái cây</div>
        <div className={classes.suggestWords}>thịt trứng</div>
        <div className={classes.suggestWords}>rau củ quả</div>
        <div className={classes.suggestWords}>sữa, bơ, phô mai</div>
        <div className={classes.suggestWords}>hải sản</div>
        <div className={classes.suggestWords}>gạo, mì ăn liền</div>
        <div className={classes.suggestWords}>đồ uống, bia rượu</div>
        <div className={classes.suggestWords}>bánh kẹo</div>
      </div>
    </div>

    {/* log in buttons */}
    <BsPerson size={30} className={classes.personIcon} />
    <div className={classes.loginButton}>
      {/* #: mainpage */}
      <Link href="#" underline="none">
        <div style={{ fontSize: '12px', color: '#FFFFFF' }}>
          Đăng nhập / Đăng ký
        </div>
      </Link>
      <Link href="#" underline="none">
        <div style={{ fontSize: '12px', color: '#FFFFFF' }}>
          Tài khoản <AiFillCaretDown />
        </div>
      </Link>
    </div>

    <div
      className={classes.shoppingCart}
      style={{ fontSize: '12px', color: '#FFFFFF' }}
    >
      {/* icon from https://react-icons.github.io/react-icons/ */}
      <FiShoppingCart size={30} />
      <Link style={{ color: '#FFFFFF' }} href="#" underline="none">
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
</AppBar>;

{
  /* use in-line styling to make them appear in 1-line */
}
<AppBar position="relative" className={classes.navbar2}>
  <Toolbar className={classes.customizeToolbar2}>
    <div className={classes.menuWordsPosition}>
      {/* inner divs has display: inline-block to display them in a single line */}
      <div className={classes.menuWords}>Thịt, Rau Củ</div>
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
    </div>
  </Toolbar>
</AppBar>;
