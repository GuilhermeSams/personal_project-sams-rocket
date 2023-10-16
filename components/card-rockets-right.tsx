import Image, { StaticImageData } from 'next/image'

type infoRocket = {
  nameRocket: string
  src: string | StaticImageData
  alt: string
  height: string
  heightData: string
  diameter: string
  diameterData: string
  mass: string
  massData: string
  cargaLeo: string
  cargaLeoData: string
  cargaGto: string
  cargaGtoData: string
  description: string
  width: number
}

export default function CardRocketsRight(props: infoRocket) {
  return (
    <div className="ml-12 rounded-l-xl bg-black p-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] max-[744px]:ml-0 max-[744px]:rounded-xl max-[744px]:shadow-none max-[455px]:rounded-none	">
      <div className="flex items-center max-[744px]:flex-col">
        <div className="flex flex-col items-center">
          <div>
            <h2
              className="text-3xl text-white sm:text-4xl"
              style={{ whiteSpace: 'nowrap' }}
            >
              {props.nameRocket}
            </h2>
          </div>
          <div className="flex items-center">
            <div>
              <Image
                className="mt-6"
                src={props.src}
                alt={props.alt}
                width={props.width}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
        <div className="pl-24 max-[850px]:pl-12 max-[744px]:flex max-[744px]:flex-col max-[744px]:items-center max-[744px]:pl-0">
          <div className="mb-8 mt-4 flex w-[330px] flex-col	space-y-8 font-semibold text-white max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
            <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[400ms]">
              <h3>{props.height}</h3>
              <p className="ml-auto">{props.heightData}</p>
            </div>
            <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[500ms]">
              <h3>{props.diameter}</h3>
              <p className="ml-auto">{props.diameterData}</p>
            </div>
            <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[600ms]">
              <h2>{props.mass}</h2>
              <p className="ml-auto">{props.massData}</p>
            </div>
            <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[700ms]">
              <h3>{props.cargaLeo}</h3>
              <p className="ml-auto">{props.cargaLeoData}</p>
            </div>
            <div className="flex animate-fade-up border-b border-gray-600 animate-delay-[800ms]">
              <h2>{props.cargaGto}</h2>
              <p className="ml-auto">{props.cargaGtoData}</p>
            </div>
          </div>
          <div className="w-3/4 max-[744px]:w-11/12 max-[744px]:text-justify">
            <p className="text-white">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
