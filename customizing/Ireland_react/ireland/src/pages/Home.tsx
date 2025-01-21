import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 120px);
  margin: 60px 0;
  background: url("/img/banner.jpg") center/cover no-repeat;
`;

const Left = styled.div`
  position: relative;
  width: 55%;
`;

const Tax = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  padding: 10px 5px;
  font-size: 32px;
  font-family: "Kaushan Script", serif;
  background: rgba(255, 255, 255, 0.5);
`;

const Ireland = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 65%;
  padding-right: 15%;
  transform: translateY(-50%) rotate(-20deg);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 45%;

  .swiper {
    padding-top: 15%;
    .swiper-slide {
      height: 400px;
    }

    .swiper-button-prev {
      top: 120% !important;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.6);
      &.swiper-button-prev::after {
        font-weight: bold;
        font-size: 24px;
      }
    }
    .swiper-button-next {
      top: 120% !important;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.6);
      brr &.swiper-button-next::after {
        font-weight: bold;
        font-size: 24px;
      }
    }
    .swiper-slide {
      display: flex;
      align-items: flex-end;
      p {
        padding: 15px;
        font-size: 18px;
        font-weight: 500;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
      }
    }
  }
`;

const activites = [
  {
    id: 1,
    imgPath: "/img/slide/slide_img1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    imgPath: "/img/slide/slide_img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    imgPath: "/img/slide/slide_img3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    imgPath: "/img/slide/slide_img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    imgPath: "/img/slide/slide_img5.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    imgPath: "/img/slide/slide_img6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  return (
    <Container>
      <Left>
        <Tax>Tax free</Tax>
        <Ireland>
          <img src="/img/irelandTxt.png" alt="txt" />
        </Ireland>
      </Left>
      <Right>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {activites.map((activity) => (
            <SwiperSlide
              key={activity.id}
              style={{
                background: `url(${activity.imgPath}) center/cover no-repeat`,
              }}
            >
              <p>{activity.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Right>
    </Container>
  );
};

export default Home;
