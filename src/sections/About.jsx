// eslint-disable-next-line no-unused-vars
import React from "react";
import about from "../assets/about.png";
import Circulos from "../components/Circulos";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-gray-800
        py-12 px-4
        sm:py-16 md:px-12 lg:px-20
                
      "
    >
      <div
        className="
        max-w-7xl mx-auto
        flex flex-col lg:flex-row
        items-center justify-center
        gap-8
        "
      >
        {/* Container imagem */}
        <div
          className="
        order-2 lg:order-1
        w-full max-w-md
          mx-auto lg:mx-0
          lg:max-w-lg xl:max-w-xl
          h-[300px] sm:h-[350px] md:h-[400px]
          lg:h-[450px] xl:h-[500px]
          overflow-hidden
          shadow-lg md:shadow-xl
          relative z-10
          -rotate-2
          rounded-[40%_60%_70%_30%/40%_50%_60%_60%]
        "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={about}
            alt="Samuel, proprietário, em pé na frente da loja"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Conteúdo */}
        <div
          className="
          order-1 lg:order-2
          flex-1 w-full
          max-w-2xl
          mx-auto lg:mx-0
          relative z-20
        "
        >
          <div className="mb-6 md:mb-8" data-aos="fade-up">
            <h2
              className="
              text-3xl sm:text-4xl md:text-5xl
              text-white text-center lg:text-left
            "
            >
              Um Pouco
              <span className="font-bold text-yellow-500 block lg:inline">
                {" "}
                De nossa História
                <span className="text-white">.</span>
              </span>
            </h2>
            <p  data-aos="fade-up"
          data-aos-delay="200"
            className="
              mt-4 text-gray-300 text-lg
            ">
              Descubra a história por trás da nossa empresa e como nos tornamos referência em lavagem de veículos.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Circulos />
            </div>
          </div>

          {/* Cards de Serviços Mobile */}
          <div className="lg:hidden mt-10 flex flex-col gap-6 items-center">
            <ServiceCard
              icon={<Handshake className="text-yellow-600" />}
              title="Experiência e Paixão"
              description="Com anos de experiência no mercado, nossa equipe de profissionais está comprometida em fornecer um serviço excepcional, garantindo a satisfação total dos nossos clientes."
            />

            <ServiceCard
              icon={<ShieldCheck className="text-yellow-600" />}
              title="Compromisso com a Qualidade"
              description="Utilizamos produtos de alta qualidade e técnicas avançadas para garantir a máxima eficiência e durabilidade do seu motor."
            />
          </div>

          {/* Cards de Serviços Desktop */}
          <div className="hidden lg:flex mt-16 gap-8 xl:gap-12 items-start">
            <ServiceCard
              icon={<Handshake className="text-yellow-600" />}
              title="Experiência e Paixão"
              description="Com anos de experiência no mercado, nossa equipe de profissionais altamente treinados está comprometida em fornecer um serviço excepcional, garantindo a satisfação total dos nossos clientes."
            />

            <ServiceCard
              icon={<ShieldCheck className="text-yellow-600" />}
              title="Compromisso com a Qualidade"
              description="Utilizamos produtos de alta qualidade e técnicas avançadas para garantir a máxima eficiência e durabilidade do seu motor."
            />
          </div>

          {/* Container botão */}
          <div className="flex justify-center lg:justify-start mt-8 mb-8 md:mt-10">
            <Button
              textButton="Saiba Mais "
              icon={<ArrowRight className="h-4 w-4 md:h-5 md:w-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
