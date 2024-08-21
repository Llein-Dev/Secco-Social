import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { CompassIcon, HomeIcon, LogOutIcon, SearchIcon, SettingsIcon, SignalIcon, UserIcon, UsersIcon } from "@/lib/icon"
import { Button } from "../ui/button"
import { Link } from "lucide-react"

export default function HeaderComponents() {
    return (
        <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background px-4 sm:px-6">
            <div className="flex-1 flex items-center gap-4">
                <a href="#" className="flex items-center gap-2" prefetch={false}>
                    <img src="/logo.svg" className="h-8 w-auto" alt="Logo" />
                    <span className="sr-only">Facebook</span>
                </a>
            </div>

            <div className="flex-1 flex-grow flex items-center justify-center">
                <div className="relative hidden sm:block">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search Facebook"
                        className="h-9 w-[300px] rounded-md bg-muted pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
                </div>
            </div>

            <div className="flex-1 flex justify-end items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <UsersIcon className="h-6 w-6" />
                    <span className="sr-only">Friends</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <SignalIcon className="h-6 w-6" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <img
                                src="/placeholder.svg"
                                width={32}
                                height={32}
                                alt="Profile"
                                className="rounded-full"
                                style={{ aspectRatio: "32/32", objectFit: "cover" }} />
                            <span className="sr-only">Profile</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent cl align="end">
                        <DropdownMenuLabel>
                            <div className="flex items-center gap-4 pr-8">
                                <img
                                    src="/placeholder.svg"
                                    width={40}
                                    height={40}
                                    alt="Profile"
                                    className="rounded-full"
                                    style={{ aspectRatio: "40/40", objectFit: "cover" }} />
                                <div>
                                    <h3 className="font-semibold">John Doe</h3>
                                    <p className="text-sm text-muted-foreground">@johndoe</p>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <a
                                href="#"
                                className="flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                                prefetch={false}>
                                <SettingsIcon className="h-5 w-5" />
                                Settings
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a
                                href="#"
                                className="flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                                prefetch={false}>
                                <LogOutIcon className="h-5 w-5" />
                                Logout
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
