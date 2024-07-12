/* Change slider */
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0; // sử dụng vị trí hiện tại của slider
let lengtItems = items.length - 1; // lưu trữ số lượng các mục trong slider

// điều kiện: nếu mục đã ở cuối cùng thì slider sẽ quay lại mục đầu tiên
next.onclick = function () {
  if (active + 1 > lengtItems) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
};
// điều kiện: nếu ở mục đầu tiên thì slider sẽ chuyển đến mục cuối dùng
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengtItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
// tạo hàm cập nhật vị trí của slider dựa trên giá trị biến active
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px"; // cập nhật vị trí hiển thị bằng giá trị âm giúp hiệu ứng trượt sang trái hoặc phải
  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

/* Change tabs shop */
const tabs = document.querySelectorAll(".tab-btn");
//lệnh này lấy tất cả các phần tử DOM có class là tab-btn và lưu chúng vào biến tabs.
const all_content = document.querySelectorAll(".content");
//lệnh này lấy tất cả các phần tử DOM có class là content và lưu chúng vào biến all_content.
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    }); //đây là một event listener được thêm vào mỗi tab. Khi tab được nhấp vào, hàm bên trong sẽ được thực thi.
    tab.classList.add("active");
    // tab vừa được nhấp vào sẽ được thêm class active, có thể làm cho tab đó được highlight hoặc hiển thị khác biệt so với các tab khác.
    var line = document.querySelector(".line");
    // lấy phần tử DOM có class là line, là một thanh chỉ báo dưới tab hiện tại.
    line.style.width = e.target.offsetWidth + "px";
    // đặt chiều rộng của thanh chỉ báo bằng chiều rộng của tab được nhấp vào.
    line.style.left = e.target.offsetLeft + "px";
    // đặt vị trí trái của thanh chỉ báo sao cho nó căn chỉnh với tab được nhấp vào
    all_content.forEach((content) => {
      content.classList.remove("active"); //Xoá class active khỏi tất cả các phần nội dung làm cho chúng không hiển thị
    });
    all_content[index].classList.add("active"); // thêm class active để hiển thị nội dung khi ấn vào
  });
});

/* 
  Menu responsive side bar
*/
function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
