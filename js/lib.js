//Khai báo để lưu dữ liệu đối tượng
const productList = [
    {id:"01", name:"Yamaha R1", price:"1 tỷ", image:"../assets/images/r1.jpg", productLink:"product-detail.html"},
    {id:"02", name:"Kawasaki Z1000", price:"600 triệu", image:"../assets/images/z1000.jpg", productLink:"product-detail.html"},
    {id:"03", name:"Honda CBR1000RR", price:"950 triệu", image:"../assets/images/cbr.jpg", productLink:"product-detail.html"},
    {id:"04", name:"BMW R1250GS", price:"1.2 tỷ", image:"../assets/images/bmw.jpg", productLink:"product-detail.html"},
    {id:"05", name:"Harley 883", price:"500 triệu", image:"../assets/images/harley.jpg", productLink:"product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
//1.Tạo khung chứa 1 item
const productItem = document.createElement("div");
productItem.setAttribute("class","product-item");

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
productLink.setAttribute("href", hyperLink);
productLink.setAttribute("class", "btn");

//Gán paragraph 1,2 vào link trong khung
productInfo.appendChild(productName);
productInfo.appendChild(productPrice);
productInfo.appendChild(productLink);

productItem.appendChild(productImage);
productItem.appendChild(productInfo);

document.getElementById("product-list").appendChild(productItem);
}
