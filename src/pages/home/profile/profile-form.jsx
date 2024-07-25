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
import {Textarea} from "@/components/ui/textarea.jsx";

export default () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile settings</CardTitle>
                <CardDescription>This is how others will see you on the site.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Name of your project"/>
                            <small>This is your public display name. It can be your real name or a pseudonym. You can
                                only change this once every 30 days.</small>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="abcdef@gmail.com" disabled/>
                            <small>You can manage verified email addresses in your email settings.</small>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="bio">Biography</Label>
                            <Textarea id="bio" placeholder="Type your message here." />
                            <small>You can @mention other users and organizations to link to them.</small>
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