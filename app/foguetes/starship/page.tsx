import Image from 'next/image'
import img_startship_mobile from 'public/img_starship_por__do_sol.jpg'
import img_startship_sidebar from 'public/starship_spacex.jpg'

import { ScrollArea } from '@/components/ui/scroll-area'

import { sharetechmono } from '../../../lib/fonts'

export default function Starship() {
  return (
    <>
      <div className={sharetechmono.className}>
        <div className="mt-14 flex h-[94.5vh] max-[1000px]:h-full">
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
              src={img_startship_sidebar}
              alt="Starship da SpaceX"
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
                  <h1 className="text-6xl opacity-100">Starship</h1>
                  <p className="opacity-70">
                    SERVIÇO PARA ÓRBITA DA TERRA, LUA, MARTE E ALÉM.
                  </p>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-xl">VISÃO GERAL DA NAVE</h2>
                  <p className="opacity-90">
                    A espaçonave Starship da SpaceX e o foguete Super Heavy -
                    coletivamente chamados de Starship - representam um sistema
                    de transporte totalmente reutilizável projetado para
                    transportar tripulação e carga para a órbita da Terra, Lua,
                    Marte e além. O Starship será o veículo de lançamento mais
                    poderoso do mundo já desenvolvido, capaz de transportar até
                    150 toneladas métricas totalmente reutilizáveis e 250
                    toneladas métricas descartáveis.
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
                    <div className="flex border-b border-gray-600">
                      <h3>Altura</h3>
                      <p className="ml-auto">120 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">9 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h2>Capacidade de Carga</h2>
                      <p className="ml-auto">100 – 150 t</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl">Starship 2° ESTÁGIO</h2>
                  <p className="opacity-90">
                    Starship é a espaçonave totalmente reutilizável e o segundo
                    estágio do sistema Starship. O veículo vem em várias
                    configurações diferentes, oferece uma seção de carga útil
                    integrada e é capaz de transportar tripulação e carga para a
                    órbita da Terra, Lua, Marte e além. A Starship também é
                    capaz de transportar ponto a ponto na Terra, permitindo
                    viajar para qualquer lugar do mundo em uma hora ou menos.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex border-b border-gray-600">
                      <h3>Altura</h3>
                      <p className="ml-auto">50 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">9 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h2>Capacidade de Combustível</h2>
                      <p className="ml-auto">1,200 t</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h3>Força de Impulso</h3>
                      <p className="ml-auto">1,500 tf</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h2>Capacidade de Carga</h2>
                      <p className="ml-auto">100 - 150 t</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl opacity-100">
                    Super Heavy 1° ESTÁGIO
                  </h2>
                  <p className="opacity-90">
                    Super Heavy é o primeiro estágio, ou booster, do sistema de
                    lançamento da Starship. Alimentado por 33 motores Raptor
                    usando metano líquido sub-resfriado (CH4) e oxigênio líquido
                    (LOX), o Super Heavy é totalmente reutilizável e irá
                    reentrar na atmosfera da Terra para pousar de volta no local
                    de lançamento.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex border-b border-gray-600">
                      <h3>Altura</h3>
                      <p className="ml-auto">69 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">9 m</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h2>Capacidade de Combustível</h2>
                      <p className="ml-auto">3,400 t</p>
                    </div>
                    <div className="flex border-b border-gray-600">
                      <h3>Força de Impulso</h3>
                      <p className="ml-auto">7,590 tf</p>
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
