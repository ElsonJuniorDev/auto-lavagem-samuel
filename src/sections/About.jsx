// eslint-disable-next-line no-unused-vars
import React from 'react';  
import about from "../assets/about.png";
import { Circulos } from '../components/circulos';

const About = () => {   
    return (
        <section id="about" 
        className="
            py-20
            relative
            overflow-hidden
            bg-gray-800
            py-12 px-4
            sm:py-16 md:px-12
            lg:px-20 flex flex-col 
            items-center justify-between
            ">

            {/* Seção Sobre Nós */}
            <div className="
            flex-1 w-full 
            lg:mr-8 xl:mr-12 
            relative order-2
            lg:order-1
            mt-10 lg:mt-0">
                {/*

                    <h2 className="
                    text-3xl 
                    font-bold text-center mb-8">Sobre Nós</h2>
                <p className="text-gray-700 text-center max-w-2xl mx-auto">
                    Somos uma empresa dedicada a oferecer serviços de limpeza técnica de motores, utilizando produtos de alta qualidade e técnicas avançadas para garantir a máxima eficiência e durabilidade do seu motor. Com anos de experiência no mercado, nossa equipe de profissionais altamente treinados está comprometida em fornecer um serviço excepcional, garantindo a satisfação total dos nossos clientes.
                </p>
                {/* */}

                <div
                 className="w-full max-wmd
                 mx-auto lg:mas-wlg
                 xl:max-w-xl
                 h-[300px] sm:h-[350px]
                 md:h-[400px]
                 lg:h-[450px]
                 xl:h-[500px]
                 overflow-hidden
                 shadow-lg
                 md:shadow-xl
                 relative z-10
                 -rotate-2
                 rounded-[40%_60%_70%_30%/40%_50%_60%_60%] 
                 "
                 data-aos="fade-right"
                 data-aos-delay="200"
                 >
                    <img src={about} alt="Samuel Propietario em pé na frente da Loja" 
                    className='
                    object-cover w-full h-ful 
                    
                    '/>
                </div>
            <div className="
            hidden md:block
            absolute border-2
            border-pink-500
            bottom-4
            -rigth-4
            w-16 h-16 md:w2 md:h-20
            lg:w-24 rounded-full
            z-0"
            data-aos="zoom-in"
            data-aos-delay="500"
            ></div>   
            <div className="
            hidden md:block
            absolute border-2
            border-pink-500
           -top-4
            -left-4
            w-16 h-16 md:w2 md:h-20
            lg:w-24 rounded-full
            z-0"
            data-aos="zoom-in"
            data-aos-delay="600"
            ></div> 
            <div className="
            flex-1 w-full
            max-w-2xl
            mx-auto
            lg:max-0
            space-y-6
            md:space-y-8
            relative z-20
            oder-1
            lg:order-2
            ">
                <div className="mb-6 md:-8"
                data-aos='fade-up'>
                    <h2 className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    text-white
                    text-center
                    lg:text-left">Um Pouco 
                <span className="
                    font-bold
                    text-yellow-500 block
                    lg:inline">De nossa Historia 
                    <span className='text-white'>.</span> 
                </span>
                    </h2>
                    <div>
               
                    </div>
                </div>
            </div>     
            </div>            
        </section>
    );
}
export default About;