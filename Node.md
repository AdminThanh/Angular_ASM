# ĐẶT VẤN ĐỀ
Hãy xây dựng một ứng dụng quản lý dự án cho doanh nghiệp. Ứng dụng giúp người
sử dụng thực hiện quản lý dự án theo nhóm. Nhóm trưởng thực hiện tạo dự án,
thành viên trong nhóm tạo task và quản lý tiến độ task đã tạo .

# Yêu Cầu Chức Năng:

**Trưởng nhóm – Team leader:**
Có quyền tạo và quản lý dự án, xem tổng quan về
team mình quản lý, như thống kê số nhân viên, nhân viên theo khu vực, chi phí của
dự án.
**Nhân viên - Employee:**
Nhân viên trong team được phép tạo và quản lý task của
dự án.
**Đăng nhập:**
Người dùng phải đăng nhập, tương ứng với vai trò là leader hoặc
employee ứng dụng thực hiện phân quyền phù hợp.
**Quản lý task:**
employee có thể tạo, thay đổi tình trạng của task

# Phân tích yêu cầu

**leader** 
    - Xem Dự án, quản lý team:
    - Thống kê số nhân viên, nhân viên theo khu vực, chi phí của dự án

**employee**

    - Nhân viên trong team được phép tạo và quản lý task của dự án.
    - Quản lý task: employee có thể tạo, thay đổi tình trạng của task

**Đăng nhập:** 
    - Người dùng phải đăng nhập, tương ứng với vai trò là leader hoặc 
employee ứng dụng thực hiện phân quyền phù hợp


# Database
**User**
    Id, Name, Quyền, Token
**chức năng**
    Thêm cwwhwscaw năng xóa sửa