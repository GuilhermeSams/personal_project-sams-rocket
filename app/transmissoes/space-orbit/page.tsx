import Image from 'next/image'
import profile_pedro_pallota from 'public/profile_pedro_pallota.jpg'

export default function SpaceOrbit() {
  return (
    <main className="mt-14 h-full max-w-full pt-8 text-black">
      <div className="mx-auto flex w-2/4 flex-col items-center justify-center space-y-10 rounded-2xl border-[1px] border-solid border-blue-800 text-center">
        <div className="h-3/6 w-full rounded-t-2xl bg-blue-800 pb-4 pt-10">
          <div className="mx-auto h-40 w-40 rounded-full bg-white">
            <Image
              className=" rounded-full bg-black"
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
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
      </div>
    </main>
  )
}
