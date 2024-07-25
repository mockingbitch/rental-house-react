import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ProfileForm from "@/pages/home/profile/profile-form.jsx";
import AccountForm from "@/pages/home/profile/account-form.jsx";
import NotificationForm from "@/pages/home/profile/notification-form.jsx";
import ProfileCard from "@/pages/home/profile/profile-card.jsx";

export default () => {
    return (
        <div className="container mx-auto mt-8">
            <div className="flex flex-col space-y-1.5">
                <div className="sm:grid grid-flow-row-dense grid-cols-3">
                    <div className="row-span-3">
                        <ProfileCard className="col-span-2"/>
                    </div>
                    <Accordion type="single" collapsible className="w-full col-span-2 overflow-visible mt-[50px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Profile</AccordionTrigger>
                            <AccordionContent>
                                <ProfileForm/>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Account</AccordionTrigger>
                            <AccordionContent>
                                <AccountForm/>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Notifications</AccordionTrigger>
                            <AccordionContent>
                                <NotificationForm/>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
