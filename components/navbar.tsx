'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Icons } from '@/components/icons'

import { sharetechmono } from '../lib/fonts'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Space Orbit',
    href: '#',
    description:
      'Pedro Palota, dono do canal no Youtube chamado Space Oribit, faz live de lanaçamento de foguetes.',
  },
  {
    title: 'Space Today',
    href: '#',
    description:
      'Segio Sacani, é geofísico, mas ama astronomia e o setor aeroespacial, ele faz live de eventos astronomicos e foguetes.',
  },
  {
    title: 'Dobra Espacial',
    href: '#',
    description:
      'Muitos chama de Dino, ele faz vídeo com uma qualidade absurda, os documentários dele sobre o Space Shuttle é sensacional.',
  },
  {
    title: 'Café e Ciência',
    href: '#',
    description:
      'Físico e Astronomo, ele já falou que eu sou masoquista por estudar Engenharia',
  },
  {
    title: 'Ned Oliveira',
    href: '#',
    description:
      'Uma mulher inteligente, que ama astronomia e foguetes, participa dos podcasts do Ciência sem fim',
  },
]

const empresacomponents: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'SpaceX',
    href: '#',
    description:
      'A SpaceX é uma empresa privada revolucionária de exploração espacial.',
  },
  {
    title: 'NASA',
    href: '#',
    description:
      'A NASA é a agência espacial pioneira, desbravando fronteiras cósmicas.',
  },
  {
    title: 'AEB',
    href: '#',
    description:
      'AEB: Agência Espacial Brasileira, impulsionando o Brasil rumo ao espaço.',
  },
  {
    title: 'Rocket Lab',
    href: '#',
    description:
      'Inovação audaciosa, lançando pequenos foguetes para grandes conquistas.',
  },
  {
    title: 'Ariane Space',
    href: '#',
    description:
      'Líder europeia, impulsionando missões espaciais com excelência tecnológica',
  },
  {
    title: 'United Launch Alliance (ULA)',
    href: '#',
    description:
      'Parceria Boeing-Lockheed Martin, líder em lançamentos confiáveis e inovadores',
  },
]

export default function Navbar() {
  return (
    <div className={sharetechmono.className}>
      <nav className="relative flex h-14 w-full items-center justify-center bg-background">
        <Link href={'/'}>
          <h1 className="absolute left-0 top-4 ml-8 text-xl">Sams Rocket</h1>
        </Link>
        <NavigationMenu className="">
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Foguetes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Starship
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Um gigante imponente, desbravando o cosmos com poder
                          inigualável
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Falcon 9">
                    Com mais de 200 lançamentos, o mais reutilizável e barato do
                    mercado.
                  </ListItem>
                  <ListItem href="#" title="Space Shuttle">
                    Usado para varias missões da NASA, uma delas o Telescópio
                    Hubble
                  </ListItem>
                  <ListItem href="#" title="Ariane 5">
                    O Ariane 5 ficou bem conhecido após, lanças o telescópio
                    James Webb
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Transmissões</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Empresas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {empresacomponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
