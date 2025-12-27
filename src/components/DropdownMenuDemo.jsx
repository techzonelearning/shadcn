import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ProductProvider } from "@/context/ContextProvider";
import auth from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

export function DropdownMenuDemo() {
  let { userInfo, setUserInfo } = useContext(ProductProvider);
  console.log(userInfo);

  let navigate = useNavigate();
  async function logoutHandler() {
    signOut(auth)
      .then(() => {
        toast.success("logout successfully");
        setUserInfo(null);
        navigate("/form");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {userInfo != null ?  (
          <div className="relative w-fit">
            <Avatar className="ring-2 ring-green-500 ring-offset-2 ring-offset-background animate-pulse">
              <AvatarImage
                alt={userInfo?.displayName}
                src={userInfo?.photoURL}
              />
              <AvatarFallback>{userInfo?.displayName}</AvatarFallback>
            </Avatar>
            <span className="-bottom-1 -right-1 absolute size-3 rounded-full border-2 border-background bg-green-500" />
          </div>
        ): (
           <Avatar className="rounded-lg">
            <AvatarFallback className="rounded-lg">
              <User className="size-6" />
            </AvatarFallback>
          </Avatar>
        )}
     
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
