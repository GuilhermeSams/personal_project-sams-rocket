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
            <span className="ml-2">StarShip</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Falcon 9</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Space Shutle</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Ariane 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Transmissões</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="ml-2">Space Orbit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Space Today</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Dobra Espacial</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Café e Ciencia</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Ned Oliveira</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Transmissões</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="ml-2">SpaceX</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">NASA</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">AEB</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Rocket Lab</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">Ariane Space</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="ml-2">ULA</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
