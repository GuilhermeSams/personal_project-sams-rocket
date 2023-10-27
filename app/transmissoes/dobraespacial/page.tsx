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
          'Dono do Canal Space Today e do Podcast Ciência Sem Fim, o maior icone da divulgação científica do Brasil.'
        }
        hrefYoutube={'https://www.youtube.com/@SpaceToday'}
        hrefX={'https://twitter.com/SpaceToday1'}
        hrefStore={'https://www.spacetodaystore.com/'}
        descriptionVideo={'Acidente do Ônibus Espacial Columbia'}
        srcVideo={
          'https://www.youtube.com/embed/-hWwkHFU0aI?si=zEDhanTOU9zhkxCg'
        }
      />
    </main>
  )
}
