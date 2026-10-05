const price = 4500;

const queue = ['29A-112.33', '30E-889.12', '51K-678.99'];

// Lấy xe đến trước ra trước
if (queue.length > 0) {
    const car = queue.shift();
    console.log('Xe được điều phối vào sạc:', car);
} else {
    console.log('Không có xe đang chờ');
}

// Danh sách số điện đã sạc
const kwhList = [45.2, 30.5, 62.8, 28.0];

let totalKwh = 0;

// Tính tổng số điện
for (let i = 0; i < kwhList.length; i++) {
    totalKwh = totalKwh + kwhList[i];
}

// Tính doanh thu
let revenue = totalKwh * price;

console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', revenue, 'VNĐ');