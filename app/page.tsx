import Image from 'next/image'
import img_bg from 'public/rocketbg.png'

import { Icons } from '@/components/icons'

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
      <section className="h-screen max-w-full ">
        <div className="mx-auto w-3/4 text-center text-xl	 text-black	">
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
        <div>
          <Icons.verticalBar className="p-48 text-black" />
        </div>
      </section>
    </main>
  )
}
