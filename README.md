1. Phân tích lỗi
- `pop()` lấy xe cuối mảng -> sai FIFO. Sửa thành `shift()` để lấy xe đầu tiên
- `i <= length` làm truy cập phần tử không tồn tại -> `undefined` và kết quả thành `NaN`. Sửa thành `i < length`

2. Test Cases
- Test 1: ['29A', '30E', '51K'] :
Sai: lấy 51K
Đúng: lấy 29A

- Test 2: [45.2, 30.5, 62.8, 28] :
Sai: NaN
Đúng: 166.5 kWh, doanh thu 749250 VNĐ

- Test 3: [] :
Kết quả: Không có xe đang chờ

- Test 4: ['29A'] :
Kết quả: Lấy xe 29A