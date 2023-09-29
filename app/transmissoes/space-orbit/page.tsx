import Image from 'next/image'
import profile_pedro_pallota from 'public/profile_pedro_pallota.jpg'

import { Icons } from '@/components/icons'

export default function SpaceOrbit() {
  return (
    <main className="mt-14 h-full max-w-full pt-8 text-black">
      <div className="mx-auto flex w-10/12 max-w-prose flex-col items-center justify-center space-y-10 rounded-2xl border-[1px] border-solid border-blue-800 text-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
        <div className="h-3/6 w-full rounded-t-2xl bg-blue-800 pb-4 pt-10">
          <div className="mx-auto h-40 w-40 rounded-full bg-white">
            <Image
              className="rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src={profile_pedro_pallota}
              alt="Profile Pedro Pallota"
            />
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-2xl">Pedro Palota</h1>
          <h2 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className="w-3/6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            voluptatibus ea similique ullam sint nisi blanditiis.
          </p>
        </div>
        <div className="flex flex-row gap-4 rounded-full pb-4">
          <a
            className="h-8 w-8 scale-100 rounded-full transition-none duration-0 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
            href="https://www.youtube.com/@SpaceOrbit"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.youtube />
          </a>
          <a
            className="h-8 w-8 scale-100 rounded-full transition-none duration-0 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
            href="https://twitter.com/PallottaPedro"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.twitter />
          </a>
          <a
            className="h-8 w-8 scale-100 rounded-full transition-none duration-0 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
            href="https://spaceorbit.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.store />
          </a>
        </div>
      </div>
    </main>
  )
}
