import Image from 'next/image'
import img_spaceshuttle_sidebar from 'public/img_spaceshuttle_sidebar.jpg'
import img_startship_mobile from 'public/img_starship_por__do_sol.jpg'

import { ScrollArea } from '@/components/ui/scroll-area'

import { sharetechmono } from '../../../lib/fonts'

export default function SpaceShuttlePage() {
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
              src={img_spaceshuttle_sidebar}
              alt="Space Shuttle da NASA"
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
                  <h1 className="text-6xl opacity-100">Space Shuttle</h1>
                  <p className="opacity-70">
                    PROGRAMA ESPACIAL ICÔNICO QUE OPEROU DE 1981 A 2011.
                  </p>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-xl">VISÃO GERAL DA NAVE</h2>
                  <p className="opacity-90">
                    A frota dos ônibus espaciais da NASA alcançou inúmeras
                    inovações e abriu espaço para mais pessoas do que nunca
                    durante os 30 anos de missões do Programa de Ônibus
                    Espaciais.
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
                      <p className="ml-auto">19,3 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-200">
                      <h3>Comprimento</h3>
                      <p className="ml-auto">75 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-300">
                      <h2>Peso Vazio</h2>
                      <p className="ml-auto">144,200 kg</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[400ms]">
                      <h2>Peso Máx de Decol.</h2>
                      <p className="ml-auto">322,000 kg</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[500ms]">
                      <h2>Motores</h2>
                      <p className="ml-auto">4</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[600ms]">
                      <h2>Empuxo por Motor</h2>
                      <p className="ml-auto">222 kN</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl">Conjunto de Motores</h2>
                  <p className="opacity-90">
                    O Space Shuttle tinha três principais conjuntos de motores:
                  </p>
                  <div>
                    <h2 className="my-2 text-xl">
                      Conjunto 1 - Motores Principais
                    </h2>
                    <p className="my-4 opacity-90">
                      Localizados no compartimento traseiro. Esses motores eram
                      conhecidos como os motores principais RS-25 (Reactor
                      Systems-25) e eram usados para a fase de lançamento. Eles
                      eram motores de foguete de combustível líquido que
                      queimavam hidrogênio e oxigênio líquido.
                    </p>
                    <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                      <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[400ms]">
                        <h3>Expuxo</h3>
                        <p className="ml-auto">1.200.000 N</p>
                      </div>
                      <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[700ms]">
                        <h3>Ciclo do Motor</h3>
                        <p className="ml-auto">Fechado</p>
                      </div>
                    </div>
                  </div>
                  <h2 className="my-2 text-xl">
                    Conjunto 2 - Motores Orbital Maneuvering
                  </h2>
                  <p className="my-4 opacity-90">
                    Além dos motores principais, o Ônibus Espacial estava
                    equipado com dois conjuntos de motores OMEs. Estes motores
                    eram usados para manobras em órbita, como alterar a
                    inclinação da órbita ou realizar manobras de reentrada.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[800ms]">
                      <h3>Expuxo</h3>
                      <p className="ml-auto">26.700 N</p>
                    </div>
                  </div>
                  <h2 className="my-2 text-xl">
                    Conjunto 3 - Motores de Manobra
                  </h2>
                  <p className="my-4 opacity-90">
                    Além dos motores principais e OMEs, o Ônibus Espacial também
                    tinha um sistema de controle de atitude composto por
                    pequenos motores de manobra localizados em vários pontos na
                    espaçonave. Esses motores eram usados para ajustar a
                    orientação e a posição do Ônibus Espacial em órbita.
                  </p>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl opacity-100">
                    Boosters Laterais e Tanque de Combustível
                  </h2>
                  <p className="opacity-90">
                    OS boosters laterias é composto por combustível sólido, uma
                    vez que é iniciada sua queima não é possivel ter um
                    desligamento, ouse seja, os boosters só desligavam quando
                    todo o combustível solido eram queimados completamente
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[900ms]">
                      <h3>Altura</h3>
                      <p className="ml-auto">45 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1000ms]">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">3,71</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1100ms]">
                      <h2>Capacidade de Combustível</h2>
                      <p className="ml-auto">3,400 t</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1200ms]">
                      <h3>Força de Impulso</h3>
                      <p className="ml-auto">7,590 tf</p>
                    </div>
                  </div>
                  <p className="my-4 opacity-90">
                    O tanque externo que é conhecido por tanque laranja continha
                    os dois tipos de combustível necessários para os motores
                    principais RS-25: hidrogênio líquido (LH2) e oxigênio
                    líquido (LOX). Ele fornecia o combustível e o oxidante para
                    os motores principais durante a fase de lançamento.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
