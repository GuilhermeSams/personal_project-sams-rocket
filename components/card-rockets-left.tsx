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
}

export default function CardRocketsLeft(props: infoRocket) {
  return (
    <div className="mr-12 flex flex-col items-end rounded-r-xl bg-black p-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="flex items-center">
        <div className="mr-16">
          <div className="mb-8 ml-auto mt-4 flex w-[330px] flex-col space-y-8 font-semibold text-white max-[465px]:mx-auto max-[280px]:w-[260px] max-[280px]:text-sm">
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
          <div className="ml-auto w-3/4 text-right">
            <p className="text-white">{props.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <h2
              className="text-4xl text-white"
              style={{ whiteSpace: 'nowrap' }}
            >
              {props.nameRocket}
            </h2>
          </div>
          <div className="">
            <Image
              className="mx-auto mt-6"
              src={props.src}
              alt={props.alt}
              width={70}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
