import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Button,
  Grid,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineStorefront } from 'react-icons/md';

export default function Layout({ title, children }) {
  const classes = useStyles();
  return (
    // page title //
    <div>
      <Head>
        {/* {product's name} - tiki.vn. If there is no product's name, then just tiki.vn */}
        <title>{title ? `${title} - tiki.vn` : 'Tiki.vn'}</title>
      </Head>

      {/* position static positioned the bar according to the normal flow of the page */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.customizeToolbar}>
          <div className={classes.logoPosition}>
            <div className={classes.logo}>
              <Image src="/tiki.png" alt="tiki" width={55} height={40} />
            </div>
            <div className={classes.logo2}>
              <Image
                src="/freeship.png"
                alt="freeship"
                width={80}
                height={12}
              />
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
      </AppBar>

      {/* use in-line styling to make them appear in 1-line */}
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
      </AppBar>

      {/* footer */}
      {/* styling copied from tiki.vn, very easy but takes alot of time */}
      <Container className={classes.main}>{children}</Container>
      <Grid style={{ backgroundColor: '#FFFFFF' }}>
        {/* main block */}
        <footer className={classes.footer}>
          {/* outer div */}
          <div className={classes.footerPadding}>
            {/* footerBlock has "display: flex". class block & block2 are mini block inside outer div
            (footerPadding & footerBlock)  */}

            {/* First section */}
            <div className={classes.footerBlock}>
              {/* First section Mini block #1 */}
              <div className={classes.block}>
                <h4 className={classes.customerSupport}>Hỗ trợ khách hàng</h4>
                <p className={classes.hotline}>
                  <a className={classes.phoneNumbers}>1900-6035</a>
                  <span className={classes.smallText}>
                    (1000 đ/phút, 8-21h kể cả T7, CN)
                  </span>
                </p>
                <a className={classes.smallText}>Các câu hỏi thường gặp</a>
                <a className={classes.smallText}>Gửi yêu cầu hỗ trợ</a>
                <a className={classes.smallText}>Hướng dẫn đặt hàng</a>
                <a className={classes.smallText}>Phương thức vận chuyển</a>
                <a className={classes.smallText}>Chính sách đổi trả</a>
                <a className={classes.smallText}>Hướng dẫn trả góp</a>
                <a className={classes.smallText}>Chính sách hàng nhập khẩu</a>
                <a className={classes.smallText}>
                  Hỗ trợ khách hàng: hotro@tiki.vn
                </a>
                <a className={classes.smallText}>
                  Báo lỗi bảo mật: security@tiki.vn
                </a>
              </div>

              {/* First section Mini block #2 */}
              <div className={classes.block2}>
                <h4 className={classes.customerSupport}>Về Tiki</h4>
                <a className={classes.smallText}>Giới thiệu về tiki</a>
                <a className={classes.smallText}>Tuyển dụng</a>
                <a className={classes.smallText}>
                  Chính sách bảo mật thanh toán
                </a>
                <a className={classes.smallText}>
                  Chính sách bảo mật thông tin cá nhân
                </a>
                <a className={classes.smallText}>
                  Chính sách giải quyết khiếu nại
                </a>
                <a className={classes.smallText}>Điều khoản sử dụng</a>
                <a className={classes.smallText}>Giới thiệu TiKi Xu</a>
                <a className={classes.smallText}>Tiếp thị liên kết cùng Tiki</a>
                <a className={classes.smallText}>Bán hàng doanh nghiệp</a>
              </div>

              {/* First section Mini block #3 */}
              <div className={classes.block2}>
                <h4 className={classes.customerSupport}>Hợp tác và liên kết</h4>
                <a className={classes.smallText}>
                  Quy chế hoạt động Sàn GDTMĐT
                </a>
                <a className={classes.smallText}>Bán hàng cùng Tiki</a>
                <h4 className={classes.customerSupport2}>Chứng nhận bởi</h4>
                <Image src="/bocongthuong.png" alt="" width={32} height={32} />
                <div className={classes.boCongThuong}>
                  <Image
                    src="/bocongthuong.svg"
                    alt=""
                    width={83}
                    height={32}
                  />
                </div>
              </div>

              {/* First section Mini block #4 */}
              <div className={classes.block2}>
                <h4 className={classes.customerSupport}>Dịch vụ giao hàng</h4>
                <Image src="/tikinow.webp" alt="" width={68} height={33} />
              </div>
              <div className={classes.block2}>
                <h4 className={classes.customerSupport}>
                  Tải ứng dụng trên điện thoại
                </h4>

                <div className={classes.iconBorder}>
                  <Image src="/qrcode.png" alt="" width={80} height={80} />
                  <div className={classes.qrCode}>
                    <Image src="/appstore.png" alt="" width={122} height={36} />
                    <Image
                      src="/googleplay.png"
                      alt=""
                      width={122}
                      height={36}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* line separator, a grey thin line used to separate sections */}
          <div className={classes.separator}></div>
          {/* outer div of the 2nd Section */}
          <div className={classes.footerPadding}>
            <div className={classes.footerBlock}>
              <div className={classes.block3}>
                <a className={classes.smallText}>
                  Địa chỉ văn phòng: 52 Út Tịch, phường 4, quận Tân Bình, thành
                  phố Hồ Chí Minh
                </a>
                <a className={classes.smallText}>
                  Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ
                  trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử
                  lý đơn hàng
                </a>
                <a className={classes.smallText}>
                  Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế
                  hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
                </a>
                <a className={classes.smallText}>
                  © 2021 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
                </a>
              </div>
            </div>
          </div>
          {/* line separator */}
          <div className={classes.separator}></div>
          <div className={classes.footerBlock}>
            <div className={classes.block4}>
              <h1 className={classes.h1}>
                Tiki - Thật nhanh, thật chất lượng, thật rẻ
              </h1>
              <h2 className={classes.h2}>Tiki có tất cả</h2>
              <a className={classes.smallText}>
                Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín,
                hàng nghìn loại mặt hàng từ{' '}
                <a underline="hover" className={classes.miniLink2}>
                  Điện thoại smartphone
                </a>{' '}
                tới{' '}
                <a underline="hover" className={classes.miniLink2}>
                  Rau củ quả tươi
                </a>
                , kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho
                bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm
                vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích
                khác như{' '}
                <a underline="hover" className={classes.miniLink2}>
                  mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo
                  hiểm.
                </a>
              </a>
              <h2 className={classes.h2}>Khuyến mãi, ưu đãi tràn ngập</h2>
              <div>
                <a className={classes.smallText}>
                  Bạn muốn săn giá sốc, Tiki có{' '}
                  <a underline="hover" className={classes.miniLink2}>
                    giá sốc mỗi ngày
                  </a>{' '}
                  cho bạn! Bạn là tín đồ của các thương hiệu, các{' '}
                  <a underline="hover" className={classes.miniLink2}>
                    cửa hàng Official chính hãng
                  </a>{' '}
                  đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có
                  hàng triệu sản phẩm trong{' '}
                  <a underline="hover" className={classes.miniLink2}>
                    chương trình Freeship+
                  </a>{' '}
                  , không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của
                  bạn. Mua thêm gói{' '}
                  <a underline="hover" className={classes.miniLink2}>
                    TikiNOW tiết kiệm
                  </a>{' '}
                  để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW
                  cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm,
                  100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có
                  TikiCARD,{' '}
                  <a underline="hover" className={classes.miniLink2}>
                    thẻ tín dụng Tiki hoàn tiền 15%
                  </a>{' '}
                  trên mọi giao dịch (tối đa hoàn 600k/tháng)
                </a>
              </div>
            </div>
          </div>
          <div className={classes.separator}></div>
          <div className={classes.footerBlock}>
            <h1 className={classes.h1}>Danh mục sản phẩm</h1>
          </div>
          <div className={classes.footerBlock}>
            <div className={classes.block}>
              <h2 className={classes.h2}>Đồ Chơi - Mẹ & Bé</h2>
              <a className={classes.smallText}>
                Thời Trang Cho Mẹ Và Bé / Đồ chơi / Đồ dùng cho bé / Chăm sóc
                nhà cửa / Chăm sóc mẹ mang thai, sau sinh / Dinh dưỡng cho bé /
                Tã, Bỉm / Dinh dưỡng cho người lớn / Dinh dưỡng cho mẹ / Thực
                phẩm ăn dặm / Chuẩn bị mang thai
              </a>
              <h2 className={classes.h2}>Thực Phẩm Tươi Sống</h2>
              <a className={classes.smallText}>
                Trái Cây / Thịt, Trứng / Cá, thuỷ hải sản / Rau củ quả / Thực
                phẩm Việt / Sữa, bơ, phô mai / Đông lạnh, mát / Dầu ăn, gia vị /
                Gạo, mì, nông sản / Đồ hộp, đóng gói / Bia, đồ uống / Thực phẩm
                chay / Dành cho trẻ em / Bánh kẹo, giỏ quà / Thức ăn, đồ thú
                cưng / Chăm sóc cá nhân / Chăm sóc nhà cửa
              </a>
              <h2 className={classes.h2}>Điện Thoại - Máy Tính Bảng</h2>
              <a className={classes.smallText}>
                Điện thoại Smartphone / Điện thoại bàn / Điện thoại phổ thông /
                Máy đọc sách / Máy tính bảng
              </a>
              <h2 className={classes.h2}>Làm Đẹp - Sức Khỏe</h2>
              <a className={classes.smallText}>
                Chăm sóc da mặt / Dụng cụ làm đẹp / Thực phẩm chức năng / Trang
                điểm / Chăm sóc cơ thể / Máy Massage & Thiết bị chăm sóc sức
                khỏe / Sản phẩm thiên nhiên & Khác / Chăm sóc tóc và da đầu /
                Chăm sóc cá nhân / Nước hoa / Hỗ trợ tình dục / Bộ sản phẩm làm
                đẹp / Dược mỹ phẩm
              </a>
              <h2 className={classes.h2}>Điện gia dụng</h2>
              <a className={classes.smallText}>
                Đồ dùng nhà bếp / Thiết bị gia đình
              </a>
            </div>
            <div className={classes.block2}>
              <h2 className={classes.h2}>Thời trang nữ</h2>
              <a className={classes.smallText}>
                Áo nữ / Đầm nữ / Quần nữ / Áo liền quần - Bộ trang phục / Áo
                khoác nữ / Đồ ngủ - Đồ mặc nhà nữ / Chân váy / Trang phục bơi nữ
                / Thời trang bầu và sau sinh / Thời trang trung niên
              </a>
              <h2 className={classes.h2}>Thời trang nam</h2>
              <a className={classes.smallText}>
                Áo thun nam / Quần nam / Áo vest - Áo khoác nam / Áo sơ mi nam /
                Đồ lót nam / Áo hoodie nam / Đồ ngủ, đồ mặc nhà nam / Đồ đôi -
                Đồ gia đình nam / Áo nỉ - Áo len nam / Đồ bơi - Đồ đi biển nam /
                Quần áo nam trung niên / Quần áo nam kích cỡ lớn
              </a>
              <h2 className={classes.h2}>Giày - Dép nữ</h2>
              <a className={classes.smallText}>
                Giày cao gót / Dép - Guốc nữ / Giày thể thao nữ / Giày sandals
                nữ / Giày búp bê / Giày boots nữ / Giày lười nữ / Phụ kiện giày
                / Giày Đế xuồng nữ
              </a>
              <h2 className={classes.h2}>Giày - Dép nam</h2>
              <a className={classes.smallText}>
                Giày lười nam / Giày tây nam / Giày thể thao nam / Dép nam /
                Giày sandals nam / Phụ kiện giày nam / Giày boots nam
              </a>
              <h2 className={classes.h2}>Túi thời trang nữ</h2>
              <a className={classes.smallText}>
                Túi đeo chéo, túi đeo vai nữ / Ví nữ / Túi xách tay nữ / Túi
                tote nữ / Phụ kiện túi
              </a>
              <h2 className={classes.h2}>Túi thời trang nam</h2>
              <a className={classes.smallText}>
                Ví nam / Túi đeo chéo nam / Túi xách công sở nam / Túi bao tử,
                túi đeo bụng
              </a>
            </div>
            <div className={classes.block2}>
              <h2 className={classes.h2}>Balo và Vali</h2>
              <a className={classes.smallText}>
                Balo / Túi du lịch và phụ kiện / Balo, cặp, túi chống sốc laptop
                / Vali, phụ kiện vali
              </a>
              <h2 className={classes.h2}>Phụ kiện thời trang</h2>
              <a className={classes.smallText}>
                Phụ kiện thời trang nữ / Mắt kính / Phụ kiện thời trang nam
              </a>
              <h2 className={classes.h2}>Đồng hồ và Trang sức</h2>
              <a className={classes.smallText}>
                Trang sức / Đồng hồ nữ / Đồng hồ nam / Phụ kiện đồng hồ / Đồng
                hồ trẻ em
              </a>
              <h2 className={classes.h2}>Laptop - Máy Vi Tính - Linh kiện</h2>
              <a className={classes.smallText}>
                Linh Kiện Máy Tính - Phụ Kiện Máy Tính / Thiết Bị Văn Phòng -
                Thiết Bị Ngoại Vi / Thiết Bị Mạng / Thiết Bị Lưu Trữ / PC - Máy
                Tính Bộ / Laptop
              </a>
              <h2 className={classes.h2}>Bách Hóa Online</h2>
              <a className={classes.smallText}>
                Chăm sóc thú cưng / Đồ uống - Pha chế dạng bột / Thực phẩm Đóng
                hộp và Khô / Gia Vị và Chế Biến / Đậu & Hạt Các Loại / Đồ Ăn Vặt
                / Sữa và các Sản phẩm từ sữa / Đồ Uống Không Cồn / Đồ uống có
                cồn / Bộ quà tặng
              </a>
            </div>
            <div className={classes.block2}>
              <h2 className={classes.h2}>Hàng Quốc Tế</h2>
              <a className={classes.smallText}>
                Nhà Cửa - Đời Sống / Thời Trang / Ô tô, xe máy, xe đạp / Thiết
                Bị Số - Phụ Kiện Số / Thể thao - Dã ngoại / Làm Đẹp - Sức Khỏe /
                Sách, Văn phòng phẩm & Quà lưu niệm / Mẹ & Bé / Điện gia dụng /
                Bách hóa online / Máy Ảnh - Máy Quay Phim / Laptop & Máy Vi Tính
                / Sản phẩm - thiết bị công nghiệp / Tivi & Thiết Bị Nghe Nhìn /
                Điện Thoại - Máy Tính Bảng
              </a>
              <h2 className={classes.h2}>Thiết Bị Số - Phụ Kiện Số</h2>
              <a className={classes.smallText}>
                Phụ Kiện Điện Thoại và Máy Tính Bảng / Phụ kiện máy tính và
                Laptop / Thiết Bị Âm Thanh và Phụ Kiện / Thiết Bị Thông Minh và
                Linh Kiện Điện Tử / Thiết Bị Đeo Thông Minh và Phụ Kiện / Thiết
                Bị Chơi Game và Phụ Kiện
              </a>
              <h2 className={classes.h2}>Voucher - Dịch vụ</h2>
              <a className={classes.smallText}>
                Thanh toán hóa đơn / Khóa học / Du lịch - Khách sạn / Spa & Làm
                đẹp / Dịch vụ khác / Nhà hàng - Ăn uống / Sự kiện - Giải trí /
                Nha khoa - Sức khỏe / Phiếu quà tặng / Sim số - Thẻ cào - Thẻ
                game
              </a>
              <h2 className={classes.h2}>Ô Tô - Xe Máy - Xe Đạp</h2>
              <a className={classes.smallText}>
                Phụ kiện - Chăm sóc xe / Xe điện / Xe đạp / Xe máy / Ô tô / Xe
                Scooter / Dịch vụ, lắp đặt
              </a>
              <h2 className={classes.h2}>Nhà Sách Tiki</h2>
              <a className={classes.smallText}>
                Sách tiếng Việt / Văn phòng phẩm / Quà lưu niệm / English Books
              </a>
            </div>
            <div className={classes.block2}>
              <h2 className={classes.h2}>Điện Tử - Điện Lạnh</h2>
              <a className={classes.smallText}>
                Âm thanh & Phụ kiện Tivi / Phụ kiện điện lạnh / Tủ lạnh / Máy
                lạnh - Máy điều hòa / Máy giặt / Tủ đông - Tủ mát / Tivi / Máy
                nước nóng / Máy rửa chén / Máy sấy quần áo / Tủ ướp rượu
              </a>
              <h2 className={classes.h2}>Thể Thao - Dã Ngoại</h2>
              <a className={classes.smallText}>
                Trang phục thể thao nữ / Trang phục thể thao nam / Đồ dùng dã
                ngoại / Giày thể thao nam / Phụ kiện thể thao / Dụng cụ - thiết
                bị tập thể thao / Các môn thể thao khác / Dụng cụ câu cá / Thể
                thao dưới nước / Các môn thể thao đồng đội / Các môn thể thao
                chơi vợt / Các môn thể thao đối kháng / Giày thể thao nữ / Thực
                phẩm bổ sung năng lượng / Dụng cụ leo núi
              </a>
              <h2 className={classes.h2}>Máy Ảnh - Máy Quay Phim</h2>
              <a className={classes.smallText}>
                Phụ Kiện Máy Ảnh, Máy Quay / Camera Giám Sát / Thiết Bị Ánh Sáng
                / Camera Hành Trình - Action Camera và Phụ Kiện / Balo - Túi
                Đựng - Bao Da / Ống Kính - Ống Ngắm / Ống Kính (Lens) / Thiết Bị
                Quay Phim / Máy Bay Camera và Phụ Kiện / Máy Ảnh
              </a>
            </div>
          </div>
        </footer>
      </Grid>
    </div>
  );
}
