import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ======== About Image ======== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======= About content ======= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Tự hào là một trong những đơn vị hàng đầu
            </h2>
            <p className="text__para">
              là bệnh viện đa khoa nổi tiếng tại khu vực phía Bắc, được đông đảo
              người dân tin tưởng lựa chọn. Với lịch sử phát triển và những
              thành tựu đáng kể trong lĩnh vực y học, bệnh viện đã từng bước
              khẳng định vai trò quan trọng trong việc cung cấp dịch vụ chăm sóc
              sức khỏe cộng đồng.
            </p>
            <p className="text__para mt-[30px]">
              Nếu đang có nhu cầu khám chữa bệnh tại đây, bạn có thể tham khảo
              lịch khám cũng như quy trình khám bệnh trong bài viết dưới đây
              nhé!
            </p>
            <Link to="/"><button className="btn">Tìm hiểu kĩ hơn</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
