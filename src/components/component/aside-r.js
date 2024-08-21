import { HashIcon, PlusIcon } from "@/lib/icon";
import { Button } from "../ui/button";

export default function AsideRightComponent() {
  return (
    <aside className="hidden w-[280px] flex-col border-l bg-background p-4 sm:flex">
      <h3 className=" mb-4 text-lg font-semibold">Trending</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <HashIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm font-medium">#SummerVacation</p>
        </div>
        <div className="flex items-center gap-4">
          <HashIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm font-medium">#NewRestaurantOpening</p>
        </div>
        <div className="flex items-center gap-4">
          <HashIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm font-medium">#TechNews</p>
        </div>
      </div>
      <h3 className="mb-4 mt-8 text-lg font-semibold">Friends</h3>
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
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
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
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
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
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
    </aside>
  )
}