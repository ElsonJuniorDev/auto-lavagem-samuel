import { Award, Car, Circle } from "lucide-react";
import hero from "../assets/hero.png";
import ServiceCard from "../components/ServiceCard";


export default function ServicesHero() {
  return (
    <section
      className="
      bg-gray-700
      overflow-hidden
      py-20
      px-4
      sm:px-6
      lg:px-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        lg:flex-row
        items-center        
        "
      >
        {/* BLOCO ESQUERDO */}
        <div
          className="
          w-full
          lg:w-[60%]
          relative
          z-20
          lg:-mr-24
          "
        >
          <h2
            data-aos="fade-right"
            className="
            text-5xl
            lg:text-7xl
            font-bold
            leading-tight
            text-center
            lg:text-left
            "
            
            
          >
            <span className="text-white block">
              Estética
            </span>

            <span className="text-yellow-500 block">
              Automotiva.
            </span>
          </h2>

          <div 
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex gap-4 mt-6 justify-center lg:justify-start">
            <Circle className="w-4 h-4 text-white" />
            <Circle className="w-4 h-4 text-yellow-500" />
            <Circle className="w-4 h-4 text-white" />
          </div>

          <p
          data-aos="fade-right"
          data-aos-delay="200"
            className="
            mt-8
            text-gray-200
            text-lg
            max-w-xl
            mx-auto
            lg:mx-0
            text-center
            lg:text-left
            "
          >
            Realçamos o brilho, protegemos a pintura e cuidamos
            de cada detalhe do seu veículo com excelência.
          </p>

          {/* MOBILE */}
          <div className="lg:hidden mt-10 flex flex-col gap-6 items-center">
            <ServiceCard
              icon={<Award  className="text-yellow-600" />}
              title="Limpeza Técnica de Motor"
              description="Garantimos limpeza especializada preservando componentes e aumentando a durabilidade do motor."
            />

            <ServiceCard
              icon={<Car className="text-yellow-600" />}
              title="Polimento Técnico"
              description="Remoção de riscos superficiais e recuperação do brilho original da pintura."
            />
          </div>

          {/* DESKTOP */}
          <div
            className="
            hidden
            lg:flex
            mt-16
            gap-12
            items-start
            
            "
          >
            {/* CARD 1 */}
            <div>
              <ServiceCard
                icon={<Award className="text-yellow-600" />}
                title="Limpeza Técnica de Motor"
                description="Garantimos limpeza especializada preservando componentes e aumentando a durabilidade do motor."
              />
            </div>

            {/* CARD 2 */}
            <div>
              <ServiceCard
                icon={<Car className="text-yellow-600" />}
                title="Polimento Técnico"
                description="Remoção de riscos superficiais e recuperação do brilho original da pintura."
              />
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="
          w-full
          lg:w-[60%]
          flex
          justify-center
          mt-10
          lg:mt-20
          "
        >
          <div
            className="
            w-[380px]
            h-[380px]
            sm:w-[420px]
            sm:h-[420px]
            lg:w-[650px]
            lg:h-[500px]
            overflow-hidden
            border-8
            border-white
            shadow-2xl
            rounded-[60%_40%_30%_60%/60%_30%_70%_30%]
            "
          >
            <img
              src={hero}
              alt="Estética Automotiva"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

