import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { MessageCircleIcon, ShareIcon, ThumbsUpIcon } from "@/lib/icon";
export default function CartComponent() {
    return (
        <div>
            <Card>
                <CardHeader className="flex items-center gap-4">
                    <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Profile"
                        className="rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }} />
                    <div>
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">
                            <time dateTime="2023-08-19T09:12:34">19 Aug 2023</time>
                        </p>
                    </div>
                </CardHeader>
                <CardContent>
                    <img
                        src="/placeholder.svg"
                        width={800}
                        height={450}
                        alt="Post image"
                        className="rounded-md object-cover"
                        style={{ aspectRatio: "800/450", objectFit: "cover" }} />
                    <p className="mt-4">
                        Spent the day exploring the city and found this amazing mural. What do you think?
                    </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <ThumbsUpIcon className="h-5 w-5" />
                            <span className="sr-only">Like</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MessageCircleIcon className="h-5 w-5" />
                            <span className="sr-only">Comment</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ShareIcon className="h-5 w-5" />
                            <span className="sr-only">Share</span>
                        </Button>
                    </div>
                    <div className="text-gray-500">
                        <span className="font-semibold">12</span> Likes
                        <span className="ml-4 font-semibold">4</span> Comments
                    </div>
                </CardFooter>
                <div className="mt-4 p-6 border-t-2 space-y-2">
                    <div className="flex items-start space-x-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="/placeholder.svg"
                                width={40}
                                height={40}
                                alt="Profile"
                                className="rounded-full"
                                style={{ aspectRatio: "40/40", objectFit: "cover" }} />

                        </div>
                        <div className="flex-1">
                            <div className="items-center justify-between">
                                <h4 className="font-semibold">John Smith</h4>
                                <p className="text-gray-500">Looks great! I'm excited to see what else you have in store.</p>
                            </div>
                            <div className="flex">
                                <Button variant="ghost" size="icon">
                                    <ThumbsUpIcon className="h-5 w-5" />
                                    <span className="sr-only">Like</span>
                                </Button>
                                <p className="mt-3 text-sm">Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    )
}