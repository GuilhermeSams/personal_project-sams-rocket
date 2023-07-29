'use client'

import Link from 'next/link'

import { Icons } from '@/components/icons'

import { sharetechmono } from '../lib/fonts'
import navbarDataCompany from './navbar/navbarDataCompany'
import navbarDataTransmition from './navbar/navbarDataTransmition'

export default function Footer() {
  const dataTransmition = navbarDataTransmition()
  const dataCompany = navbarDataCompany()
  return (
    <div className={sharetechmono.className}>
      <div className="bg-gray-300 bg-gradient-to-b from-white via-gray-400 to-gray-600 ">
        <div className="flex justify-center bg-red-300 py-12 text-black">
          <div className="flex flex-wrap gap-x-32 gap-y-2 bg-green-300 max-[734px]:gap-x-8">
            <div>
              <h2 className="text-lg max-[734px]:text-base">Foguetes</h2>
              <div className="flex flex-col  text-base text-gray-900 max-[734px]:text-sm">
                <Link
                  className="my-2 hover:text-black"
                  href={'/foguetes/starship'}
                >
                  Starship
                </Link>
                <Link
                  className="my-2 hover:text-black"
                  href={'/foguetes/falcon9'}
                >
                  Falcon 9
                </Link>
                <Link
                  className="my-2 hover:text-black"
                  href={'/foguetes/spaceshuttle'}
                >
                  Space Shuttle
                </Link>
                <Link
                  className="my-2 hover:text-black"
                  href={'/foguetes/ariane5'}
                >
                  Ariane 5
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg max-[734px]:text-base">Transmisões</h2>
              <ul className="flex flex-col text-base text-gray-900 max-[734px]:text-sm">
                {dataTransmition.map((item) => (
                  <li key={item.id} className="my-2">
                    <Link className="hover:text-black" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-lg max-[734px]:text-base">Empresas</h1>
              <ul className="flex flex-col text-base text-gray-900 max-[734px]:text-sm">
                {dataCompany.map((item) => (
                  <li key={item.id} className="my-2">
                    <Link className="hover:text-black" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-8 mb-4 flex flex-row items-center justify-center gap-3">
          <a
            className="scale-100 transition-none duration-300 md:transition md:delay-100 md:ease-in-out md:hover:scale-125"
            href="https://www.linkedin.com/in/guilherme-pereira-sampaio/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.linkedin />
          </a>
          <a
            className="scale-100 transition-none duration-300 md:transition md:delay-100 md:ease-in-out md:hover:scale-125"
            href="https://github.com/GuilhermeSams"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.github />
          </a>
        </div>
        <p className="pb-5 text-center font-semibold text-black">
          Created by GuiSams
        </p>
      </div>
    </div>
  )
}
