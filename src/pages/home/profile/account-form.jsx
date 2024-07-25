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
import {DatePicker} from "@/components/datepicker/datepicker.jsx";

export default () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Account settings</CardTitle>
                <CardDescription>Update your account settings. Set your preferred language and timezone.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="firstname">First name</Label>
                            <div className="grid grid-cols-4 gap-4">
                                <Input id="firstname" placeholder="First name"/>
                                <Input id="lastname" placeholder="Last name"/>
                            </div>
                            <small>This is the name that will be displayed on your profile and in emails.</small>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="dob">Date of birth</Label>
                            <DatePicker />
                            <small>Your date of birth is used to calculate your age.</small>
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