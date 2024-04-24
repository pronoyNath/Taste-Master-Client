import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BrandCarousel = ({product}) => {
    const [advertisementData, setAdvertisementData] = useState([]);

    useEffect(() => {
        if(product?.advertisements ){
            const advertisements = product.advertisements.map((advertisement, index) => advertisement);
        setAdvertisementData(advertisements);
        }
        
      }, [product]);
    //   console.log(advertisementData);
    
  return (
    <div className="">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel cards={advertisementData}/>
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = ({cards}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default BrandCarousel;

// const cards = [
//   {
//     url: "https://i.ibb.co/6bDQHzv/Cherry-Coca-Cola-330ml-12920.webp",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "https://i.ibb.co/p2SX34t/cokeclassic-650x0-padded-fff.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "https://i.ibb.co/rfWTB4Z/ccard1.png",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "https://i.ibb.co/1QL30RK/pep2.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "https://i.ibb.co/6bDQHzv/Cherry-Coca-Cola-330ml-12920.webp",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "https://i.ibb.co/p2SX34t/cokeclassic-650x0-padded-fff.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "https://i.ibb.co/1QL30RK/pep2.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];