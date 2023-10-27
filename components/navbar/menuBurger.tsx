import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'

// import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function DropdownMenuDemo() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const router = useRouter()

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev)
  }
  useEffect(() => {
    console.log('O estado isDropdownVisible mudou:', isDropdownVisible)
  }, [isDropdownVisible])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu onClick={toggleDropdown} className="cursor-pointer text-right" />
      </DropdownMenuTrigger>
      {isDropdownVisible && (
        <DropdownMenuContent className="h-80vh w-56 overflow-auto text-right">
          <DropdownMenuLabel>Foguetes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'/foguetes/starship'}
              >
                StarShip
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/falcon9')}
                className="mr-2"
                href={'/foguetes/falcon9'}
              >
                Falcon 9
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/spaceshuttle')}
                className="mr-2"
                href={'/foguetes/spaceshuttle'}
              >
                Space Shuttle
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/ariane5')}
                className="mr-2"
                href={'/foguetes/ariane5'}
              >
                Ariane 5
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Transmissões</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/transmissoes/space-orbit')}
                className="mr-2"
                href={'/transmissoes/spaceorbit'}
              >
                Space Orbit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/transmissoes/spacetoday')}
                className="mr-2"
                href={'/transmissoes/spacetoday'}
              >
                Space Today
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/transmissoes/dobraespacial')}
                className="mr-2"
                href={'/transmissoes/dobraespacial'}
              >
                Dobra Espacial
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/transmissoes/cafeeciencia')}
                className="mr-2"
                href={'/transmissoes/cafeeciencia'}
              >
                Café e Ciência
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/transmissoes/nedoliveira')}
                className="mr-2"
                href={'/transmissoes/nedoliveira'}
              >
                Ned Oliveira
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Empresas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/empresas/spacex')}
                className="mr-2"
                href={'/empresas/spacex'}
              >
                SpaceX
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'#'}
              >
                Nasa
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'#'}
              >
                AEB
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'#'}
              >
                Rocket Lab
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'#'}
              >
                Ariane Space
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                onClick={() => router.push('app/foguetes/starship')}
                className="mr-2"
                href={'#'}
              >
                ULA
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}
