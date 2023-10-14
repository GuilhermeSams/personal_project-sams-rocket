import Image from 'next/image'

import { Button } from '@/components/ui/button'
import CardQuestionsSpaceX from '@/components/card-questions-spacex'
import CardRocketsLeft from '@/components/card-rockets-left'
import CardRocketsRight from '@/components/card-rockets-right'
// import { sharetechmono } from '../lib/fonts'
import { Icons } from '@/components/icons'

import { sharetechmono } from '../../../lib/fonts'
import falcon9 from '../../../public/falcon9.png'
import falconheavy from '../../../public/falcon-heavy.png'
import spacexbg from '../../../public/spacex-bg-light.jpg'
import startship from '../../../public/starship.png'

export default function SpaceX() {
  return (
    <main className={sharetechmono.className}>
      <section className="relative h-screen">
        <div className="absolute z-[-1] h-screen w-screen max-w-full bg-gray-300">
          <Image
            alt="img_rocket"
            src={spacexbg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              filter: 'brightness(0.7)',
            }}
          />
        </div>
        <div className="ml-8 flex h-[70vh] max-w-full flex-col justify-center  max-[480px]:px-4">
          <div className="mr-auto flex max-w-full flex-col">
            <div className="flex">
              <Icons.spacexName />
            </div>
            <div className="ml-auto mt-8 flex pr-28">
              <a href="https://www.spacex.com" target="_blank" rel="noreferrer">
                <Button
                  className="max-[480px]:absolute max-[480px]:left-1/2 max-[480px]:top-2/4 max-[480px]:-translate-x-1/2 max-[480px]:-translate-y-1/2"
                  variant="outline"
                >
                  Site Oficial
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full bg-gradient-to-t from-white via-black to-[#010511]">
        <div className="flex items-center pt-16 text-center">
          <div className="h-px grow bg-gray-400"></div>
          <h1 className="shrink px-4 text-4xl sm:text-5xl">
            SpaceX: Uma Década à Frente das Outras
          </h1>
          <div className="h-px grow bg-gray-400"></div>
        </div>
        <div className="mt-12 pl-28 max-[850px]:mx-auto max-[850px]:pl-0 ">
          <div>
            <p className="mx-4 text-xl max-[850px]:text-center sm:text-2xl">
              Porque a SpaceX está 10 anos a frente das outras empresas do setor
              aeroespacial?
            </p>
          </div>
          <CardQuestionsSpaceX
            numeric="1"
            title="Reutilização de Foguetes:"
            text="A SpaceX foi pioneira na reutilização bem-sucedida de foguetes, reduzindo drasticamente os custos de lançamento e aumentando a acessibilidade ao espaço."
          />
          <CardQuestionsSpaceX
            numeric="2"
            title="Cronograma Agressivo de Missões:"
            text="A SpaceX tem um histórico de cumprir cronogramas e metas com sucesso, com lançamentos frequentes e missões desafiadoras que outras empresas não conseguiram realizar no mesmo ritmo."
          />
          <CardQuestionsSpaceX
            numeric="3"
            title="Desenvolvimento de Tecnologia Própria:"
            text="A SpaceX desenvolveu tecnologias avançadas internamente, como o sistema de propulsão Merlin, que possui ciclo fechado, as cápsulas Dragon e o foguete Falcon Heavy, impulsionando a inovação na indústria"
          />
          <CardQuestionsSpaceX
            numeric="4"
            title="Colaboração e Parcerias Estratégicas:"
            text="A SpaceX busca colaboração e parcerias estratégicas com outras organizações, incluindo a NASA, para acelerar o progresso e aumentar sua influência no setor."
          />
        </div>
        {/* --------------------++++++++++++++++++++++--- */}
        <div className="hidden">
          <div className="mt-12">
            <div className="ml-14">
              <h1 className="py-12 text-5xl text-white">
                Seus Veiculos Lançadores
              </h1>
            </div>
            <div className="ml-28 py-4">
              <CardRocketsRight
                nameRocket="Falcon 9"
                src={falcon9}
                alt="Falcon 9"
                height="Altura"
                heightData="70 m"
                diameter="Diâmetro"
                diameterData="3.7 m"
                width={30}
                mass="Massa"
                massData="549,054 kg"
                cargaLeo="Carga para LEO"
                cargaLeoData="22,800 kg"
                cargaGto="Carga para GTO"
                cargaGtoData="8,300 kg"
                description="O Falcon 9 é um foguete reutilizável de dois estágios
                projetado e fabricado pela SpaceX para o transporte
                confiável e seguro de pessoas e cargas úteis para a órbita
                da Terra e além. O Falcon 9 é o primeiro foguete
                reutilizável de classe orbital do mundo. A capacidade de
                reutilização permite que a SpaceX lance as partes mais caras
                do foguete, o que, por sua vez, reduz o custo de acesso ao
                espaço."
              />
            </div>
            <div className="mr-28 py-4">
              <CardRocketsLeft
                nameRocket="Falcon Heavy"
                src={falconheavy}
                alt="Falcon Heavy"
                height="Altura"
                heightData="70 m"
                diameter="Largura"
                diameterData="12 m"
                mass="Massa"
                massData="1.420.788 kg"
                cargaLeo="Carga para LEO"
                cargaLeoData="63.800kg"
                cargaGto="Carga para Marte"
                cargaGtoData="16.800kg"
                description="O Falcon Heavy é composto por três núcleos reutilizáveis ​​de nove motores do Falcon 9, cujos 27 motores Merlin juntos geram mais de 5 milhões de libras de empuxo na decolagem, o que equivale a aproximadamente dezoito aeronaves 747. Como um dos foguetes operacionais mais poderosos do mundo, o Falcon Heavy pode colocar em órbita quase 64 toneladas métricas (141.000 libras)."
              />
            </div>
            <div className="ml-28 py-4">
              <CardRocketsRight
                width={80}
                nameRocket="Starship"
                src={startship}
                alt="Starship"
                height="Altura"
                heightData="120 m"
                diameter="Diâmetro"
                diameterData="9 m"
                mass="Massa"
                massData="549,054 kg"
                cargaLeo="Capacidade de Carga"
                cargaLeoData="100 – 150 t"
                cargaGto="Carga para GTO"
                cargaGtoData="8,300 kg"
                description="A espaçonave Starship e o foguete Super Heavy da SpaceX – coletivamente chamados de Starship – representam um sistema de transporte totalmente reutilizável projetado para transportar tripulação e carga para a órbita da Terra, Lua, Marte e além. Starship é o veículo de lançamento mais poderoso já desenvolvido no mundo, capaz de transportar até 150 toneladas métricas totalmente reutilizáveis ​​e 250 toneladas métricas descartáveis."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
