const product = [
    {
        name: "Sting Dâu",
        price: 247200,
        description: "Nước Ngọt Có Gas Sting Dâu hương vị thơm ngon bùng nổ.",
        image: "../assets/images/stinhdau.jpg"
    },
    {
        name: "Sting Gold",
        price: 208000,
        description: "Nước Ngọt Có Gas Sting Gold tăng cường năng lượng.",
        image: "../assets/images/nuocngotlonstinggold.jpg"
    },
    {
        name: "Pepsi",
        price: 180000,
        description: "Nước Ngọt Không Calo Pepsi giải nhiệt sảng khoái không lo tăng cân.",
        image: "../assets/images/pepsikhongcalothung.jpg"
    },
    {
        name: "7 Up",
        price: 247200,
        description: "Nước Ngọt Có Gas 7Up Vị Chanh thanh mát, đập tan cơn khát.",
        image: "../assets/images/nuocngotsodachanh7up.jpg"
    }
];

function loadAllproducts(objArray) {
    const productListContainer = document.getElementById("product-list");
    // Tạo hàng (row) của Bootstrap, gộp khoảng cách các card (g-4)
    productListContainer.className = "row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3";
    productListContainer.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    objArray.forEach((item, id) => {
        // Tạo cột (col) cho mỗi sản phẩm
        const col = document.createElement("div");
        col.className = "col";

        // Tạo cấu trúc Card đẹp mắt của Bootstrap 5
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden text-center justify-content-between p-3">
                <div class="d-flex align-items-center justify-content-center" style="height: 200px;">
                    <img src="${item.image}" class="card-img-top img-fluid" alt="${item.name}" style="max-height: 180px; object-fit: contain;">
                </div>
                <div class="card-body d-flex flex-column justify-content-between px-2 pb-0">
                    <div>
                        <h5 class="card-title fw-bold text-dark text-truncate mb-2">${item.name}</h5>
                        <p class="card-text text-danger fw-bold fs-5 mb-2">${item.price.toLocaleString('vi-VN')} đ/Thùng</p>
                        <p class="card-text text-muted small text-truncate-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 40px;">
                            ${item.description}
                        </p>
                    </div>
                    <div class="mt-3">
                        <a href="trangchitiet.html?id=${id}" class="btn btn-outline-danger w-100 rounded-pill fw-bold py-2 transition-all">
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        `;
        productListContainer.appendChild(col);
    });
}