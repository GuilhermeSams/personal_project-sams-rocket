'use client'

import Link from 'next/link'

import { Icons } from '@/components/icons'

import navbarDataCompany from './navbar/navbarDataCompany'
import navbarDataTransmition from './navbar/navbarDataTransmition'

export default function Footer() {
  const dataTransmition = navbarDataTransmition()
  const dataCompany = navbarDataCompany()
  return (
    <div className="bg-gray-300 bg-gradient-to-b from-white via-gray-400 to-gray-600 ">
      <div className="flex items-baseline justify-around py-12 text-black">
        <div className="flex items-center gap-3">
          <a
            className="transition duration-300 delay-100 ease-in-out hover:scale-125"
            href="https://www.linkedin.com/in/guilherme-pereira-sampaio/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.linkedin />
          </a>
          <a
            className="transition duration-300 delay-100 ease-in-out hover:scale-125"
            href="https://github.com/GuilhermeSams"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.github />
          </a>
        </div>
        <div>
          <h2 className="text-lg">Foguetes</h2>
          <div className="flex flex-col  text-base text-gray-900">
            <Link className="my-2 hover:text-black" href={'#'}>
              Starship
            </Link>
            <Link className="my-2 hover:text-black" href={'#'}>
              Falcon 9
            </Link>
            <Link className="my-2 hover:text-black" href={'#'}>
              Space Shuttle
            </Link>
            <Link className="my-2 hover:text-black" href={'#'}>
              Ariane 5
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg">Transmisões</h1>
          <ul className="flex flex-col text-base text-gray-900 ">
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
          <h1 className="text-lg">Empresas</h1>
          <ul className="flex flex-col text-base text-gray-900">
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
      <p className="pb-5 text-center font-semibold text-black">
        Created by GuiSams
      </p>
    </div>
  )
}