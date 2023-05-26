import { motion } from "framer-motion";

import arrowRight from "../assets/main_arrow_right.svg";
import arrowLeft from "../assets/main_arrow_left.svg";
import circle from "../assets/main_circle.svg";
import hat from "../assets/main_hat.svg";

function QuemSomos() {
  return (
    <section className="flex flex-col items-center justify-center sm:mt-[-40px] mt-[-30px] z-0 overflow-hidden w-full">
        <motion.img
            src={arrowRight}
            alt="arrow"
            initial={{ x: 300 }} // Starts offscreen
            animate={{ x: 0 }} // Comes back to its original position
            transition={{ 
                type: "spring",
                stiffness: 40,
                damping: 10,
                restDelta: 2,
            }}
            className="absolute z-0 sm:w-[75rem] sm:h-[75rem] mt-[-790px] sm:mt-[-750px] right-[-5rem] sm:right-[-12.5rem]"
        />

        <motion.img
            src={arrowLeft}
            alt="arrow"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 10,
                restDelta: 2,
                }}
            className="absolute z-0 sm:w-[75rem] sm:h-[75rem] bottom-[5rem] sm:bottom-[-10rem] top-[13rem] sm:top-[6rem] left-[-5rem] sm:left-[-15rem] "
        />

      <div className="flex justify-center items-center text-[#F4F9F2] mt-[35%] sm:mt-20 z-10 w-full">
        <motion.img
          src={circle}
          className="relative"
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
        />
        <img
          src={hat}
          alt="hat"
          className="w-[70px] sm:w-[180px]  mb-[250px] sm:mb-[350px] absolute"
        />
        <h2 className="font-axiabold text-center absolute sm:text-5xl text-3xl tracking-normal mt-[-80px]">
          Mentoria de tecnologia <br /> para a região de <br />
          Manaus
        </h2>
        <p className="font-redonda mt-[140px] sm:mt-[250px] text-center absolute sm:text-lg text-[11px] tracking-normal">
          Temos como objetivo criar uma comunidade de
          <br /> tecnologia em Manaus, devolver e desenvolver a região <br />e
          ser ponto de encontro para novas oportunidades e<br /> ideias. Fazemos
          isso através da conexão de pessoas <br /> e compartilhamento de
          conhecimento e experiência,
          <br /> sendo um lugar para dar e receber suporte.
        </p>
      </div>
      <p className="font-axia mt-[600px]">
        Somos um grupo de ex-alunes da UFAM atuando em segmentos diversos da
        tecnologia pelo mundo e queremos convidar você, estudante ou
        profissional de Manaus, que tem interesse em organizar sua carreira,
        definir objetivos, rever estratégias e ampliar suas redes de contatos
        através de mentoria, de forma totalmente gratuita.
      </p>
    </section>
  );
}

export default QuemSomos;
