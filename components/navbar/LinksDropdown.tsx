import { LuAlignLeft } from "react-icons/lu";

import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import SignOutLink from "@/components/navbar/SignOutLink";
import UserIcon from "@/components/navbar/UserIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { links } from "@/utils/links";

async function LinksDropdown() {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-[100px] gap-4">
          <LuAlignLeft className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <SignedIn>
          {links.map((link) => {
            if (link.label === "dashboard" && !isAdmin) return null;

            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="w-full capitalize">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button type="button" className="w-full text-left">
                Login
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button type="button" className="w-full text-left">
                Register
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
