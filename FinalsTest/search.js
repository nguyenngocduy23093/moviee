import express from 'express';

const express = require('express');
const app = express();


const phimData = [
    {
      "ID": 1,
      "tên": "Avengers: Trò chơi kết thúc",
      "thời gian": 181,
      "năm": 2019,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/1.jpg",
      "giới thiệu": "Sau sự kiện Thanos quét sạch nửa vũ trụ, các siêu anh hùng còn sống phải tìm cách đảo ngược thảm họa và khôi phục lại thế giới."
    },
    {
      "ID": 2,
      "name": "Người nhện: Không đường về nhà",
      "thời gian": 150,
      "năm": 2021,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/2.jpg",
      "giới thiệu": "Sau khi được tiết lộ danh tính, Peter Parker phải đối mặt với những hậu quả không xuất hiện trước khi thực hiện một chuyến phiêu lưu du hành giữa các vũ trụ bài hát."
    },
    {
      "ID": 3,
      "tên": "Hiệp sĩ bóng đêm",
      "thời gian": 152,
      "năm": 2008,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/3.jpg",
      "giới thiệu": "Batman phải đối mặt với một tên tội phạm tâm thần nguy hiểm, Joker, khi anh ta đe dọa làm lắng đọng Thành phố Gotham bằng cách tạo ra chuỗi khối loạn."
    },
    {
      "ID": 4,
      "tên": "Khởi đầu",
      "thời gian": 148,
      "năm": 2010,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/4.jpg",
      "giới thiệu": "Một trộm tài lẻ có khả năng xâm nhập vào giấc mơ của người khác để ăn trộm bí mật doanh nghiệp được giao nhiệm vụ cắt giảm một ý tưởng vào tâm trí của một người."
    },
    {
      "ID": 5,
      "tên": "Liên vì sao",
      "thời gian": 169,
      "năm " :2014,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/5.jpg",
      "introduce": "Trong tương lai, khi Trái Đất trở về nên không thể sống được, một nhóm nhà du hành không gian đồng ý thực hiện một nhiệm vụ cuối cùng là tìm kiếm một hành tinh mới cho người."
    },
    {
      "ID": 6,
      "tên": "Tiểu thuyết bột giấy",
      "thời gian": 154,
      "năm": 1994,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/6.jpg",
      "giới thiệu": "Câu chuyện không theo trình tự thời gian của một nhóm tội phạm, nhân viên nhà hàng và võ sĩ đấu vật khi họ tiếp xúc với thế giới ranh giới của Los Angeles."
    },
    {
      "ID": 7,
      "tên": "Sự chuộc lỗi của Shawshank",
      "thời gian": 142,
      "năm": 1994,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/7.jpg",
      "giới thiệu": "Một người đàn ông bị kết án oan trong một kẻ giết người và gửi đến nhà tù Shawshank, nơi anh ta tìm thấy sự hy vọng và sự tự do qua các tình huống mà bạn không thể tưởng tượng được."
    },
    {
      "ID": 8,
      "tên": "Bố già",
      "thời gian": 175,
      "năm": 1972,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/8.jpg",
      "giới thiệu": "Một gia đình mafia Ý đấu tranh để bảo vệ và mở rộng chế độ tội phạm của họ ở khu vực bổ sung của New York."
    },
    {
      "ID": 9,
      "name": "Chúa tể của những chiếc nhẫn: Hiệp hội những chiếc nhẫn",
      "thời gian": 178,
      "năm": 2001,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/9.jpg",
      "giới thiệu": "Một nhóm người hùng bất đắc dĩ hợp tác để phá hủy một chiếc nhẫn cổ ma thuật và chống lại tên chúa chúa tà ác Sauron."
    },
    {
      "ID": 10,
      "tên": "Câu lạc bộ chiến đấu",
      "thời gian": 139,
      "năm": 1999,
      "hình ảnh": "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/10.jpg",
      "giới thiệu": "Một người mắc chứng rối loạn nhân cách tìm đường thoát qua việc tham gia vào một câu lạc bộ chiến đấu bí mật và đặt ra một kế hoạch phá hoại xã hội."
    }
  ]

app.get('/api/phim/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = phimData.filter(phim => phim.tên.toLowerCase().includes(query));
    res.json(results);
});

module.exports = app;
