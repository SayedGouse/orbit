
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import './Slider.css';


const Slider = () => {
  const slideRef = useRef(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      desc: "Our cloud solutions are designed to empower your organization with scalable, secure, and cost-effective computing resources.",
      name: "Cloud Solutions",
      img: image1,

    },
    {
      id: 2,
      desc: "Our team of experienced web developers and designers is dedicated to crafting stunning, user-friendly websites that not only look great but also perform seamlessly..",
      name: "Web Developer",
      img: image2,

    },
    {
      id: 3,
      desc: "We assist in your Digital presence in the fast-moving market. Our Digital Marketing team has expertise to ensure your Brand promotion and Brand awareness for Growth and Scaling.",
      name: "Digital Marketing",
      img: image3,

    },
    {
      id: 4,
      desc: "Our team of experienced web developers and designers is dedicated to crafting stunning, user-friendly websites that not only look great but also perform seamlessly.",
      name: "Web Developer",
      img: image2,

    },
    {
      id: 5,
      desc: "We assist in your Digital presence in the fast-moving market. Our Digital Marketing team has expertise to ensure your Brand promotion and Brand awareness for Growth and Scaling.",
      name: "Digital Marketing",
      img: image3,

    },
  ];

  return (
    <div className="container_slider">

      <div id="slide" ref={slideRef}>
        {data.map((item) => (

          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>

        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;


