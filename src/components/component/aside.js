import { PlusIcon, SettingsIcon, SignalIcon, UsersIcon } from "@/lib/icon";
import Link from "next/link"
import { Button } from "../ui/button";
export default function AsideComponent() {
    return (
        <aside className="hidden w-[280px] flex-col border-r bg-background p-4 sm:flex">
            <div className="flex items-center gap-4">
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
            <nav className="mt-6 flex flex-col gap-2">
                <Link
                    href="#"
                    className="flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                    prefetch={false}>
                    <UsersIcon className="h-5 w-5" />
                    Friends
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-4 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                    prefetch={false}>
                    <SignalIcon className="h-5 w-5" />
                    Notifications
                </Link>
            </nav>
            <h3 className="mb-4 mt-8 text-lg font-semibold">Suggested Friends</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Profile"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }} />
                    <div>
                        <h4 className="font-semibold">Sarah Lee</h4>
                        <p className="text-sm text-muted-foreground">5 mutual friends</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Add Friend</span>
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Profile"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }} />
                    <div>
                        <h4 className="font-semibold">David Kim</h4>
                        <p className="text-sm text-muted-foreground">2 mutual friends</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Add Friend</span>
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Profile"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }} />
                    <div>
                        <h4 className="font-semibold">Emily Chen</h4>
                        <p className="text-sm text-muted-foreground">7 mutual friends</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Add Friend</span>
                    </Button>
                </div>
            </div>
        </aside>
    );
}