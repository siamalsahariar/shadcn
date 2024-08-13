import { Container, MenuIcon, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { ModeToggle } from "./ToggleButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white dark:bg-gray-800 border">
      <Link href="/" className="flex items-center gap-2">
        <Container className="w-8 h-8" />
        <span className="text-lg font-semibold">Shop IT</span>
      </Link>

      <div className="hidden md:flex gap-4 mr-1">
        <Button className="mb-2" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="overflow-hidden rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/profile">Settings</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href="/profile">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"} className="lg:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="grid w-[200px] p-4">
            <Link
              href="/admin/dashboard"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              Dashboard
            </Link>

            <Link
              href="/me/bookings"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              My Bookings
            </Link>
            <Link
              href="/me/settings"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              Settings
            </Link>
            <DropdownMenuSeparator />
            <Link
              href="/"
              className="text-lg font-medium hover:underline underline-offset-4"
            >
              Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
