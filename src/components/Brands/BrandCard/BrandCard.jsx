import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { Link } from "react-router-dom";

const Example = ({ brand }) => {
    return (
        <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
            <TiltCard brand={brand} />
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ brand }) => {
    const { id, brandName, image } = brand;


    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-dark to-[#1c1919]"
        >
            {/* <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
      </div> */}
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >

                <Link to={`/brand/${id}`} >
                    <div style={{
                        transform: "translateZ(50px)",
                    }} className="card mx-auto">
                        <figure><img src={image} alt="Shoes" className='w-[100px]' /></figure>
                        <div className="card-body">
                            <h2 className="text-lg lg:text-2xl text-yellow-950 font-bold text-center">{brandName}</h2>
                        </div>
                        <FiMousePointer
                            style={{
                                transform: "translateZ(75px)",
                            }}
                            className="mx-auto text-4xl text-orange"
                        />
                        <p
                            style={{
                                transform: "translateZ(50px)",
                            }}
                            className="text-center text-2xl font-bold text-orange"
                        >
                            HOVER ME
                        </p>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Example;