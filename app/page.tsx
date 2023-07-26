import Image from 'next/image'
import img_sat from 'public/Satellite-Communications-Systems-Sustainment.jpg'
import img_gps_city from 'public/gps_city.png'
import img_bg from 'public/rocket-transparent.png'

import { Icons } from '@/components/icons'

import { sharetechmono } from '../lib/fonts'

export default function Home() {
  return (
    <main className={sharetechmono.className}>
      <section className="relative">
        <div className="absolute z-[-1] h-screen w-screen max-w-full bg-gray-300">
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
        <div className="flex h-screen items-start justify-center">
          <h1 className="mx-3 my-24 w-[70rem] text-center text-5xl font-extrabold max-sm:text-4xl md:text-7xl">
            Porque investir no espaço, se ainda temos enormes problemas na
            Terra?
          </h1>
          <div className="absolute bottom-20">
            <Icons.arrowDown />
          </div>
        </div>
      </section>
      <section className="h-full max-w-full">
        <div className="mx-auto w-full px-8 pb-12	text-center	text-xl text-black md:w-4/5">
          <p className="mb-6 pt-12">
            Quando pensamos em foguetes e missões aeroespaciais temos uma falsa
            premissa de está sendo injetada uma quantidade exorbitante de
            dinheiro neste setor. E surge a pergunta: Porque gastar tanto
            dinheiro nessas missões, sendo que há muitos problemas na Terra. E
            você não está errado em levar essa premissa ao pensamento,
            entretando há muitos setores de outra parte que gastam 10 vezes mais
            que o setor aeroespacial.
          </p>
          <p>
            O orçamento da NASA para o ano fiscal (FY) de 2020 é de US$ 22.6
            bilhões. Já, em defesa, pra 2023, o presidente dos Estados Unidos,
            Biden propõe um orçamento de 813 US$ bilhões, ou seja, a quantidade
            que se investe em exploração aeroespacial é minuscula perto do
            investimento do exercito dos Estados Unidos.
          </p>
        </div>
        <div className="flex flex-col flex-wrap items-baseline space-y-5 p-6 text-justify text-black md:flex-row">
          <div className="w-full flex-auto p-4 md:w-1/2">
            <h2 className="pb-4 text-center text-xl">
              Explorando novas fronteiras
            </h2>
            <p className="border-l-2 pl-6 text-base">
              Investir no setor aeroespacial nos permite expandir nossos
              horizontes e explorar o desconhecido. Ao fazê-lo, podemos avançar
              em tecnologias e descobertas que podem ter aplicação direta para
              resolver problemas terrestres.
            </p>
          </div>
          <div className="w-full flex-auto p-4 md:w-1/2">
            <h2 className="pb-4 text-center text-xl">
              Monitoramento e prevenção de desastres naturais
            </h2>
            <p className="border-l-2 pl-6 text-base">
              Satélites são essenciais para o monitoramento ambiental de longo
              prazo, não apenas em desastres naturais. Eles detectam mudanças
              climáticas, monitoram recursos hídricos, acompanham a cobertura
              vegetal e observam padrões climáticos que podem afetar desastres
              naturais.
            </p>
          </div>
          <div className="w-full flex-auto p-4 md:w-1/2">
            <h2 className="pb-4 text-center text-xl">
              Pesquisa e desenvolvimento tecnológico
            </h2>
            <p className="border-l-2 pl-6 text-base">
              O lançamento de satélites impulsiona o desenvolvimento de
              tecnologias inovadoras, como comunicações por satélite, energia
              solar, materiais leves e duráveis, eletrônica e sistemas de
              propulsão. Essas inovações têm aplicações em vários setores
              industriais.
            </p>
          </div>
          <div className="w-full flex-auto p-4 md:w-1/2">
            <h2 className="pb-4 text-center text-xl">Segurança e defesa</h2>
            <p className="border-l-2 pl-6 text-base">
              Os satélites desempenham um papel crítico na segurança e defesa de
              muitos países. Eles são usados para inteligência, vigilância e
              reconhecimento (ISR), monitoramento de atividades militares,
              comunicações seguras e detecção de mísseis balísticos.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="relative shadow-2xl">
          <div className="absolute z-[-1] h-full w-screen max-w-full">
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
          <div className="m-auto mb-12 flex w-full flex-col items-center justify-center px-6 py-24 text-center shadow-xl md:w-3/5">
            <h1 className="mb-4 text-center text-3xl leading-relaxed">
              Comunicações via satélite
            </h1>
            <p className="text-lg">
              Muitas das comunicações que realizamos, como chamadas telefônicas,
              transmissão de dados e acesso à Internet, dependem de satélites de
              comunicação em órbita ao redor da Terra. Esses satélites fornecem
              uma infraestrutura crucial para a comunicação global.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gradient-to-t from-white via-gray-400 to-gray-800 text-center md:text-justify">
          <div className="m-12 text-black">
            <h1 className="mb-4 text-3xl leading-relaxed">
              Navegando com Precisão: A Revolução do GPS
            </h1>
            <p className="text-lg">
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
          <div className="mx-8 hidden lg:block">
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
