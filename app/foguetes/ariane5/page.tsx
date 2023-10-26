import Image from 'next/image'
import img_ariane5_sidebar from 'public/img_ariane5_sidebar.jpg'

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
              src={img_ariane5_sidebar}
              alt="Ariane 5 da ESA"
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
                  <h1 className="text-6xl opacity-100">Ariane 5</h1>
                  <p className="opacity-70">
                    SUA CAPACIDADE DE LANÇAR CARGAS ÚTEIS EM ÓRBITAS
                    GEOSSÍNCRONAS ALTAMENTE ELEVADAS É INCRÍVEL.
                  </p>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-xl">VISÃO GERAL DO FOGUETE</h2>
                  <p className="opacity-90">
                    O Ariane 5 foi o principal sistema de lançamento da Europa
                    durante mais de um quarto de século, voando 117 vezes entre
                    1996 e 2023 a partir do porto espacial europeu na Guiana
                    Francesa. Cargas úteis notáveis incluem a missão Rosetta de
                    caça a cometas da ESA , uma dúzia de satélites de navegação
                    Galileo da Europa – orbitados por apenas três lançamentos –
                    e o Telescópio Espacial James Webb . A última missão da ESA
                    do Ariane 5 enviou Juice a caminho de explorar Júpiter e
                    suas luas geladas.
                  </p>
                  <div className="min-[900px]:hidden">
                    <Image
                      className="my-4 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                      src={img_ariane5_sidebar}
                      width={500}
                      height={500}
                      alt="Imagem da Ariane 5"
                    />
                  </div>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-100">
                      <h3>Altura</h3>
                      <p className="ml-auto">52.5 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-200">
                      <h3>Diâmetro</h3>
                      <p className="ml-auto">5.4 m</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-300">
                      <h2>Peso no Lançamento</h2>
                      <p className="ml-auto">780 t</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[400ms]">
                      <h2>Estágios</h2>
                      <p className="ml-auto">3</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[500ms]">
                      <h2>Carga Max</h2>
                      <p className="ml-auto">11 t</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl"> Boosters Laterais</h2>
                  <p className="opacity-90">
                    Os boosters laterais do foguete Ariane 5 são conhecidos como
                    Ariane Solid Rocket Boosters (Ariane SRBs) ou EAP (Étage
                    dAccélération à Poudre), que em francês significa Estágio de
                    Aceleração a Pólvora. Aqui estão algumas informações sobre
                    esses boosters laterais:
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[600ms]">
                      <h3>Capacidade de Propelente</h3>
                      <p className="ml-auto">240 t cada</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[700ms]">
                      <h3>Empuxo</h3>
                      <p className="ml-auto">7 050 kN</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl opacity-100">
                    Motor ou Estágio Principal
                  </h2>
                  <p className="opacity-90">
                    São responsáveis por fornecer o impulso necessário para
                    levar cargas úteis em órbita. O motor principal do Ariane 5
                    é conhecido como Vulcain.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[800ms]">
                      <h3>Capacidade de Propelente</h3>
                      <p className="ml-auto">175 t</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[900ms]">
                      <h3>Empuxo</h3>
                      <p className="ml-auto">960 kN</p>
                    </div>
                  </div>
                </div>
                <div className="m-4">
                  <h2 className="mb-2 text-4xl opacity-100">UPPER STAGE </h2>
                  <p className="opacity-90">
                    O estágio superior (upper stage) do foguete Ariane 5 é
                    responsável por levar as cargas úteis à órbita final
                    desejada após a separação do estágio principal.
                  </p>
                  <div className="mb-8 mt-4 flex w-[330px] flex-col space-y-4 font-semibold max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1000ms]">
                      <h3>Capacidade de Propelente</h3>
                      <p className="ml-auto">14,7 t</p>
                    </div>
                    <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[1100ms]">
                      <h3>Empuxo</h3>
                      <p className="ml-auto">67 kN</p>
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
