import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/About";
import ServiceList from "../components/service/ServiceList";
import DoctorList from "../components/doctors/DoctorList";
import FaqList from "../components/faq/faqList";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ====== Hero section ======*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ======== Hero content ========= */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Chúng tôi mong muốn bệnh nhân có một cuộc sống khỏe mạnh hơn.
                </h1>

                <p className="text__para">
                  Bác sĩ là những người vì mục đích cao đẹp và sự sống của bệnh
                  nhân mà họ luôn làm việc với trách nhiệm và tâm huyết.
                </p>

                <button className="btn">Đặt lịch khám</button>
              </div>

              {/* ======= Hero counter ======= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Năm kinh nghiệm</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Cơ sở</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Bệnh nhân hài lòng</p>
                </div>
              </div>
            </div>
            {/* ======== Hero content ========= */}
            <div className="flex gap-[30px] justify-end">
              <img className="w-full" src={heroImg01} alt="Ảnh bác sĩ" />
            </div>
            <div className="mt-[30px]">
              <img
                className="w-full mb-[30px]"
                src={heroImg02}
                alt="Ảnh bác sĩ"
              />
              <img className="w-full" src={heroImg03} alt="Ảnh bác sĩ" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Hero section ======*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Cung cấp các dịch vụ y tế tốt nhất
            </h2>
            <p className="text__para text-center">
              Cung cấp dịch vụ chăm sóc khỏe hàng đầu, giúp bệnh nhân an tâm về
              sức khỏe của mình.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Tìm kiếm bác sĩ
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                chăm sóc đẳng cấp thế giới cho mọi người. Hệ thống y tế của
                chúng tôi cung cấp dịch vụ chăm sóc sức khỏe chuyên nghiệp, chưa
                từng có. Từ phòng thí nghiệm đến phòng khám
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Đặt lịch hẹn
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                chăm sóc đẳng cấp thế giới cho mọi người. Hệ thống y tế của
                chúng tôi cung cấp dịch vụ chăm sóc sức khỏe chuyên nghiệp, chưa
                từng có. Từ phòng thí nghiệm đến phòng khám
              </p>

              <Link
                to="/login"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                chăm sóc đẳng cấp thế giới cho mọi người. Hệ thống y tế của
                chúng tôi cung cấp dịch vụ chăm sóc sức khỏe chuyên nghiệp, chưa
                từng có. Từ phòng thí nghiệm đến phòng khám
              </p>

              <Link
                to="/contact"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ====== Service section ====== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Dịch vụ y tế của chúng tôi</h2>
            <p className="text__para text-center">
              Cung cấp dịch vụ chăm sóc khỏe hàng đầu, giúp bệnh nhân an tâm về
              sức khỏe của mình.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ====== Service section end ====== */}

      {/* ====== Feature section ====== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ===== Feature content ===== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Được điều trị <br /> bất cứ lúc nào
              </h2>

              <ul className="pl-4">
                <li className="text__para">1. Hẹn lịch khám trực tiếp.</li>
                <li className="text__para">
                  2. Tìm kiếm bác sĩ ở đây và liên hệ với văn phòng của họ.
                </li>
                <li className="text__para">
                  3. Sử dụng công cụ đặt lịch online để đặt lịch khám bất cứ lúc
                  nào.
                </li>
              </ul>

              <Link to="/">
                <button className="btn">Tìm hiểu thêm</button>
              </Link>
            </div>

            {/* ======= Feature images ======== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 
                              lg:pt-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00Am
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] 
                                  lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] 
                lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full text-center"
                >
                  Tư Vấn
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Feature section end ====== */}

      {/* ====== Our great doctors ====== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Các bác sĩ hàng đầu</h2>
            <p className="text__para text-center">
              Cung cấp dịch vụ chăm sóc khỏe hàng đầu, giúp bệnh nhân an tâm về
              sức khỏe của mình.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* ====== Faq section ====== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Các câu hỏi phổ biến</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ====== Faq section end ====== */}

      {/* ======= testimonial ======= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              Cung cấp dịch vụ chăm sóc khỏe hàng đầu, giúp bệnh nhân an tâm về
              sức khỏe của mình.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* ======= testimonial end ======= */}
    </>
  );
};

export default Home;