//Khai báo để lưu dữ liệu đối tượng
const productList = [
  {
    id: "01",
    name: "Yamaha R1",
    price: "1 tỷ",
    image: "../assets/images/r1.jpg",
    productLink: "product-detail.html",
    desc: "Yamaha YZF-R1 là mẫu superbike đỉnh cao, thừa hưởng công nghệ từ đường đua MotoGP, mang đến trải nghiệm tốc độ thuần túy cho các tay lái đam mê. Xe trang bị động cơ Crossplane 4 xi-lanh thẳng hàng, dung tích 998cc, sản sinh công suất ấn tượng, giúp xe bứt tốc mạnh mẽ và âm thanh đặc trưng không thể nhầm lẫn. Thiết kế khí động học với dàn áo sắc sảo, tích hợp đèn pha LED ẩn, tạo vẻ ngoài hung dữ và tối ưu hóa lực ép xuống đường. R1 sở hữu hàng loạt công nghệ hỗ trợ lái điện tử cao cấp như hệ thống kiểm soát lực kéo (TCS), kiểm soát bốc đầu (LIF), và hệ thống sang số nhanh (QSS) 2 chiều. Khung sườn Deltabox nhôm siêu nhẹ cùng hệ thống treo KYB cao cấp mang lại khả năng ôm cua chính xác và ổn định ở tốc độ cao. Đây là lựa chọn hàng đầu cho những ai tìm kiếm một mẫu xe đua đường phố đúng nghĩa, kết hợp hoàn hảo giữa sức mạnh, công nghệ và thiết kế thời thượng."
  },
  {
    id: "02",
    name: "Kawasaki Z1000",
    price: "600 triệu",
    image: "../assets/images/z1000.jpg",
    productLink: "product-detail.html",
    desc: "Kawasaki Z1000, 'vua đường phố' (Sugomi style), là mẫu naked-bike đình đám với thiết kế cơ bắp, hầm hố, thu hút mọi ánh nhìn ngay từ cái nhìn đầu tiên. Xe được trang bị khối động cơ 4 xi-lanh, 1.043cc, cho mô-men xoắn mạnh mẽ ở dải vòng tua thấp và trung, cực kỳ lý tưởng cho việc di chuyển trong đô thị cũng như bứt tốc trên cao tốc. Tư thế ngồi lái thẳng, linh hoạt, kết hợp với ghi-đông rộng giúp người lái dễ dàng điều khiển trong điều kiện giao thông đông đúc. Hệ thống treo Showa có thể điều chỉnh và phanh ABS tích hợp đảm bảo an toàn tối đa. Đèn pha LED dữ dằn cùng bình xăng gồ cao tạo nên ngôn ngữ thiết kế Sugomi đặc trưng, mang lại vẻ ngoài uy lực. Z1000 không chỉ là phương tiện di chuyển mà còn là tuyên ngôn cá tính mạnh mẽ của người sở hữu, cân bằng hoàn hảo giữa sức mạnh thuần túy và khả năng kiểm soát linh hoạt trên mọi cung đường."
  },
  {
    id: "03",
    name: "Honda CBR1000RR",
    price: "950 triệu",
    image: "../assets/images/cbr.jpg",
    productLink: "product-detail.html",
    desc: "Honda CBR1000RR Fireblade là biểu tượng của sự cân bằng hoàn hảo giữa sức mạnh, hiệu suất và khả năng điều khiển thân thiện, theo triết lý 'Total Control'. Xe sử dụng động cơ 4 xi-lanh thẳng hàng 999cc, được tinh chỉnh để cung cấp sức mạnh mượt mà nhưng đầy uy lực. Trọng lượng xe nhẹ, khung nhôm đôi linh hoạt cùng hệ thống treo Showa hàng hiệu mang lại cảm giác lái chính xác, tự tin cả trên đường đua lẫn đường phố. Thiết kế Fireblade mang đậm nét thể thao, gọn gàng và tối ưu khí động học. Các công nghệ hỗ trợ hiện đại như HSTC (Kiểm soát lực xoắn Honda), phanh động cơ (EB), và IMU 5 trục giúp nâng cao độ an toàn và trải nghiệm người lái. Đây là mẫu superbike không chỉ dành cho các tay lái chuyên nghiệp mà còn dễ tiếp cận với những người mới làm quen với phân khúc 1000cc, mang lại sự tin cậy tuyệt đối đúng chuẩn Honda."
  },
  {
    id: "04",
    name: "BMW R1250GS",
    price: "1.2 tỷ",
    image: "../assets/images/bmw.jpg",
    productLink: "product-detail.html",
    desc: "BMW R1250GS là 'ông vua' dòng Adventure, mẫu xe đa dụng hoàn hảo cho những chuyến đi dài ngày và địa hình phức tạp. Trái tim của xe là động cơ Boxer 2 xi-lanh đối xứng, dung tích 1.254cc, tích hợp công nghệ van biến thiên ShiftCam đột phá, mang lại mô-men xoắn dồi dào ở mọi dải tua máy và tiết kiệm nhiên liệu tối ưu. R1250GS trang bị hàng loạt công nghệ đỉnh cao: màn hình TFT kết nối smartphone, các chế độ lái Pro, hệ thống treo điện tử ESA tự động điều chỉnh, và phanh ABS Pro trong cua. Thiết kế đặc trưng với 'mỏ chim', bình xăng lớn và tư thế ngồi lái cao ráo, thoải mái cho cả người lái và người ngồi sau trên quãng đường dài. Khả năng cân bằng xuất sắc nhờ trọng tâm thấp, cùng hệ thống truyền động trục các-đăng bền bỉ, giúp R1250GS chinh phục mọi địa hình từ sa mạc đến đèo núi hiểm trở. Đây là lựa chọn số 1 cho các tín đồ đam mê xê dịch."
  },
  {
    id: "05",
    name: "Harley 883",
    price: "500 triệu",
    image: "../assets/images/harley.jpg",
    productLink: "product-detail.html",
    desc: "Harley-Davidson Iron 883 là mẫu Sportster mang phong cách Bobber hoài cổ, mạnh mẽ và đầy cá tính, là cánh cửa hoàn hảo bước vào thế giới Harley-Davidson. Xe trang bị động cơ Evolution V-Twin 883cc đặc trưng, làm mát bằng không khí, mang lại âm thanh trầm đục, uy lực và cảm giác lái chân thực. Thiết kế tối giản với tông màu tối (Dark Custom), bình xăng hình hạt đậu, yên đơn thấp và tay lái ngang, tạo tư thế lái đậm chất 'bụi bặm', tự do. Iron 883 cực kỳ linh hoạt trong đô thị nhờ trọng lượng tương đối nhẹ so với các dòng Harley khác và khả năng phản hồi ga mượt mà. Hệ thống treo được tinh chỉnh, bánh xe nan hoa hầm hố cùng hệ thống phanh an toàn. Đây không chỉ là một chiếc xe, mà là phong cách sống, dành cho những ai tìm kiếm sự tự do, cá tính nổi bật và nét đẹp vượt thời gian của dòng xe cơ bắp Mỹ."
  }
];


function addProduct(id, name, price, image, hyperLink)
{
//1.Tạo khung chứa 1 item
const productItem = document.createElement("div");
productItem.setAttribute("class","product-item col");

 //2.Tạo khung chứa hình
const productImage = document.createElement("div");
productImage.setAttribute("class","product-image");

//3.Tạo đối tượng hình ảnh
const Image = document.createElement("img");
Image.setAttribute("src", image);
Image.setAttribute("alt", name);
Image.setAttribute("class", "img-fluid");

//4.Gán hình vào khung
productImage.appendChild(Image);

//5.Tạo khung chứa thông tin
const productInfo = document.createElement("div");
productInfo.setAttribute("class", "product-info");

//Tạo paragraph1
const productName = document.createElement("p");
const productNameText = document.createTextNode(name);
productName.appendChild(productNameText);

//Tạo paragraph2
const productPrice = document.createElement("p");
const productPriceText = document.createTextNode(price);
productPrice.appendChild(productPriceText);


//Tạo hyperLink
const productLink = document.createElement("a");
const productLinkText = document.createTextNode("Xem chi tiết");
productLink.appendChild(productLinkText);
productLink.setAttribute("href", hyperLink + "?id=" + id);
productLink.setAttribute("class", "btn");

//Gán paragraph 1,2 vào link trong khung
productInfo.appendChild(productName);
productInfo.appendChild(productPrice);
productInfo.appendChild(productLink);

productItem.appendChild(productImage);
productItem.appendChild(productInfo);

document.getElementById("product-list").appendChild(productItem);
}
