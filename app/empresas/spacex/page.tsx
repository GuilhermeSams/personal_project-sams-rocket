import Image from 'next/image'

import { Button } from '@/components/ui/button'
import CardQuestionsSpaceX from '@/components/card-questions-spacex'
// import { sharetechmono } from '../lib/fonts'
import { Icons } from '@/components/icons'

import { sharetechmono } from '../../../lib/fonts'
import spacexbg from '../../../public/spacex-bg-light.jpg'

export default function SpaceX() {
  return (
    <main className={sharetechmono.className}>
      <section className="relative h-screen">
        <div className="absolute z-[-1] h-screen w-screen max-w-full bg-gray-300 ">
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
            <div className="ml-auto mt-8 flex">
              <a
                href="https://www.spacex.com"
                target="_blank"
                className="animate-fade-up pr-28 animate-delay-100 animate-duration-500 animate-ease-linear"
                rel="noreferrer"
              >
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
      <section className="h-full bg-gradient-to-t from-white via-gray-400 to-gray-800">
        <div className="flex items-center pt-16 text-center">
          <div className="h-px grow bg-gray-400"></div>
          <h1 className="shrink px-4 text-5xl">
            SpaceX: Uma Década à Frente das Outras
          </h1>
          <div className="h-px grow bg-gray-400"></div>
        </div>
        <div className="ml-28 mt-12">
          <div>
            <p className="text-2xl">
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
      </section>
    </main>
  )
}
