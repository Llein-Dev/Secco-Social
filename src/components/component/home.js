

import HeaderComponents from "./header";
import AsideComponent from "./aside";
import AsideRightComponent from "./aside-r";
import CartComponent from "./card";

export function HomeComponent() {
  return (
    (<div className="flex min-h-screen w-full flex-col bg-background">
      <HeaderComponents />
      <div className="flex flex-1">
        <AsideComponent />
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-2xl space-y-4 p-4 sm:p-6">
            <CartComponent/>
          </div>
        </div>
        <AsideRightComponent />
      </div>
    </div>)
  );
}

