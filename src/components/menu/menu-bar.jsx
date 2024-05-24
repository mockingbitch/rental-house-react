import {
    SheetContent,
} from "@/components/ui/sheet";

const MenuBar = (props) => {
    const ContentComponent = props?.contentComponent;

    return (
        <SheetContent side={ props?.side }>
            <ContentComponent/>
        </SheetContent>
    );
}

export default MenuBar;