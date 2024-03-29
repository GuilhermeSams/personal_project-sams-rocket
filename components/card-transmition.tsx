import Image, { StaticImageData } from 'next/image'

// import profile_pedro_pallota from 'public/profile_pedro_pallota.jpg'

import { sharetechmono } from '@/lib/fonts'
import { Icons } from '@/components/icons'

type dataCard = {
  img: string | StaticImageData
  altImg: string
  name: string
  about: string
  description: string
  hrefYoutube: string
  hrefX: string
  hrefStore: string
  descriptionVideo: string
  srcVideo: string
}

export default function CardTransmition(props: dataCard) {
  return (
    <div className="mt-14 h-full max-w-full bg-gradient-to-t from-white via-gray-400 to-gray-500 pt-8 text-black">
      <div className={sharetechmono.className}>
        <div className="mx-auto flex w-4/5  flex-col items-center justify-center space-y-10 rounded-2xl border-[1px] border-solid border-blue-800 bg-gray-300 text-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <div className="h-3/6 w-full pb-4 pt-10">
            <div className="mx-auto h-40 w-40 rounded-full">
              <Image
                className="rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={props.img}
                alt={props.altImg}
              />
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-2xl">{props.name}</h1>
            <h2 className="mx-2 text-lg font-extralight">{props.about}</h2>
          </div>
          <div className="w-4/6">
            <p>{props.description}</p>
          </div>
          <ul className="flex flex-row gap-4 rounded-full pb-4">
            <a
              className="h-8 w-8 scale-100 rounded-full transition-none duration-0 max-[555px]:scale-90 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
              href={props.hrefYoutube}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.youtube />
            </a>
            <a
              className="h-8 w-8 scale-100 rounded-full transition-none duration-0 max-[555px]:scale-90 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
              href={props.hrefX}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.twitter />
            </a>
            <a
              className="h-8 w-8 scale-100 rounded-full transition-none duration-0 max-[555px]:scale-90 md:transition md:delay-0 md:ease-in-out md:hover:scale-125"
              href={props.hrefStore}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.store />
            </a>
          </ul>
        </div>
        <div className="mt-12">
          <div className="mx-auto w-2/4 animate-fade-up text-center">
            <p className="rounded px-4 py-2 text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sm:text-lg">
              {props.descriptionVideo}
            </p>
          </div>
          <div className="mx-auto animate-fade-up py-4 animate-delay-300">
            <iframe
              className="mx-auto aspect-video w-[95%] rounded-2xl sm:w-3/4"
              src={props.srcVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
