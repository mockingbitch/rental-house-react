import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@radix-ui/react-label";
import {Button} from "@/components/ui/button.jsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.jsx";
import {BellIcon} from "lucide-react";
import {Switch} from "@/components/ui/switch.jsx";

export default () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notification settings</CardTitle>
                <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="firstname">Notify me about...</Label>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1"/>
                                    <Label htmlFor="r1">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2"/>
                                    <Label htmlFor="r2">Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3"/>
                                    <Label htmlFor="r3">Compact</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="firstname">Email Notifications</Label>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                <BellIcon/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Communication emails
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Receive emails about your account activity.
                                    </p>
                                </div>
                                <Switch/>
                            </div>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                <BellIcon/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Marketing emails
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Receive emails about new products, features, and more.
                                    </p>
                                </div>
                                <Switch/>
                            </div>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                <BellIcon/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Social emails
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Receive emails for friend requests, follows, and more.
                                    </p>
                                </div>
                                <Switch/>
                            </div>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                <BellIcon/>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Security emails
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Receive emails about your account activity and security.
                                    </p>
                                </div>
                                <Switch/>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Update</Button>
            </CardFooter>
        </Card>
    );
}