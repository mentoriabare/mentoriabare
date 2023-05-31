import { motion } from "framer-motion";

import arrowRight from "../assets/main_arrow_right.svg";
import arrowLeft from "../assets/main_arrow_left.svg";
import circle from "../assets/main_circle.svg";
import hat from "../assets/main_hat.svg";
import ComoParticipar from "./ComoParticipar";

function QuemSomos() {
  return (
    <section className="flex flex-col items-center justify-center sm:mt-[-40px] mt-[-30px] z-0 overflow-hidden w-full h-full">
      <div className="flex justify-center items-center text-[#DEF2D6] pt-40 sm:mt-20 2xl:mt-40 z-10 w-full ">
        <motion.img
          src={circle}
          animate={{
            scale: [1, 1.1, 1.05, 1.15, 1.05, 1.1, 1],
            rotate: [0, 5, 15, 5, -10, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            loop: Infinity,
            repeatDelay: 0.5,
          }}
          className=" 2xl:w-[850px] pb-10"
        />
        <img
          src={hat}
          alt="hat"
          className="absolute w-[70px] sm:w-[180px] mb-[250px] sm:mb-[350px] xl:mt[-80px] 2xl:mt-[-120px]"
        />
        <h2 className="absolute font-axiabold text-center text-3xl sm:text-5xl 2xl:text-7xl mt-[-80px] xl:mt-[-120px]">
          Mentoria de tecnologia <br /> para a região de <br />
          Manaus
        </h2>
        <p className="absolute font-redonda text-center text-[11px] sm:text-lg 2xl:text-2xl mt-[140px] sm:mt-[250px] 2xl:mt-[22rem]">
          Temos como objetivo criar uma comunidade de
          <br /> tecnologia em Manaus, devolver e desenvolver a região <br />e
          ser ponto de encontro para novas oportunidades e<br /> ideias. Fazemos
          isso através da conexão de pessoas <br /> e compartilhamento de
          conhecimento e experiência,
          <br /> sendo um lugar para dar e receber suporte.
        </p>
      </div>
    </section>
  );
}

export default QuemSomos;