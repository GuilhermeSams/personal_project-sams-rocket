import Image from 'next/image'
import img_falcon9_sidebar from 'public/img_falcon9_sidebar.jpg'
import img_startship_mobile from 'public/img_starship_por__do_sol.jpg'

import { ScrollArea } from '@/components/ui/scroll-area'

import { sharetechmono } from '../../../lib/fonts'

export default function Starship() {
  return (
    <>
      <div className={sharetechmono.className}>
        <div className="mt-14 flex h-[94.5vh] bg-gradient-to-t from-white via-gray-400 to-gray-500 max-[1000px]:h-full">
          <div
            className="h-full w-[550px] flex-none bg-gray-900 text-black max-[1000px]:hidden"
            style={{
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
              overflow: 'hidden',
            }}
          >
            <Image
              className="h-full w-full bg-black"
              src={img_falcon9_sidebar}
              alt="Falcon 9 da SpaceX"
              height={1080}
              style={{
                objectFit: 'cover',
                filter: 'brightness(0.6)',
              }}
            />
          </div>
          <div className="mr-auto flex max-w-full items-start text-black">
            <div className="max-[1000px]:max-w-full">
              <ScrollArea className="h-[93vh] rounded-md max-[1000px]:h-full">
                <div className="m-4 mb-8">
                  <h1 className="text-6xl opacity-100">Falcon 9</h1>
                  <p className="opacity-70">
                    O Foguete mais reutilizável do mundo.
                  </p>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-xl">VISÃO GERAL DA NAVE</h2>
                  <p className="opacity-90">
                    O Falcon 9 é um foguete reutilizável de dois estágios
                    projetado e fabricado pela SpaceX para o transporte
                    confiável e seguro de pessoas e cargas úteis para a órbita
                    da Terra e além. O Falcon 9 é o primeiro foguete
                    reutilizável de classe orbital do mundo. A capacidade de
                    reutilização permite que a SpaceX lance as partes mais caras
                    do foguete, o que, por sua vez, reduz o custo de acesso ao
                    espaço.
                  </p>
                  <div className="min-[900px]:hidden">
                    <Image
                      className="my-4 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      src={img_startship_mobile}
                      width={500}
                      height={500}
                      alt="Imagem da Startship"
                    />
                  </div>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-100">
                      <h3>Altura</h3>
                      <p className="ml-auto">70 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-200">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">3.7 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-200">
                      <h3>Massa</h3>
                      <p className="ml-auto">549,054 kg</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-300">
                      <h2>Capacidade de Carga</h2>
                      <p className="ml-auto">22,800 kg</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl">Falcon 9 1° ESTÁGIO</h2>
                  <p className="opacity-90">
                    O primeiro estágio do Falcon 9 incorpora nove motores Merlin
                    e tanques de liga de alumínio-lítio contendo oxigênio
                    líquido e propulsor de querosene para foguete (RP-1). O
                    Falcon 9 gera mais de 1,7 milhão de libras de empuxo ao
                    nível do mar.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[400ms]">
                      <h3>Altura</h3>
                      <p className="ml-auto">50 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[500ms]">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">9 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[600ms]">
                      <h2>Capacidade de Combustível</h2>
                      <p className="ml-auto">1,200 t</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[700ms]">
                      <h3>Força de Impulso</h3>
                      <p className="ml-auto">1,500 tf</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[800ms]">
                      <h2>Capacidade de Carga</h2>
                      <p className="ml-auto">100 - 150 t</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl opacity-100">2° ESTÁGIO</h2>
                  <p className="opacity-90">
                    O segundo estágio, movido por um único motor a vácuo Merlin,
                    entrega a carga útil do Falcon 9 à órbita desejada. O motor
                    do segundo estágio é acionado alguns segundos após a
                    separação do estágio e pode ser reiniciado várias vezes para
                    colocar várias cargas em órbitas diferentes.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[900ms]">
                      <h3>Número de motores</h3>
                      <p className="ml-auto">1 vácuo</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1000ms]">
                      <h3>Tempo de Queima</h3>
                      <p className="ml-auto">397 segundos</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1100ms]">
                      <h2>Impulso</h2>
                      <p className="ml-auto">981 kN /220.500 lbf</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
