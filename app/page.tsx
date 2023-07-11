import Image from 'next/image'
import img_sat from 'public/Satellite-Communications-Systems-Sustainment.jpg'
import img_gps_city from 'public/gps_city.png'
import img_bg from 'public/rocketbg.png'

import { sharetechmono } from '../lib/fonts'

export default function Home() {
  return (
    <main className={sharetechmono.className}>
      <section className="relative shadow-xl">
        <div className="absolute z-[-1] h-screen w-screen max-w-full shadow-2xl">
          <Image
            alt="img_rocket"
            src={img_bg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              filter: 'brightness(0.4)',
            }}
          />
        </div>
        <div className="flex h-screen items-center justify-center">
          <h1 className="mx-3 w-[50rem] text-center text-4xl leading-relaxed">
            Porque investir no setor aeroespacial, se ainda temos enormes
            problemas na Terra?
          </h1>
        </div>
      </section>
      <section className="h-full max-w-full ">
        <div className="mx-auto w-3/4 pb-12	text-center	text-xl text-black">
          <p className="mb-6 mt-12">
            Quando pensamos em foguetes e missões aeroespaciais temos uma falsa
            premissa de está sendo injetada uma quantidade exorbitante de
            dinheiro neste setor. E surge a pergunta: Porque gastar tanto
            dinheiro nessas missões, sendo que há muitos problemas na Terra,
            como a fome. E você não está errado em levar essa premissa ao
            pensamento, entretando há muitos setores de outra parte que gastam
            10 vezes mais que o setor aeroespacial.
          </p>
          <p>
            O orçamento da NASA para o ano fiscal (FY) de 2020 é de US$ 22.6
            bilhões. Já, em defesa, pra 2023, o presidente dos Estados Unidos,
            Biden propõe um orçamento de 813 US$ bilhões, ou seja, a quantidade
            que se investe em exploração aeroespacial é minuscula perto do
            investimento do exercito dos Estados Unidos.
          </p>
        </div>
        <div className="flex pt-16 text-justify text-black">
          <div className="flex flex-col gap-12">
            <div className="m-12">
              <h2 className="mb-4 text-xl">Explorando novas fronteiras</h2>
              <p className="text-gray-800">
                Investir no setor aeroespacial nos permite expandir nossos
                horizontes e explorar o desconhecido. Ao fazê-lo, podemos
                avançar em tecnologias e descobertas que podem ter aplicação
                direta para resolver problemas terrestres.
              </p>
            </div>

            <div>
              <div className="m-12">
                <h2 className="mb-4 text-xl">Explorando novas fronteiras</h2>
                <p className="text-gray-800">
                  Investir no setor aeroespacial nos permite expandir nossos
                  horizontes e explorar o desconhecido. Ao fazê-lo, podemos
                  avançar em tecnologias e descobertas que podem ter aplicação
                  direta para resolver problemas terrestres.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 h-[700px] w-2 rounded bg-black"></div>
          <div className="flex items-center">
            <div className="flex flex-col gap-12">
              <div className="m-12">
                <h2 className="mb-4 text-xl">
                  Monitoramento e prevenção de desastres naturais
                </h2>
                <p className="text-gray-800">
                  Investir no setor aeroespacial nos permite expandir nossos
                  horizontes e explorar o desconhecido. Ao fazê-lo, podemos
                  avançar em tecnologias e descobertas que podem ter aplicação
                  direta para resolver problemas terrestres.
                </p>
              </div>
              <div className="m-12">
                <h2 className="mb-4 text-xl">
                  Monitoramento e prevenção de desastres naturais
                </h2>
                <p className="text-gray-800">
                  Investir no setor aeroespacial nos permite expandir nossos
                  horizontes e explorar o desconhecido. Ao fazê-lo, podemos
                  avançar em tecnologias e descobertas que podem ter aplicação
                  direta para resolver problemas terrestres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="relative shadow-xl">
          <div className="absolute z-[-1] h-full w-screen max-w-full bg-fixed shadow-2xl">
            <Image
              alt="img_sat"
              src={img_sat}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                filter: 'brightness(0.4)',
              }}
            />
          </div>
          <div className="m-auto flex w-3/5 flex-col items-center justify-center py-52 text-center">
            <h1 className="w-[50rem] text-center text-4xl leading-relaxed">
              Comunicações via satélite
            </h1>
            <p>
              Muitas das comunicações que realizamos, como chamadas telefônicas,
              transmissão de dados e acesso à Internet, dependem de satélites de
              comunicação em órbita ao redor da Terra. Esses satélites fornecem
              uma infraestrutura crucial para a comunicação global.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-500">
          <div className="m-12 text-white">
            <h1 className="mb-4 text-xl">
              Navegando com Precisão: A Revolução do GPS
            </h1>
            <p>
              O GPS (Global Positioning System) também está no espaço! Desde o
              lançamento do primeiro satélite GPS em 1978, a constelação tem
              crescido, fornecendo cobertura global. Astronautas o utilizam em
              caminhadas espaciais e sondas espaciais contam com ele para
              rastreamento e navegação. Com avanços tecnológicos, o GPS evoluiu,
              melhorando a precisão. Hoje, é essencial em áreas como navegação
              veicular, militares e científicas. O GPS conecta o mundo com
              confiança e precisão.
            </p>
          </div>
          <div className="mx-8">
            <Image
              alt="img_gps_city"
              sizes="(max-width: 768px) 100vw"
              height={4000}
              src={img_gps_city}
              placeholder="blur"
              quality={100}
              style={{}}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
