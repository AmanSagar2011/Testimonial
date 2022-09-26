import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        //  grabCursor={true}
        loop={true}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* card-1 */}
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Engineer</h4>
              <div className="company-logo">
                <img src="google.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-2*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer</h4>
              <div className="company-logo">
                <img src="amazon.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-3*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer Intern</h4>
              <div className="company-logo">
                <img src="microsoft.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-4*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer</h4>
              <div className="company-logo">
                <img src="amazon.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-5*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Engineer</h4>
              <div className="company-logo">
                <img src="google.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-6*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer Intern</h4>
              <div className="company-logo">
                <img src="microsoft.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-7*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Engineer</h4>
              <div className="company-logo">
                <img src="google.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-8*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer Intern</h4>
              <div className="company-logo">
                <img src="microsoft.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* card-9*/}
        <SwiperSlide>
          <div className="card">
            {/*  Client Avatar */}
            <div className="avatar">
              <figure>
                <img src="avatar2.jpg" alt="client avatar" />
              </figure>
            </div>
            {/* client Details */}
            <div className="client-details">
              <p>Aman Sagar</p>
              <h4>Software Developer</h4>
              <div className="company-logo">
                <img src="amazon.svg" alt="" />
              </div>
            </div>
            {/* Client message (review) */}
            <div className="client-msg">
              <p>
                {" "}
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                asperiores possimus beatae, numquam architecto itaque
                consequuntur earum pariatur velit modi obcaecati at expedita
                nesciunt voluptatibus. Officiis laboriosam error perspiciatis
                adipisci nesciunt porro necessitatibus laborum facilis minima
                quia, inventore eos, a accusamus voluptates aspernatur odit ad
                incidunt voluptatem ab? Maiores quis voluptatibus nulla
                doloremque nam debitis quae ipsum eum numquam temporibus. "
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* card ends */}
      </Swiper>
    </>
  );
}
