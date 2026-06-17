const product = [
    {
        name: "Siting Dâu",
        price: 247.200,
        description: "Nước Ngọt Có Gas Siting Dâu",
        image: "../assets/images/stinhdau.jpg",
        link: "chi-tiet.html"
    },
    {
        name: "Siting Dâu 1",
        price: 247.200,
        description: "Nước Ngọt Có Gas Siting Dâu",
        image: "../assets/images/stinhdau.jpg",
        link: "chi-tiet.html"
    },
    {
        name: "Sitng Dâu 2",
        price: 247.200,
        description: "Nước Ngọt Có Gas Siting Dâu ",
        image: "../assets/images/stinhdau.jpg",
        link: "chi-tiet.html"
    },
    {
        name: "Sitng Dâu 3",
        price: 247.200,
        description: "Nước Ngọt Có Gas Siting Dâu",
        image: "../assets/images/stinhdau.jpg",
        link: "chi-tiet.html"
    }
];

function createItem(obj) {
    const productListContainer = document.getElementById("product-list");
    
    const item = document.createElement("div");
    item.setAttribute("class", "item");

    // Tạo một container chứa hình ảnh có class = "image"
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image");

    const img = document.createElement("img");
    img.setAttribute("src", obj.image); 
    img.setAttribute("alt", "Nước ngọt giải khác Sting dâu");
    img.setAttribute("style", "width:100%; max-width:150px"); 
    
    containerImage.appendChild(img);

    // Tạo 1 container chứa thông tin sản phẩm 
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    // Tên sản phẩm
    const nameProduct = document.createElement("h2");
    nameProduct.innerHTML = obj.name;
    nameProduct.setAttribute("class", "card-title text-danger");

    // Tạo <p> chứa giá sản phẩm 
    const price = document.createElement("p");
    price.innerHTML = obj.price + "/1 Thùng";

    // Tạo <p> mô tả sản phẩm
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo liên kết xem chi tiết 
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link);

    // Gắn 4 con vào khung Info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // Thêm các khung nhỏ vào item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // Đưa item vào vùng chứa product-list trên giao diện
    productListContainer.appendChild(item);
}

function loadAllproducts(objArray) {
    let i;
    for (i = 0; i < objArray.length; i++) {
        createItem(objArray[i]);
    }
}