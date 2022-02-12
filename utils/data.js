var a = 157000;
var b = 13650000;
var c = 192000;
var d = 9450000;
var e = 157000;
var f = 189000;
console.log(a.toLocaleString());
const data = {
  products: [
    {
      name: 'Găng tay da nam',
      slug: 'gang-tay-da-nam',
      category: 'clothing',
      image: '/images/gloves.png',
      price: a.toLocaleString(),
      shop: 'Viewshop36',
      rating: 5,
      numReviews: 7,
      sold: 17,
    },
    {
      name: 'Điện thoại Iphone 11',
      slug: 'dien-thoai-iphone-11',
      category: 'electronics',
      image: '/images/phone.png',
      price: b.toLocaleString(),
      shop: 'Tiki Trading',
      rating: 5,
      numReviews: 353,
      sold: 1000,
    },
    {
      name: 'Găng tay đi xe máy giữ ấm mùa đông cảm ứng điện thoại dành cho nam',
      slug: 'gang-tay-di-xe-may-giu-am-mua-dong-cam-ung-dien-thoai-danh-cho-nam',
      category: 'clothing',
      image: '/images/gloves2.png',
      price: c.toLocaleString(),
      shop: 'Winshop36',
      rating: 5,
      numReviews: 1,
      sold: 11,
    },
    {
      name: 'iPad 10.2 Inch WiFi 64GB (Gen 9) New 2021',
      slug: 'ipad-10-2-inch-wifi-65gb-new-2021',
      category: 'electronics',
      image: '/images/ipad.png',
      price: d.toLocaleString(),
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
      price: e.toLocaleString(),
      shop: 'TikiTrading',
      rating: 5,
      numReviews: 742,
      sold: 1000,
    },
    {
      name: 'Nước dưỡng làm mềm và trắng da Senka White Beauty Lotion',
      slug: 'nuoc-duong-lam-mem-va-trang-da-senka-white-beauty-lotion',
      category: 'stuff',
      image: '/images/skincare.png',
      price: f.toLocaleString(),
      shop: 'Senka Official Store',
      rating: 5,
      numReviews: 39,
      sold: 130,
    },
  ],
};
export default data;
