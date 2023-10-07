import Image from 'next/image'

import { Button } from '@/components/ui/button'
// import { sharetechmono } from '../lib/fonts'
import { Icons } from '@/components/icons'

import spacexbg from '../../../public/spacex-bg-light.jpg'

export default function SpaceX() {
  return (
    <main>
      <section className="relative">
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
            <div className="ml-auto mt-8 flex pr-28 max-[480px]:mr-auto max-[480px]:pr-0">
              <Button className="w-32" variant="outline">
                Site Oficial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
