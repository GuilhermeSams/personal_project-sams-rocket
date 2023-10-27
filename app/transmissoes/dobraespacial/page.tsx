import profile_dino from 'public/dino.jpg'

import CardTransmition from '@/components/card-transmition'

export default function SpaceOrbit() {
  return (
    <main>
      <CardTransmition
        img={profile_dino}
        altImg={'Pedro Pallota Do canal Space Orbit'}
        name={'Dino'}
        about={
          'Criador do Dobra Espacial e fascinado por foguetes e exploração espacial'
        }
        description={
          'Seus documentários de história sobre as missões Apollo e dos programas Space Shuttle são incríveis'
        }
        hrefYoutube={'https://www.youtube.com/@DobraEspacial'}
        hrefX={'https://twitter.com/tomatosmat'}
        hrefStore={'#'}
        descriptionVideo={'Acidente do Ônibus Espacial Columbia'}
        srcVideo={
          'https://www.youtube.com/embed/-hWwkHFU0aI?si=zEDhanTOU9zhkxCg'
        }
      />
    </main>
  )
}
