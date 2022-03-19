import { ClassNames } from '@emotion/react';
import { TextRotationAngleupSharp } from '@mui/icons-material';
import { AiFillStar } from 'react-icons/ai';

const data = {
  props: [
    {
      name: 'Găng tay da nam',
      slug: 'gang-tay-da-nam',
      category: 'Quần áo',
      image: '/images/gloves.png',
      price: '157.000',
      shop: 'Viewshop36',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 17,
    },
    {
      name: 'Điện thoại Iphone 11',
      slug: 'dien-thoai-iphone-11',
      category: 'Điện tử',
      image: '/images/phone.png',
      price: '13.650.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      rating: 5,
      numReviews: 353,
      sold: '1000+',
    },
    {
      name: 'Găng tay đi xe máy giữ ấm mùa đông cảm ứng điện thoại dành cho nam',
      slug: 'gang-tay-di-xe-may-giu-am-mua-dong-cam-ung-dien-thoai-danh-cho-nam',
      category: 'Quần áo',
      image: '/images/gloves2.png',
      price: '192.000',
      shop: 'Winshop36',
      rating: 5,
      numReviews: 1,
      sold: 11,
    },
    {
      name: 'iPad 10.2 Inch WiFi 64GB (Gen 9) New 2021',
      slug: 'ipad-10-2-inch-wifi-65gb-new-2021',
      category: 'Điện tử',
      image: '/images/ipad.png',
      price: '9.450.000',
      shop: 'TikiTrading',
      rating: 5,
      numReviews: 46,
      sold: 165,
    },
    {
      name: 'Hộp cơm thủy tinh kèm muỗng đũa LocknLock LLG991CL 930ml',
      slug: 'hop-com-thuy-tinh-kem-muong-dua-locknlock-llg991cl-930ml',
      category: 'stuff',
      image: '/images/lunchbox.png',
      price: '157.000',
      shop: 'TikiTrading',
      rating: 5,
      numReviews: 742,
      sold: '1000+',
    },
    {
      name: 'Nước dưỡng làm mềm và trắng da Senka White Beauty Lotion',
      slug: 'nuoc-duong-lam-mem-va-trang-da-senka-white-beauty-lotion',
      category: 'stuff',
      image: '/images/skincare.png',
      price: '189.000',
      shop: 'Senka Official Store',
      rating: 5,
      numReviews: 39,
      sold: 130,
    },
  ],

  products: [
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 95,
      origin: 'Trung Quốc',
      brand: 'Gubag',
      sold: 210,
      description:
        'Balo công sở nam nữ cao cấp, dành cho người đi làm. Balo có thể đựng được laptop to đến 15,6 inch. Thiết kế gọn nhẹ, tiện lợi khi đi làm hoặc đi công tác. Chất liệu vải tốt, đàn hồi cao, rất bền và đẹp. Đây là dòng balo doanh nhân hàng hiệu, rất được dân văn phòng yêu thích và ưu chuộng.',
      /////////////////
      userName: 'Trương Hồng Tuyền',
      userShortenName: 'HT',
      userJoinDate: '3 năm',
      totalPost: '9',
      totalLikeReceived: '4',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction: 'Cực kì hài lòng',
      userComment: (
        <>
          Đẹp, nhẹ nhàng, lịch sự dùng đựng máy tính cũng được mà dùng cho các
          bạn tuổi teen đi học cũng OK. Lấy về cái bạn nhỏ nhà mình đòi luôn.
          Nhiều ngăn, chất liệu OK, nói chung là rất thích.
        </>
      ),
      userCommentDate: '10 tháng',
      userUseDate: '1 ngày',
      ////////////////////

      ///////////////////
      userName2: 'Hoàng Vinh',
      userShortenName2: 'HV',
      userJoinDate2: '5 năm',
      totalPost2: '1',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: (
        <>
          Shop tư vấn nhiêt tình giao hàng nhanh, chất lượng. Có nhiều ngăn đủ
          rộng, để lap top thoải mái và an toàn. Tiếp tục ủng hộ shop
        </>
      ),
      userCommentDate2: '9 tháng',
      userUseDate2: '1 ngày',
      ////////////////

      ///////////////
      userName3: 'Mr Tuấn',
      userShortenName3: 'MT',
      userJoinDate3: '1 năm',
      totalPost3: '1',
      totalLikeReceived3: '0',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: (
        <>
          Mua được cái balo thấy rất ưng ý. Giao hàng rất nhanh. Balo có nhiều
          ngăn, dày dặn và tiện có thể đeo và xách. thanks shop và tiki
        </>
      ),
      userCommentDate3: '9 tháng',
      userUseDate3: '10 phút',
      ///////////////
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 5,
      origin: 'Việt Nam',
      brand: 'Huy Hoàng',
      sold: 20,
      description:
        'Thắt lưng nam Huy Hoàng là loại dây nịt được làm và xử lý công nghệ hiện đại từ da bò thật 100%. Chất liệu da thật được xử lý đúng theo quy trình nên sử dụng càng lâu thì thắt lưng sẽ càng mền mại, dẻo dai, bền màu và tăng độ bóng mịn. Bề mặt thắt lưng, bề mặt da không bị rạn nứt hoặc bị gãy theo thời gian. Thoải mái điều chỉnh kích cỡ thắt lưng theo số đo vòng 2. Kiểu dáng sang trọng, màu sắc tinh tế, lịch lãm để bạn thoải mái lựa chọn.',
      /////////////////
      userName: 'Thiên Đường',
      userShortenName: 'TĐ',
      userJoinDate: '4 năm',
      totalPost: '45',
      totalLikeReceived: '10',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
        </>
      ),
      userSatisfaction: 'Hài lòng',
      userComment: <></>,
      userCommentDate: '1 tháng',
      userUseDate: '1 giờ',
      ////////////////////

      ///////////////////
      userName2: 'Trong Hieu',
      userShortenName2: 'TH',
      userJoinDate2: '8 năm',
      totalPost2: '6',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Hài lòng',
      userComment2: <></>,
      userCommentDate2: '6 tháng',
      userUseDate2: '2 tháng',
      ////////////////

      ///////////////
      userName3: 'Hoài Bảo',
      userShortenName3: 'HB',
      userJoinDate3: '5 năm',
      totalPost3: '1',
      totalLikeReceived3: '1',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: <>Chất liệu tốt</>,
      userCommentDate3: '5 tháng',
      userUseDate3: '45 phút',
      ///////////////
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 13,
      origin: 'Mỹ',
      brand: 'SOLGAR',
      description: (
        <>
          <div>
            Thực Phẩm Bảo Vệ Sức Khỏe Solgar Vitamin D3 1000 IU chứa Vitamin D3
            (Cholecalciferol) 1000 IU.
          </div>
          <div>
            Phụ liệu: Microcrystalline Cellulose, Cellulose thực vật, Stearic
            Acid thực vật, Silica, Magnesium Stearate thực vật, Glycerin thực
            vật, Riboflavin
          </div>
          <div>
            Bổ sung Vitamin D3, giúp cơ thể dễ dàng hấp thụ hơn canxi và phốt
            pho Hỗ trợ phòng ngừa bệnh loãng xương ở người lớn Chú ý: Sản phẩm
            này không phải là thuốc và không có tác dụng thay thế thuốc chữa
            bệnh
          </div>
        </>
      ),
      sold: 47,
      /////////////////
      userName: 'Le Minh Loc',
      userShortenName: 'ML',
      userJoinDate: '1 năm',
      totalPost: '45',
      totalLikeReceived: '0',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction: 'Cực kì hài lòng',
      userComment: <>Ưng ý sản phẩm</>,
      userCommentDate: '9 tháng',
      userUseDate: '14 phút',
      ////////////////////

      ///////////////////
      userName2: 'Vy Minh',
      userShortenName2: 'VM',
      userJoinDate2: '5 năm',
      totalPost2: '35',
      totalLikeReceived2: '13',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: <>Chất lượng tốt</>,
      userCommentDate2: '2 tháng',
      userUseDate2: '1 tháng',
      ////////////////

      ///////////////
      userName3: 'Võ Thị Hải Yến',
      userShortenName3: 'HY',
      userJoinDate3: '2 năm',
      totalPost3: '236',
      totalLikeReceived3: '8',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: (
        <>
          Giao hàng rất nhanh trong mùa dịch. Hạn sử dụng còn rất dài.Cảm ơn
          shop.
        </>
      ),
      userCommentDate3: '6 tháng',
      userUseDate3: '1 tháng',
      ///////////////
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 7,
      origin: 'Trung Quốc',
      brand: 'Sony',
      description: (
        <>
          <div>
            Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) dành cho
            PlayStation 4.
          </div>
          <div>
            Thiết kế tay cầm thuận tiện với các nút bấm nhạy, cảm ứng hiện đại.
          </div>
          <div>Tích hợp bộ rung cho trải nghiệm game chân thật.</div>
          <div>
            Tích hợp loa ngoài và cổng tai nghe 3.5 cho thưởng thức âm thanh
            thuận tiện hơn.
          </div>
          <div>Chia sẻ thuận tiên hơn với nút ""SHARE"" trên tay cầm.</div>
          <div>
            Hỗ trợ khả năng truyền tín hiệu qua Bluetooth và cáp microUSB.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 15,
      /////////////////
      userName: 'Nguyen Hoang Trung',
      userShortenName: 'HT',
      userJoinDate: '5 năm',
      totalPost: '18',
      totalLikeReceived: '4',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
        </>
      ),
      userSatisfaction: 'Không hài lòng',
      userComment: (
        <>
          Tôi đặt mua màu xanh đen, nhưng lại giao màu đen. Sử dụng được 2 ngày
          thì bị lỗi ko thể sạc được
        </>
      ),
      userCommentDate: '1 tháng',
      userUseDate: '5 ngày',
      ////////////////////

      ///////////////////
      userName2: 'Nguyen Duy Khuong',
      userShortenName2: 'DK',
      userJoinDate2: '3 năm',
      totalPost2: '7',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: (
        <>
          10 ngày đồ mới về mình cũng chào thua tiki hàng tốt giao lâu. Say good
          bye tiki
        </>
      ),
      userCommentDate2: '10 tháng',
      userUseDate2: '8 giờ',
      ////////////////

      ///////////////
      userName3: 'Tùng Nguyễn',
      userShortenName3: 'TN',
      userJoinDate3: '4 năm',
      totalPost3: '19',
      totalLikeReceived3: '3',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
        </>
      ),
      userSatisfaction3: 'Hài lòng',
      userComment3: <>Giao hàng nhanh, đóng gói cẩn thận.</>,
      userCommentDate3: '10 tháng',
      userUseDate3: '18 phút',
      ///////////////
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 5,
      origin: 'Đài Loan',
      brand: 'Gigabye',
      description: (
        <>
          <div>Hệ thống làm mát WINDFORCE 2X</div>
          <div>
            Card Màn Hình VGA GIGABYTE GTX 1050 Ti Windforce OC 4G trang bị hai
            quạt cánh quạt 90mm độc đáo, 2 ống dẫn nhiệt bằng đồng nguyên chất,
            thiết kế quạt quay xen kẽ và công nghệ cảm ứng trực tiếp ống dẫn
            nhiệt, cùng nhau mang lại khả năng tản nhiệt hiệu quả cho hiệu suất
            cao hơn ở nhiệt độ thấp hơn.
          </div>
          <div>Thiết kế quạt Blade độc ​​đáo</div>
          <div>
            Thiết kế quạt quay thay thế tối ưu hóa luồng không khí bằng quạt
            quay xen kẽ làm giảm nhiễu loạn không khí và tản nhiệt hiệu quả. Bên
            cạnh đó, thiết kế quạt Blade độc ​​đáo cho phép luồng khí được tràn
            ra bởi cạnh quạt hình tam giác, và được dẫn hướng trơn tru qua đường
            cong sọc 3D trên bề mặt quạt, giúp tăng hiệu quả lưu lượng khí lên
            23% so với quạt truyền thống. Các quạt bán thụ động sẽ vẫn tắt khi
            GPU ở dưới mức cài đặt hoặc nhiệt độ để chơi trò chơi công suất
            thấp.
          </div>
          <div>Ống dẫn nhiệt composite</div>
          <div>
            Các ống dẫn nhiệt tổng hợp kết hợp cả độ dẫn nhiệt và chuyển pha để
            quản lý hiệu quả việc truyền nhiệt giữa hai giao diện rắn, giúp tăng
            29% công suất làm mát. Các ống dẫn nhiệt bằng đồng nguyên chất được
            định hình để tối đa hóa diện tích tiếp xúc trực tiếp với GPU.
          </div>
        </>
      ),
      sold: 11,
      /////////////////
      userName: 'Văn Trung Thịnh',
      userShortenName: 'TT',
      userJoinDate: '5 năm',
      totalPost: '1',
      totalLikeReceived: '35',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
        </>
      ),
      userSatisfaction: 'Giao sai mã',
      userComment: (
        <>
          Đặt GIGABYTE GTX 1050 Ti Windforce OC 4G, mà giao GIGABYTE GTX 1050 Ti
          OC 4G là lý do gì,
        </>
      ),
      userCommentDate: '1 năm',
      userUseDate: '3 giờ',
      ////////////////////

      ///////////////////
      userName2: 'Nguyễn Thị Thu Trang',
      userShortenName2: 'TT',
      userJoinDate2: '2 năm',
      totalPost2: '6',
      totalLikeReceived2: '3',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: <>Sản phẩm tốt</>,
      userCommentDate2: '1 năm',
      userUseDate2: '5 ngày',
      ////////////////

      ///////////////
      userName3: 'Nguyễn Ngọc Tấn',
      userShortenName3: 'NT',
      userJoinDate3: '2 năm',
      totalPost3: '2',
      totalLikeReceived3: '0',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: <>Chất lượng tốt</>,
      userCommentDate3: '1 năm',
      userUseDate3: '3 giờ',
      ///////////////
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 101,
      origin: 'Việt Nam',
      brand: 'OEM',
      description: (
        <>
          <div>CÔNG NGHỆ VẢI CAO CẤP: tạo cảm giác mềm mịn cho người đeo.</div>
          <div>
            CHỐNG BÍ THỞ, CHỐNG TRÔI SON: Khoang đeo 4D thông thoáng tạo cảm
            giác thở thoải mái hơn khi đeo. Đồng thời đảm bảo không dính son,
            trôi son.
          </div>
          <div>
            CÔNG NGHỆ LỌC NANO: đảm bảo không fomandehit, tỷ lệ lọc lên đến 95%
            với 4 lớp lọc.
          </div>
          <div>
            QUAI CHỊU LỰC: Quai khẩu trang được ứng dụng công nghệ hàn nhiệt,
            chịu lực kéo gấp 5 lần so với khẩu trang y tế
          </div>
          <div>Hướng dẫn sử dụng:</div>
          <div>
            + Khẩu trang 4D sử dụng một lần (nên vậy). Bạn nào tiết kiệm có thể
            giặt lại tái sử dụng. Lấy một xà bông nhẹ xoa vào bề trong khẩu
            trang và phơi nắng nhé. Tối đa 2 lần giặt.
          </div>
          <div>+ Ngăn giọt bắn, mầm bệnh qua đường hô hấp</div>
          <div>
            + Mở gói, lấy khẩu trang ra khỏi gói nhẹ nhàng. Cầm khẩu trang ở mặt
            ngoài và 2 quai đeo, có thể làm mềm khẩu trang trước khi đeo.
          </div>
          <div>+ Đeo hai quai vào 2 bên tại, cố định nẹp cánh mũi</div>
          <div>+ Kéo phần dưới của khẩu trang cho bao xuống hết cằm</div>
          <div>️ CHI TIẾT SẢN PHẨM:</div>
          <div>- Quy cách đóng gói:10chiếc/túi</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
          <div>
            Sản phẩm này là tài sản cá nhân được bán bởi Nhà Bán Hàng Cá Nhân và
            không thuộc đối tượng phải chịu thuế GTGT. Do đó hoá đơn VAT không
            được cung cấp trong trường hợp này.
          </div>
        </>
      ),
      sold: '1000+',
      /////////////////
      userName: 'Lê Xuân',
      userShortenName: 'LX',
      userJoinDate: '3 tháng',
      totalPost: '3',
      totalLikeReceived: '4',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction: 'Cực kì hài lòng',
      userComment: (
        <>
          Khẩu trang xịn, đeo rất thoải mái, thở thoải mái hơn đeo khẩu trang y
          tế bình thường. Mình hay chạy bộ, đeo khẩu trang y tế rất khó thở khi
          chạy. đeo cái khẩu trang này thấy thoải mái hơn hẳn vì nó không bị dí
          sát vào mũi mà vẫn có 1 khoảng trống khi đeo khiến rất dễ thở.
        </>
      ),
      userCommentDate: '3 tháng',
      userUseDate: '1 ngày',
      ////////////////////

      ///////////////////
      userName2: 'Lê Minh Thanh',
      userShortenName2: 'MT',
      userJoinDate2: '3 tháng',
      totalPost2: '4',
      totalLikeReceived2: '1',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: (
        <>
          Giao hàng nhanh quá . Chất lượng tốt . Thơm mùi của hạt mà shop cho
          😗. Cảm ơn shop nhiều ạ .
        </>
      ),
      userCommentDate2: '2 tháng',
      userUseDate2: '10 phút',
      ////////////////

      ///////////////
      userName3: 'Hoang Ha',
      userShortenName3: 'HH',
      userJoinDate3: '3 tháng',
      totalPost3: '3',
      totalLikeReceived3: '1',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: (
        <>
          Khẩu trang tốt, cứng cáp, khoang thở rộng rãi, dây chắc chắn. Rất dễ
          thở
        </>
      ),
      userCommentDate3: '3 tháng',
      userUseDate3: '1 ngày',
      ///////////////
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 2,
      origin: 'Trung Quốc',
      brand: 'Akemi',
      description: (
        <>
          <div>
            Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món (Super King/
            King/ Queen)
          </div>
          <div>
            Akemi Tencel Modal được dệt từ sợi cellulosic có nguồn gốc từ cây
            Beechwood qua quy trình sản xuất có trách nhiệm với môi trường. Các
            sợi được dệt rất chi tiết để mang lại sự mềm mại và giữ màu sắc để
            bạn có thể tận hưởng sự thoải mái nhưng vẫn rất phong cách
          </div>
          <div>1. Thành phần</div>
          <div>- 100% Tencel Modal</div>
          <div>- 880 Thread Count</div>
          <div>2. Màu sắc</div>
          <div>- Briony</div>
          <div>- Shinkai</div>
          <div>- Gailwen</div>
          <div>- Sonnato</div>
        </>
      ),
      sold: 11,
      /////////////////
      userName: 'Ngoc Ha',
      userShortenName: 'NH',
      userJoinDate: '1 ngày',
      totalPost: '1',
      totalLikeReceived: '0',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#c7c7c7" size={20} />
        </>
      ),
      userSatisfaction: 'Hài lòng',
      userComment: <>ổn, giao hàng nhanh</>,
      userCommentDate: '25 ngày',
      userUseDate: '6 ngày',
      ////////////////////

      ///////////////////
      userName2: 'Phạm Thị Hoài Thu',
      userShortenName2: 'HT',
      userJoinDate2: '1 ngày',
      totalPost2: '1',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: <></>,
      userCommentDate2: '4 tháng',
      userUseDate2: '2 giờ',
      ////////////////

      ///////////////
      userName3: 'Minh Loc',
      userShortenName3: 'ML',
      userJoinDate3: '2 tháng',
      totalPost3: '5',
      totalLikeReceived3: '1',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: <>Hàng tốt</>,
      userCommentDate3: '2 tháng',
      userUseDate3: '6 phút',
      ///////////////
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 301,
      origin: 'Trung Quốc',
      brand: 'Tamayoko',
      description: (
        <>
          <div>THIẾT KẾ SANG TRỌNG - THÔNG MINH - TỰ NHIÊN</div>
          <div>Chất liệu tre tự nhiên mát, siêu nhẹ</div>
          <div>Bề mặt nhẵn mịn, sờ rất thích tay</div>
          <div>
            Thiết kế thanh lịch làm sang trọng không gian sống và làm việc của
            bạn
          </div>
          <div>SỬ DỤNG ĐA CHỨC NĂNG</div>
          <div>Sử dụng làm bàn gấp gọn trên giường</div>
          <div>Giá đỡ laptop, đọc sách</div>
          <div>Bàn ăn, đựng đồ</div>
        </>
      ),
      sold: 908,
      /////////////////
      userName: 'Bao Banh Bao',
      userShortenName: 'BB',
      userJoinDate: '1 ngày',
      totalPost: '0',
      totalLikeReceived: '0',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction: 'Cực kì hài lòng',
      userComment: (
        <>
          Đóng gói rất chắc chắn. Sản phẩm thì xịn xò. Ban đầu thấy nhận xét
          cũng sợ bị lỗi chênh này nè. Nhưng may mắn nó đúng như mong đợi. Tui
          rất tin tưởng tiki. Mua từ sách, kệ sách h là bàn. Mua cái bàn này tui
          đã sử dụng 100k tiki xu. Quá tiết kiệm. 1 năm cày tiki live. H ko còn
          nữa r. Hơi tiếc. ?
        </>
      ),
      userCommentDate: '9 tháng',
      userUseDate: '5 giờ',
      ////////////////////

      ///////////////////
      userName2: 'Thùy Giang',
      userShortenName2: 'TG',
      userJoinDate2: '1 ngày',
      totalPost2: '1',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: (
        <>
          Bàn nhỏ gọn, chắc chắn, khá là nhẹ, mặt bàn nhẵn mịn ngồi học làm việc
          thoải mái, dễ dàng xoay chuyển thành bàn ăn cũng được
        </>
      ),
      userCommentDate2: '1 năm',
      userUseDate2: '2 giờ',
      ////////////////

      ///////////////
      userName3: 'Sương Mai',
      userShortenName3: 'SM',
      userJoinDate3: '2 tháng',
      totalPost3: '1',
      totalLikeReceived3: '0',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: (
        <>
          hơi bị xước nhẹ nhưng ko sao nó vẫn rất rất ok nhìn trông hình trong
          khá to nhưng ngoài đời thì nhỏ gọn lắm á
        </>
      ),
      userCommentDate3: '4 tháng',
      userUseDate3: '10 phút',
      ///////////////
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 1,
      origin: 'Trung Quốc',
      brand: 'Gigabyte',
      description: (
        <>
          <div>
            Màn Hình Cong 1500R Gigabyte G27QC QHD (2560x1440) 1ms 165Hz VA
            Stereo Speaker (2W x 2)
          </div>
          <div>Độ Cong 1500R</div>
          <div>Thiết kế đơn giản nhưng thanh lịch</div>
          <div>Cổng kết nối đa dạng - dễ dàng sử dụng</div>
          <div>THÔNG SỐ KỸ THUẬT</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 4,
      /////////////////
      userName: 'Bao Banh Bao',
      userShortenName: 'BB',
      userJoinDate: '1 ngày',
      totalPost: '0',
      totalLikeReceived: '0',
      userStarRating: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction: 'Cực kì hài lòng',
      userComment: (
        <>
          Đóng gói rất chắc chắn. Sản phẩm thì xịn xò. Ban đầu thấy nhận xét
          cũng sợ bị lỗi chênh này nè. Nhưng may mắn nó đúng như mong đợi. Tui
          rất tin tưởng tiki. Mua từ sách, kệ sách h là bàn. Mua cái bàn này tui
          đã sử dụng 100k tiki xu. Quá tiết kiệm. 1 năm cày tiki live. H ko còn
          nữa r. Hơi tiếc. ?
        </>
      ),
      userCommentDate: '9 tháng',
      userUseDate: '5 giờ',
      ////////////////////

      ///////////////////
      userName2: 'Thùy Giang',
      userShortenName2: 'TG',
      userJoinDate2: '1 ngày',
      totalPost2: '1',
      totalLikeReceived2: '0',
      userStarRating2: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction2: 'Cực kì hài lòng',
      userComment2: (
        <>
          Bàn nhỏ gọn, chắc chắn, khá là nhẹ, mặt bàn nhẵn mịn ngồi học làm việc
          thoải mái, dễ dàng xoay chuyển thành bàn ăn cũng được
        </>
      ),
      userCommentDate2: '1 năm',
      userUseDate2: '2 giờ',
      ////////////////

      ///////////////
      userName3: 'Sương Mai',
      userShortenName3: 'SM',
      userJoinDate3: '2 tháng',
      totalPost3: '1',
      totalLikeReceived3: '0',
      userStarRating3: (
        <>
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
          <AiFillStar color="#ffd52e" size={20} />
        </>
      ),
      userSatisfaction3: 'Cực kì hài lòng',
      userComment3: (
        <>
          hơi bị xước nhẹ nhưng ko sao nó vẫn rất rất ok nhìn trông hình trong
          khá to nhưng ngoài đời thì nhỏ gọn lắm á
        </>
      ),
      userCommentDate3: '4 tháng',
      userUseDate3: '10 phút',
      ///////////////
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 514,
      origin: 'Mỹ',
      brand: 'Apple',
      description: (
        <>
          <div>Nội dung về tính năng</div>
          <div>
            iPhone 13 Pro Max gói gọn nhiều tính năng cực đỉnh trong một thiết
            kế 6.7 inch.2 Mạng 5G giúp tải xuống các bộ phim một cách nhanh
            chóng và xem trực tuyến video chất lượng cao.1 Màn hình OLED nhỏ gọn
            và sáng đẹp ấn tượng. Ceramic Shield với khả năng chịu va đập khi
            rơi tốt hơn gấp 4 lần.3 Ảnh chụp tuyệt đẹp trong điều kiện ánh sáng
            yếu với chế độ Ban Đêm ở tất cả các camera. Quay phim, biên tập và
            phát video Dolby Vision đẳng cấp điện ảnh. Chip A15 Bionic mạnh mẽ.
          </div>
          <div>Tính năng nổi bật</div>
          <div>Màn hình OLED 6.7 inch2</div>
          <div>
            Ceramic Shield, chất liệu kính bền chắc nhất từng có trên điện thoại
            thông minh
          </div>
          <div>
            Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực
            tuyến chất lượng cao1
          </div>
          <div>
            A15 Bionic cho hiệu năng mạnh hơn 20% so với thế hệ iPhone 12.
          </div>
          <div>
            Hệ thống 3 camera 12 MP hiện đại trang bị cảm biến nâng cao, các
            camera Ultra Wide và Wide; chế độ Ban Đêm, Deep Fusion, Siêu cận
            (Macro)
          </div>
          <div>
            HDR thông minh thế hệ mới, khả năng quay video HDR Dolby Vision 4K,
            4K 2160p@
          </div>
          <div>
            Camera trước TrueDepth 12MP với chế độ Xóa phông và khả năng quay
            video 4K, Nhận diện khuôn mặt thông minh
          </div>
          <div>Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường4</div>
          <div>
            iOS 15 với các tiện ích được thiết kế lại trên Màn Hình Chính, Thư
            Viện Ứng Dụng hoàn toàn mới, App Clips cùng nhiều tính năng khác
          </div>
          <div>Pháp lý</div>
          <div>
            1Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường
            và được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa
            điểm và nhà mạng.
          </div>
          <div>
            2Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích
            thước màn hình là 6.7 inch theo đường chéo. Diện tích hiển thị thực
            tế nhỏ hơn.
          </div>
          <div>
            3Xác nhận dựa vào mặt trước có Ceramic Shield của iPhone 13 Pro Max
            so với iPhone thế hệ trước.
          </div>
          <div>
            4iPhone 13 Pro Max có khả năng chống tia nước, chống nước và chống
            bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có
            kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ
            sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia
            nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn.
            Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi
            iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết
            cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do
            thấm chất lỏng.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 211,
      origin: 'Trung Quốc',
      brand: 'Sony',
      description: (
        <>
          <div>
            Sony WH1000-XM4 Màu Đen - Âm thanh đỉnh cao, trải nghiệm tuyệt vời
          </div>
          <div>
            Tai nghe Sony WH-1000XM4 Bluetooth màu Đen là dòng tai nghe đang
            được ưa chuộng và sử dụng rộng rãi hiện nay. Với thiết kế tối giản,
            màu sắc đen trung tính mà không làm mất đi vẻ đẹp sang trọng của nó,
            đây chính xác là dòng tai nghe mà những tín đồ đam mê công nghệ
            không thể bỏ lỡ.
          </div>
          <div>
            1.Thông số kỹ thuật của tai nghe Sony WH-1000XM4 Bluetooth Màu đen
          </div>
          <div>Thiết kế gập rất thông minh và phong cách năng động.</div>
          <div>
            Chất âm vô cùng tuyệt hảo với màng loa có kích thước là 40mm kết hợp
            với màn chắn Polyme tinh thể lỏng (LCD) và công nghệ Hi-Res Audio.
          </div>
          <div>
            Tự động ngừng phát nhạc khi bạn đang trò chuyện và cảm biến phát
            nhạc lại khi cuộc trò chuyện kết thúc.
          </div>
          <div>
            Tự động điều chỉnh âm lượng phù hợp với hành động của bạn và đem đến
            trải nghiệm tuyệt vời nhất.
          </div>
          <div>Tính năng ngừng phát nhạc khi mà bạn tháo tai nghe ra.</div>
          <div>Hạ thấp âm thanh chỉ với một lần chạm.</div>
          <div>
            Công nghệ chống ồn HD QN1 lọc tiếng ồn hiệu quả và cho chất âm trọn
            vẹn.
          </div>
          <div>
            Thỏa sức nghe nhạc với cả ngày dài với thời lượng pin khủng lên tới
            là 30 giờ. Chỉ với 1 lần sạc và thời gian sạc đầy 3 giờ.
          </div>
          <div>
            Kiểm soát việc vận hành chiếc tai nghe một cách nhanh chóng , đơn
            giản.
          </div>
        </>
      ),
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 2,
      origin: 'Việt Nam',
      brand: 'SMLIFE',
      description: (
        <>
          <div>
            Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 giúp tổ chức và lưu trữ
            các dụng cụ cơ khí (tools) như: tu vít, kềm, kéo cho tới những dụng
            cụ cơ khí nặng như: búa, máy khoan, máy cắt,…
          </div>
          <div>
            Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE được thiết kế để treo dụng
            cụ (tools) trực quan, ngăn nắp và dễ tìm kiếm dụng cụ sửa chữa khi
            cần dùng.
          </div>
          <div>
            Bảng treo đồ nghề Pegboard cơ khí SMLIFE WB3 có kích thước H80cm x
            W120cm gồm mô đun lắp 3 tấm bảng treo dụng cụ sửa chữa H80cm x W40cm
            bằng thép mạ kẽm hoa và bộ móc treo dụng cụ sơn tĩnh điện màu đen.
          </div>
          <div>
            Bộ móc treo dụng cụ sử dụng chung với tấm bảng treo dụng cụ Pegboard
            được thiết kế để có thể linh hoạt tháo lắp và thay đổi vị trí nhằm
            đáp ứng nhu cầu sử dụng đa dạng các dụng cụ sửa chữa (tools).
          </div>
          <div>
            Hơn 20 loại móc treo dụng cụ đang được bán lẻ trên gian hàng SMLIFE.
          </div>
        </>
      ),
      sold: 5,
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 8352,
      origin: 'Brazil',
      brand: 'Nhà Xuất Bản Hội Nhà Văn',
      description: (
        <>
          <div>
            “Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá
            ra những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của
            Brazil.”
          </div>
          <div>- Booklist</div>
          <div>
            “Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có
            sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi
            nào.”
          </div>
          <div>- The National</div>
          <div>
            Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng
            đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ
            bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi
            vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt
            người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời
            của cậu bé con năm tuổi.
          </div>
          <div>
            Có hề gì đâu bao nhiêu là hắt hủi, đánh mắng, vì Zezé đã có một
            người bạn đặc biệt để trút nỗi lòng: cây cam ngọt nơi vườn sau. Và
            cả một người bạn nữa, bằng xương bằng thịt, một ngày kia xuất hiện,
            cho cậu bé nhạy cảm khôn sớm biết thế nào là trìu mến, thế nào là
            nỗi đau, và mãi mãi thay đổi cuộc đời cậu.
          </div>
          <div>
            Mở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong
            những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ
            đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa
            trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu
            đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế
            không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ
            khi ra mắt lần đầu năm 1968 tại Brazil.
          </div>
          <div>Tác giả:</div>
          <div>
            JOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh
            ra trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông
            phải làm đủ nghề để kiếm sống. Nhưng với tài kể chuyện thiên bẩm,
            trí nhớ phi thường, trí tưởng tượng tuyệt vời cùng vốn sống phong
            phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên
            đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là
            tiểu thuyết mang màu sắc tự truyện Cây cam ngọt của tôi. Cuốn sách
            được đưa vào chương trình tiểu học của Brazil, được bán bản quyền
            cho hai mươi quốc gia và chuyển thể thành phim điện ảnh. Ngoài ra,
            José còn rất thành công trong vai trò diễn viên điện ảnh và biên
            kịch.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 5,
      origin: 'Malaysia',
      brand: 'Akemi',
      description: (
        <>
          <div>
            Akemi Cotton Select là các sợi bông tự nhiên được dệt theo kiểu
            sateen để mang lại cảm giác mềm mại và mượt mà hơn sợi bông thông
            thường. Phương pháp dệt cũng cho phép các sợi bông chịu được các sức
            kéo và tăng độ bền.
          </div>
          <div>
            1. Bộ sưu tập có 4 màu: Ash Grey, Dove Mint, Fair Navy, White.
          </div>
          <div>2. Chất liệu: 100% Cotton Sateen.</div>
          <div>3. Mật độ sợi vải: 880TC.</div>
          <div>4. Kích thước:</div>
          <div>
            5. Ra đời từ năm 1992, AKEMI là thương hiệu chăn ga của Malaysia
          </div>
          <div>6. Tính năng</div>
          <div>Kiểm soát độ ẩm.</div>
          <div>Dễ dàng vệ sinh.</div>
          <div>Thoáng khí tốt.</div>
          <div>Bền sau nhiều lần giặt.</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 1,
      origin: 'Pháp',
      brand: 'Tefal',
      description: (
        <>
          <div>Giới thiệu sản phẩm</div>
          <div>Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít</div>
          <div>
            Tùy từng lô hàng sẽ là sản phẩm sẽ có tiếng anh/ tiếng việt, Tuy
            nhiên sẽ luôn luôn có sách hướng dẫn tiếng việt cho quý khách hàng
            dễ dàng thao tác và sử dụng nấu những món ngon cho gia đình bạn
          </div>
          <div>Công suất : 1000W</div>
          <div>Dung tích : 6L</div>
          <div>Lòng nồi chống dính dày lên đến 1,5mm</div>
          <div>
            Van xả hơi dễ dàng sử dụng, an toàn tuyệt đối cho người tiêu dùng
          </div>
          <div>
            Thực đơn nấu đa dạng lên đến 15 chức năng cài đặt sẵn + 2 chế độ nấu
            đặc biệt.
          </div>
          <div>Vỏ bên ngoài bằng nhựa cách nhiệt, an toàn khi sử dụng</div>
          <div>12 chế độ an toàn , an tâm tuyệt đối khi sử dụng</div>
          <div>Nấu nhanh hơn 80% so với nồi thông thường</div>
          <div>Cài đặt thời gian và giữ ấm lên đến 24 tiếng</div>
          <div>
            Sách hướng dẫn sử dụng và sách dạy nấu ăn bằng tiếng việt giúp dễ
            dàng sử dụng và nấu ăn ngon cho cả gia đình
          </div>
          <div>Linh kiện đi kèm : xửng hấp , thìa súp , thìa xới cơm</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 68,
      origin: 'Nhật Bản',
      brand: 'Sony',
      description: (
        <>
          <div>Thiết kế đẹp mắt, hiện đại</div>
          <div>
            Smart Tivi Sony Full HD 50 inch KDL-50W660G mang thiết kế tinh tế,
            dáng vẻ hiện đại, tạo thêm nét sang trọng cho không gian phòng nhà
            bạn. Chiếc tivi 50 inch có chân đế chữ V giúp đứng vững trên mọi bề
            mặt phẳng, màn hình lớn mang đến trải nghiệm hình ảnh đặc sắc hơn.
          </div>
          <div>Tái khám phá mọi chi tiết với chất lượng Full HD</div>
          <div>
            Thưởng thức chương trình giải trí Full HD rõ ràng, sắc nét với
            X-Reality PRO và tính năng Một nút đến YouTube Trong khi phân tích
            các khung hình, mỗi cảnh sẽ được đối chiếu với cơ sở dữ liệu hình
            ảnh đặc biệt của chúng tôi để tinh chỉnh hình ảnh và giảm nhiễu. Xem
            cấu trúc của tòa nhà đã được tăng cường chi tiết như thế nào.
          </div>
          <div>Công nghệ hiển thị TRILUMINOS Display</div>
          <div>
            Màu sắc phong phú và sống động như thật nhờ công nghệ hiển thị
            TRILUMINOS Display và công nghệ xử lý màu sắc hiện đại. Công nghệ
            hiển thị TRILUMINOS sắp xếp có chọn lọc màu sắc trên gam màu rộng
            sẵn có nhờ vào đèn nền được phát triển đặc biệt nên màu sắc sẽ không
            trở nên quá sặc sỡ hoặc thiếu tự nhiên. Những hình ảnh sống động,
            trung thực sẽ khơi gợi cảm xúc của bạn trong từng khung cảnh. Hơn
            thế nữa, Từng cảnh quay trở nên sống động và tràn đầy năng lượng với
            các điểm nhấn sáng hơn, các khoảng tối sâu hơn và tông màu tự nhiên
            hơn với độ tương phản 4K.
          </div>
          <div>
            Công nghệ Motionflow XR 200Hz xử lý cảnh chuyển động nhanh thêm mượt
            mà, chi tiết hơn
          </div>
          <div>Công nghệ xử lý hình ảnh 4K X-Reality PRO</div>
          <div>
            Hơn nữa, Sony 50 inch Full HD KDL-50W660G còn được trang bị nhiều
            công nghệ hình ảnh cao cấp mang tới những trải nghiệm thú vị và ấn
            tượng. Công nghệ X-Reality PRO tái tạo và mang đến những hình ảnh
            hiển thị đẹp nhất, đạt màu sắc và chi tiết như thật khiến bạn phải
            trầm trồ với những khung hình ấn tượng. Các hình ảnh được làm sắc
            nét và tinh tế theo thời gian thực bằng tính năng giảm nhiễu tiên
            tiến, tăng cường chi tiết và công nghệ nâng cấp để đạt được độ rõ
            nét vượt trội.
          </div>
          <div>Màu sắc chân thực, rõ nét hơn với công nghệ HLG</div>
          <div>
            HLG (Hybrid Log Gamma) là một định dạng của hình thức phát sóng
            truyền hình truyền thống được phát triển bởi đài truyền hình BBC
            (Anh) và NHK (Nhật Bản) được thiết kế nhằm tối ưu cho việc truyền
            tải, lưu trữ, tiết kiệm băng thông của đài truyền hình trong việc
            phát sóng các nội dung hình ảnh có HDR cũng như điều chỉnh hình ảnh
            HDR để phù hợp với môi trường xem của bạn.
          </div>
          <div>Công nghệ Dynamic Contrast Enhancer</div>
          <div>
            Công nghệ tăng cường độ tương phản động Dynamic Contrast Enhancer
            dải độ sáng của tivi sẽ được tối ưu hoá liên tục theo từng khung
            hình. Các mức sáng được điều chỉnh theo những gì đang diễn ra trên
            màn hình. Mang đến những khung hình sâu tạo cảm giác chân thực hơn.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 844,
      origin: 'Pháp',
      brand: 'Tefal',
      description: (
        <>
          <div>Giới thiệu sản phẩm</div>
          <div>
            Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng
            Tefal Natura B2266495 24cm
          </div>
          <div>Độ bền vượt trội, có thể sử dụng ít dầu khi nấu ăn</div>
          <div>Bên ngoài được phủ sơn chống dính, dễ dàng làm sạch</div>
          <div>CÔNG NGHỆ THERMO-SPOT Báo nhiệt thông minh</div>
          <div>
            Tay cầm tiện dụng và các cạnh rót, để thuận tiện cho việc nấu nướng
          </div>
          <div>
            Tương thích với bếp gas, hồng ngoại, không tương thích bếp từ
          </div>
          <div>
            Hoàn thiện với tay cầm tiện dụng và các cạnh rót, để thuận tiện cho
            việc nấu nướng
          </div>
          <div>Xuất xứ: Trung Quốc</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',
      discount: '399.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 2789,
      origin: 'Trung Quốc',
      brand: 'Parroti',
      description: (
        <>
          <div>
            Bộ cây lau nhà thông minh tự vắt Parroti Pro PR01 với khả năng lau
            sạch sàn nhà một cách nhanh chóng và nhẹ nhàng, phù hợp với mọi loại
            bề mặt sàn như sàn gạch, sàn gỗ, sàn đá, tường ốp gạch và mặt kính,
            phù hợp với mọi không gian và diện tích nhà ở, bộ cây lau nhà
            Parroti Pro PR01 được thiết kế thông minh và cực kỳ gọn gàng giúp
            tiết kiệm không gian bảo quản đặc biệt là nhà chung cư hoặc các căn
            nhà có không gian hạn chế.
          </div>
          <div>1. ƯU ĐIỂM SẢN PHẨM:</div>
          <div>- Có ngăn giặt sạch nhanh và vắt cực khô</div>
          <div>- Cây lau dài bằng inox không rỉ</div>
          <div>- Tay cầm bằng mút mềm không đau tay</div>
          <div>- Vải lau thấm hút tốt và giữ được tóc, lông động vật</div>
          <div>- Bàn lau lớn có thể xoay 360 độ</div>
          <div>
            - Thiết kế thông minh, gọn gàng và tinh tế, tiết kiệm không gian
          </div>
          <div>
            - Lau nhà mà tay không phải chạm nước và hóa chất tẩy rửa, bảo vệ da
            tay
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 4,
      origin: 'Trung Quốc',
      brand: 'OEM',
      description: (
        <>
          <div>✚ Màu : Nhiều màu</div>
          <div>✚ Tình trạng : mới</div>
          <div>✚ Đồng hồ : nam nữ</div>
          <div>✚ Kích thước mặt : 36mm ; dày 6mm</div>
          <div>✚ Kích thước dây : 2cm</div>
          <div>✚ Chất liệu khung đồng hồ: nhựa</div>
          <div>✚ Chất liệu kính: Chống xước tốt.</div>
          <div>✚ Loại dây đeo: dây nhựa</div>
          <div>✚ Chức năng hiển thị: Giờ, Phút, Giây, ngày, tháng</div>
          <div>✚ Năng lượng: dùng pin</div>
          <div>✚ Khả năng chống nước: chống nước nhẹ</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 617,
      origin: 'Nhật Bản',
      brand: 'Nhà Xuất Bản Kim Đồng',
      description: (
        <>
          <div>
            Như vậy là sau thời gian dài "trong ngóng ngoài trông", cuối cùng
            thì dự án JUJUTSU KAISEN - Manga đình đám nhất tại Nhật Bản năm
            2021, với tổng số lượng sách bán ra lên đến gần 40 triệu bản in (cho
            17 tập) - sẽ chính thức có một cú nổ lớn tại Việt Nam, với tập
            truyện mang tính khởi đầu, đó chính là Vol.0: Trường chuyên chú
            thuật Tokyo!
          </div>
          <div>
            Khốn khổ vì bị oán linh Rika ám, cậu học sinh trung học Yuta Okkotsu
            định kết liễu đời mình. Đúng lúc đó, Gojo Satoru - giáo viên của
            trường chuyên chú thuật, một nơi dạy cách giải trừ “lời nguyền” - đã
            yêu cầu Okkotsu chuyển tới ngôi trường này…!?
          </div>
          <div>
            Mời các bạn cùng bước vào tiền truyện CHÚ THUẬT HỒI CHIẾN - TRƯỜNG
            CHUYÊN CHÚ THUẬT TOKYO nhé!!
          </div>
          <div>
            Hiện JUJUTSU KAISEN đang tiếp tục gây bão với Movie 0 (Chuyển thể từ
            chính tập sách này). Hiện phim đã thu về gần 8 tỉ Yên (Khoảng gần 7
            triệu đô la Mĩ) và bán được 5.617.950 vé trong 18 ngày đầu tiên công
            chiếu tại Nhật!! Đây đã là động lực để bạn rinh tập sách đầy ấn
            tượng này về và hòa mình vào bầu không khí cuồng nhiệt với JUJUTSU
            KAISEN chưa nhỉ!?
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 112,
      origin: 'Việt Nam',
      brand: 'Nhà Xuất Bản Kim Đồng',
      description: (
        <>
          <div>
            Truyện Cho tôi xin một vé đi tuổi thơ là một trong những tác phẩm
            bán chạy nhất nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên
            chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương
            của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà,
            thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong
            lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở
            phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể
            hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.
          </div>
          <div>Tác phẩm đạt giải thưởng văn học Asean 2010.</div>
          <div>
            Cho tôi xin một vé đi tuổi thơ đã được chuyển ngữ sang nhiều thứ
            tiếng như Tiếng Anh, Nhật, Hàn, Thái và phát hành tại nhiều nước thế
            giới.
          </div>
          <div>
            “Một câu chuyện ngụ ngôn làm say lòng người lớn và trẻ em. Cho tôi
            xin một vé đi tuổi thơ sẽ chiếm cảm tình của độc giả Mỹ - Amazon.
          </div>
          <div>
            Tác phẩm đầy mê hoặc này - gợi nhớ đến Hoàng tử bé của Saint-Exupery
            – đã khắc họa một cách tài tình sự đa cảm của tuổi thơ đối lập với
            những phi lý của thế giới người lớn – Publishers Weekly”
          </div>
          <div>
            Phiên bản đặc biệt kỷ niệm 40 năm ngày thành lập NXB Trẻ được in màu
            hoàn toàn với những tranh minh họa mới của họa sĩ Đỗ Hoàng Tường.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#c7c7c7" size={24} />
        </>
      ),
      numReviews: 40,
      origin: 'Indonesia',
      brand: 'Panasonic',
      description: (
        <>
          <div>
            Hiện nay có rất nhiều thiết bị dùng pin . Và Để lựa chọn cho mình
            một loại pin bền bỉ, không chảy rỉ gây hư hại thiết bị thật khó. Tuy
            nhiên , với công nghệ vượt trội về năng lượng và an toàn của mình.
            Pin CR2032 Panasonic đã giải quyết được vấn đề khó khăn đó
          </div>
          <div>
            Sản phẩm chính hãng, đã được thế giới chứng nhận là số 1 về chất
            lượng
          </div>
          <div>THÔNG SỐ KĨ THUẬT</div>
          <div>- Hiệu điện thế : 3 Volt</div>
          <div>- Kích thước : Đường kính 20mm , độ dày 3,2 mm</div>
          <div>- Chất liệu chế tạo : Lithium</div>
          <div>LƯU Ý : BAO BÌ CÓ THỂ THAY ĐỔI TÙY THEO ĐỢT NHẬP HÀNG</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 42,
      origin: 'Việt Nam/Ấn Độ/Trung Quốc (Tùy từng đợt nhập hàng)',
      brand: 'Samsung',
      description: (
        <>
          <div>S Pen cân tất, học chơi hết nấc</div>
          <div>
            Tận hưởng tính năng đột phá và thế hệ S Pen cải tiến thông minh viết
            vẽ như thật. Thiết bị hoàn hảo cho học tập, làm việc và giải trí với
            màn hình 12.4”, vi xử lý Snapdragon 750G, loa kép cùng Pin 10,090mAh
            cho trải nghiệm liền mạch suốt ngày dài.
          </div>
          <div>Nét đẹp từ sự tinh giản</div>
          <div>
            Thiết kế kim loại nguyên khối thanh lịch cùng viền máy mỏng và
            camera tối giản phía sau mang lại trải nghiệm cầm nắm gọn nhẹ trong
            tay và sự tinh tế cho Galaxy Tab S7 FE. Bật lên cá tính trẻ trung
            năng động và đậm dấu ấn riêng với các tone màu pastel Mint thời
            thượng và Black phong cách.
          </div>
          <div>Hình ảnh rực rỡ, âm thanh sống động</div>
          <div>
            Đắm chìm vào không gian giải trí chuẩn điện ảnh với những khung hình
            rực rỡ sắc màu trên màn hình lớn 12.4" của Galaxy Tab S7 FE kết hợp
            với hệ thống loa kép sống động được tinh chỉnh bởi AKG và Dolby
            Atmos mang trải nghiệm nghe nhìn của bạn lên tầm cao mới.
          </div>
          <div>Chiến game hay, làm hăng say</div>
          <div>
            Nhập mọi trận game hấp dẫn và lôi cuốn hơn với Vi xử lý Snapdragon
            750G tám nhân mạnh mẽ và khả năng đa nhiệm đỉnh cao. Ngoài ra, bạn
            còn có thể mở rộng không gian lưu trữ lên đến 1TB với thẻ nhớ
            microSD, giúp lưu giữ mọi điều quan trọng trong một thiết bị duy
            nhất.
          </div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      starReview: (
        <>
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
          <AiFillStar color="#ffd52e" size={24} />
        </>
      ),
      numReviews: 1894,
      origin: 'Mỹ',
      brand: 'NonoStyle',
      description: (
        <>
          <div>
            Mỗi căn bếp gia đình đều phải cần một chiếc máy xay để thuận tiện
            cho việc chế biến các món ăn khác nhau. Đã chọn thì hãy chọn loại
            tốt nhất. Máy xay thịt Nonostyle với nhiều công dụng và tính năng ưu
            việt, chắc chắn sẽ là trợ thủ đắc lực khi bạn vào bếp.
          </div>
          <div>Dung tích cối xay 2L</div>
          <div>
            Dung tích cối xay lên đến 2L có thể xay đủ thực phẩm cho 3-5 người
            dùng thoải mái, tha hồ thưởng thức nhiều món ngon khác nhau.
          </div>
          <div>Hai chức năng xay dễ dàng vận hành</div>
          <div>Công suất 300W, động cơ mạnh mẽ, hai chế độ xay I và II.</div>
          <div>
            Chế độ I: Bánh răng chậm thích hợp xay các thực phẩm mềm: rau củ,
            nấm, ớt.
          </div>
          <div>
            Chế độ II: Bánh răng nhanh thích hợp xay các thực phẩm cứng: thịt,
            hạt cứng, cà rốt.
          </div>
          <div>Công suất mạnh mẽ lên đến 300W</div>
          <div>Tốc độ xay nhanh là ưu điểm vượt trội của máy.</div>
          <div>
            Máy xay đa năng Chigo có công suất 300W, với lõi động cơ làm bằng
            dây đồng.
          </div>
          <div>Chức năng tự động tắt nhiệt bảo vệ người dùng.</div>
          <div>
            Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh
            đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể
            phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
            kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
            trên 1 triệu đồng).....
          </div>
        </>
      ),
      sold: '1000+',
    },
  ],
  products1: [
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
  ],
  products2: [
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',

      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
  ],
  products3: [
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',

      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
  ],
  products4: [
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',

      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
  ],
  products5: [
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',

      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
  ],
  products6: [
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Uchi Tencel Melville Mont, 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-uchi-tencel-melville-mont-5-mon',
      category: 'stuff',
      image: '/product-images/gagiuong.webp',
      price: '2.006.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '2.000.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 2,
      sold: 11,
    },
    {
      name: 'Bàn Gấp Học Sinh Thông Minh Gấp Gọn, Bàn Xếp Laptop Đa Năng Có Thể Gấp Gọn Tùy Chỉnh Nhiều Góc Độ. Chất Liệu Trúc Siêu Nhẹ - Hàng Chính Hãng Tamayoko TM02',
      slug: 'ban-gap-hoc-sinh',
      category: 'stuff',
      image: '/product-images/bangap.webp',
      price: '399.000',
      shop: 'Future Store',
      shopRating: '4.6',
      shopFollows: '2.2k',
      shopIcon: '/pdp-images/future.png',
      shopReviewsNum: '19k',
      discount: '300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 301,
      sold: 908,
    },
    {
      name: 'Màn Hình Cong 1500R Gaming Gigabyte G27FC 27" FullHD (1920x1080) 1ms 165Hz VA Cong Stereo Speaker (2W x 2) - Hàng Chính Hãng',
      slug: 'man-hinh-cong-1550r-gaming-gigabyte',
      category: 'Điện tử',
      image: '/product-images/manhinh.webp',
      price: '5.390.000',
      shop: 'Vi Tinh Chi Cuong',
      shopRating: '4.7',
      shopFollows: '511',
      shopIcon: '/pdp-images/vitinhchicuong.png',
      shopReviewsNum: '2.1k',
      discount: '5.300.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 4,
    },
    {
      name: 'Điện Thoại iPhone 13 Pro Max 128GB - Hàng Chính Hãng',
      slug: 'dien-thoai-iphone-13-pro-max-128gb-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/iphone13.webp',
      price: '29.990.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '29.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 514,
      sold: '1000+',
    },
    {
      name: 'Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng',
      slug: 'tai-nghe-bluetooth',
      category: 'Điện tử',
      image: '/product-images/tainghe.webp',
      price: '5.790.000',
      shop: 'Happystores',
      shopRating: '4.6',
      shopFollows: '798',
      shopIcon: '/pdp-images/happystores.png',
      shopReviewsNum: '3.1k',
      discount: '5.600.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 211,
      sold: 406,
    },
    {
      name: 'Bảng Treo Đồ Nghề Pegboard Cơ Khí SMLIFE WB3 Lưu Trữ Trưng Bày Dụng Cụ Sửa Chữa Thông Minh Dễ Tìm Kiếm',
      slug: 'bang-treo-do-nghe',
      category: 'Dụng cụ cơ khí',
      image: '/product-images/donghe.webp',
      price: '2.169.000',
      shop: 'SMLIFE',
      shopRating: '4.5',
      shopFollows: '850',
      shopIcon: '/pdp-images/smlife.jpg',
      shopReviewsNum: '708',
      discount: '2.100.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2,
      sold: 5,
    },
    {
      name: 'Đồng hồ thể thao nam nữ AT111',
      slug: 'dong-ho-the-thao',
      category: 'Điện tử',
      image: '/product-images/donghothethao.webp',
      price: '18.000',
      shop: 'Thien Hoang Store',
      shopRating: '4.1',
      shopFollows: '341',
      shopIcon: '/pdp-images/thienhoang.png',
      shopReviewsNum: '256',
      discount: '15.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 4,
      sold: 13,
    },
    {
      name: 'Chú Thuật Hồi Chiến: Trường Chuyên Chú Thuật Tokyo - Tập 0',
      slug: 'chu-thuat-hoi-chien',
      category: 'Sách',
      image: '/product-images/chuthuat.webp',
      price: '27.300',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '25.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 617,
      sold: '1000+',
    },
    {
      name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Phiên Bản Đặc Biệt)',
      slug: 'cho-toi-xin-mot-ve-di-tuoi-tho',
      category: 'Sách',
      image: '/product-images/chotoimotve.webp',
      price: '278.500',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '260.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 112,
      sold: 375,
    },
    {
      name: 'Pin Panasonic CR 2032 - Hàng chính hãng',
      slug: 'pin-panasonic-cr-2032',
      category: 'Điện tử',
      image: '/product-images/pin.webp',
      price: '50.000',
      shop: 'Thegioipin88',
      shopRating: '4.7',
      shopFollows: '133',
      shopIcon: '/pdp-images/thegioipin.png',
      shopReviewsNum: '2.3k',
      discount: '45.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 40,
      sold: 624,
    },
    {
      name: 'Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng',
      slug: 'may-tinh-bang',
      category: 'Điện tử',
      image: '/product-images/tablet.webp',
      price: '10.390.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '10.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: 112,
    },
    {
      name: 'Máy Xay Thịt 2 Lưỡi Kép Nonostyle (2L) - Hàng Chính Hãng',
      slug: 'may-xay-tinh',
      category: 'Điện tử',
      image: '/product-images/mayxaythit.webp',
      price: '275.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 42,
      sold: '1000+',
    },
    {
      name: 'Balo công sở, đi làm nam nữ GuBag, dòng balo doanh nhân cao cấp, đẹp xịn, chống nước, chống sốc',
      slug: 'balo-cong-so-di-lam-nam-nu-gubag-dong-balo-doanh-nhanh-cao-cap-dep-xin-chong-nuoc-chong-soc',
      category: 'Balo, túi sách',
      image: '/product-images/balo.webp',
      price: '439.000',
      shop: 'GuBag Official Store',
      shopRating: '4.6',
      shopFollows: '261',
      shopIcon: '/pdp-images/gubag.png',
      shopReviewsNum: '1k',
      discount: '430.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 95,
      sold: 210,
    },
    {
      name: 'Dây nịch Huy Hoàng da bò vân cá sấu nhiều màu sắc',
      slug: 'day-nich-huy-hoang-da-bo-van-ca-sau-nhieu-mau-sac',
      category: 'Quần áo',
      image: '/product-images/daynich.webp',
      price: '559.000',
      shop: 'HuyHoang Shop',
      shopRating: '4.5',
      shopFollows: '93',
      shopIcon: '/pdp-images/huyhoang.png',
      shopReviewsNum: '908',
      discount: '540.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 20,
    },
    {
      name: 'NHẬP KHẨU USA CHÍNH HÃNG - Viên uống ngừa loãng xương, hỗ trợ sức khỏe xương khớp Solgar Vitamin D3 1000 IU',
      slug: 'nhap-khau-usa-chinh-hang-vien-uong-ngua-loang-xuong',
      category: 'Thực phẩm chức năng',
      image: '/product-images/nhansam.webp',
      price: '461.000',
      shop: 'Solgar Official Store',
      shopRating: '4.7',
      shopFollows: '313',
      shopIcon: '/pdp-images/solgar.png',
      shopReviewsNum: '190',
      discount: '450.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 13,
      sold: 47,
    },
    {
      name: 'Tay Cầm PlayStation PS4 Sony Dualshock 4 (Màu Xanh Đen) - Hàng Chính Hãng',
      slug: 'tay-cam-playstation-ps4-sony-dualshock-4-mau-xanh-den-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/ps4.webp',
      price: '1.189.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '1.150.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 7,
      sold: 15,
    },
    {
      name: 'VGA GIGABYTE GTX 1050 Ti Windforce OC 4G -Hàng chính hãng',
      slug: 'vga-gigabyte-gtx-1050-ti-windforce-oc-4g-hang-chinh-hang',
      category: 'Điện tử',
      image: '/product-images/vga.webp',
      price: '5.500.000',
      shop: 'Bách Tung PS',
      shopRating: '4.7',
      shopFollows: '240',
      shopIcon: '/pdp-images/bachtung.png',
      shopReviewsNum: '507',
      discount: '5.450.000',
      rating: 4,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 5,
      sold: 11,
    },
    {
      name: 'Khẩu Trang 3D (10 chiếc), Khẩu Trang 4D KF94 Họa Tiết Thời Trang, Khung Vòm 4D Chống Trôi Son, Dùng Một Lần',
      slug: 'khau-trang-3d-10-chiec-khau-trang-4d-kf94-hoa-tiet-thoi-trang-khung-vom-4d-chong-troi-son-dung-mot-lan',
      category: 'Quần áo',
      image: '/product-images/khautrang.webp',
      price: '9000',
      shop: 'VSeat',
      shopRating: '4.8',
      shopFollows: '279',
      shopIcon: '/pdp-images/vseat.jpg',
      shopReviewsNum: '481',
      discount: '8000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 101,
      sold: '1000+',
    },
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',

      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
  ],
  recommend: [
    {
      name: 'Cây Cam Ngọt Của Tôi',
      slug: 'cay-cam-ngot-cua-toi',
      category: 'Sách',
      image: '/product-images/caycamngot.webp',
      price: '77.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '70.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 8352,
      sold: '1000+',
    },
    {
      name: 'Bộ Ga và Vỏ Gối Akemi Cotton Select Affinity gồm 5 món',
      slug: 'bo-ga-va-vo-goi-akemi-cotton',
      category: 'Nhà cửa',
      image: '/product-images/gagiuong2.webp',
      price: '1.526.000',
      shop: 'Akemi Official Store',
      shopRating: '4.7',
      shopFollows: '400',
      shopIcon: '/pdp-images/akemi.png',
      shopReviewsNum: '74',
      discount: '1.500.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 5,
      sold: 17,
    },
    {
      name: 'Nồi áp suất điện đa năng Tefal CY601868 - 6 Lít - 15 chức năng - Hàng chính hãng',
      slug: 'noi-ap-suat-dien-da-nang-tefal',
      category: 'Điện tử',
      image: '/product-images/noiapsuat.webp',
      price: '1.667.000',
      shop: 'Mỏ Vàng HCM',
      shopRating: '4.6',
      shopFollows: '1k+',
      shopIcon: '/pdp-images/movang.png',
      shopReviewsNum: '1k',
      discount: '1.640.000',
      rating: 3,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#c7c7c7" />
          <AiFillStar color="#c7c7c7" />
        </>
      ),
      numReviews: 1,
      sold: 3,
    },
    {
      name: 'Smart Tivi Sony Full HD 50 inch KDL-50W660G/Z',
      slug: 'smart-tivi-sony',
      category: 'Điện tử',
      image: '/product-images/smarttivi.webp',
      price: '12.288.000',
      shop: 'Tiki Trading',
      shopRating: '4.6',
      shopFollows: '378k+',
      shopIcon: '/pdp-images/tikitrading.png',
      shopReviewsNum: '4.4tr',
      discount: '12.200.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 68,
      sold: 229,
    },
    {
      name: 'Combo Chảo chiên Tefal Natura B2260295 20cm & Chảo chiên sâu lòng Tefal Natura B2266495 24cm - Dùng được trên bếp gas/ bếp hồng ngoại - Công nghệ báo nhiệt thông minh - Hàng chính hãng',
      slug: 'combo-chao-choen',
      category: 'Gia dụng',
      image: '/product-images/combochao.webp',
      price: '399.000',
      shop: 'Tefal Official Store',
      shopRating: '4.6',
      shopFollows: '19k+',
      shopIcon: '/pdp-images/tefal.png',
      shopReviewsNum: '20k',
      discount: '359.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 844,
      sold: '1000+',
    },
    {
      name: 'Bộ Cây Lau Nhà Tự Vắt Thông Minh 2 Ngăn Parroti Pro PR01 Cao Cấp - Lau Sạch Khô Nhanh – 3 Miếng Lau Microfiber',
      slug: 'cay-lau-nha',
      category: 'Gia dụng',
      image: '/product-images/caylaunha.webp',
      price: '499.000',
      shop: 'Parroti Store',
      shopRating: '4.8',
      shopFollows: '4.6k+',
      shopIcon: '/pdp-images/parroti.png',
      shopReviewsNum: '10k',
      discount: '399.000',
      rating: 5,
      starRating: (
        <>
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
          <AiFillStar color="#ffd52e" />
        </>
      ),
      numReviews: 2789,
      sold: '1000+',
    },
  ],

  comments: [
    {
      commenter: 'Huy',
    },
  ],
};
export default data;
