import { Share_Tech_Mono } from 'next/font/google'
import Image from 'next/image'
import img_bg from 'public/rocketbg.jpg'

const techfont = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <main className={techfont.className}>
      <section className="relative">
        <div className="absolute z-[-1] h-screen w-screen max-w-full">
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
    </main>
  )
}
