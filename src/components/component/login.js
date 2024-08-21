/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TjRBnJifv2t
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function LoginComponent() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <img
                        src="/placeholder.svg"
                        alt="Google"
                        width={40}
                        height={40}
                        className="mx-auto"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Or{" "}
                        <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
                            create a new account
                        </Link>
                    </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="sr-only">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="remember-me" name="remember-me" />
                            <Label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                                Remember me
                            </Label>
                        </div>
                        <div className="text-sm">
                            <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="relative flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <Button
                        variant="outline"
                        className="relative flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-muted/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <ChromeIcon className="mr-2 h-5 w-5" />
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

function ChromeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}