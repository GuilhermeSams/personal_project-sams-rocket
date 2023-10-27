import profile_ned from 'public/ned-oliveira.jpg'

import CardTransmition from '@/components/card-transmition'

export default function CafeeCiencia() {
  return (
    <main>
      <CardTransmition
        img={profile_ned}
        altImg={'Pedro Pallota Do canal Space Orbit'}
        name={'Ned Oliveira'}
        about={'Ciência / Astronomia / Astronáutica'}
        description={'Divulgadora científica.'}
        hrefYoutube={'https://www.youtube.com/@NedOliveira'}
        hrefX={'https://twitter.com/nedoliveira1'}
        hrefStore={'#'}
        descriptionVideo={'Descoberta do James Webb'}
        srcVideo={
          'https://www.youtube.com/embed/D_f_PPtiwYU?si=xrKLYLxAg2QG17Lg'
        }
      />
    </main>
  )
}
