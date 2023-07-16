import Link from 'next/link'
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="cursor-pointer text-right" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Foguetes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              StarShip
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Falcon 9
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Space Shuttle
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Ariane 5
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Transmissões</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Space Orbit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Space Today
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Dobra Espacial
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Café e Ciência
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Ned Oliveira
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Transmissões</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              SpaceX
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Nasa
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              AEB
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Rocket Lab
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              Ariane Space
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 w-2/3" href={'#'}>
              ULA
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
