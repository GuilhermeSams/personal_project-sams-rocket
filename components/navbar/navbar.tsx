'use client'

import * as React from 'react'
import { useEffect } from 'react'
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

import { sharetechmono } from '../../lib/fonts'
import DropdownMenuDemo from './menuBurger'
import navbarDataCompany from './navbarDataCompany'
import navbarDataTransmition from './navbarDataTransmition'

export default function Navbar() {
  const dataCompany = navbarDataCompany()
  const dataTransmition = navbarDataTransmition()

  useEffect(() => {
    let prevScrollpos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const navbar = document.getElementById('navbar')

      if (navbar !== null) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = '0'
        } else {
          navbar.style.top = '-50px'
        }
      }

      prevScrollpos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="">
      <div id="navbar" className="fixed top-0 z-[1] w-full transition-all">
        <div className={sharetechmono.className}>
          <nav className="relative flex h-14 w-full items-center justify-center bg-background">
            <Link href={'/'}>
              <h1 className="absolute left-0 top-3 ml-8 text-xl ">
                Sams Rocket
              </h1>
            </Link>
            <div className="absolute right-0 mr-8 md:hidden">
              <DropdownMenuDemo />
            </div>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Foguetes</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href={'/foguetes/starship'}
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Icons.logo />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Starship
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Um gigante imponente, desbravando o cosmos com
                              poder inigualável
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link href={'/foguetes/falcon9'}>
                        <ListItem title="Falcon 9">
                          Com mais de 200 lançamentos, o mais reutilizável e
                          barato do mercado.
                        </ListItem>
                      </Link>
                      <Link href={'/foguetes/spaceshuttle'}>
                        <ListItem title="Space Shuttle">
                          Usado para varias missões da NASA, uma delas o
                          Telescópio Hubble
                        </ListItem>
                      </Link>
                      <Link href={'/foguetes/ariane5'}>
                        <ListItem title="Ariane 5">
                          O Ariane 5 ficou bem conhecido após, lanças o
                          telescópio James Webb
                        </ListItem>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Transmissões</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {dataTransmition.map((component) => (
                        <Link href={component.href}>
                          <ListItem
                            key={component.title}
                            title={component.title}
                          >
                            {component.description}
                          </ListItem>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Empresas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {dataCompany.map((component) => (
                        <Link href={component.href}>
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>
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
