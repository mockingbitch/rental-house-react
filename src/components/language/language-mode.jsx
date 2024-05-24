import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.jsx";
import {Languages} from "lucide-react";
import {useTranslation} from "react-i18next";
import {LANG_EN, LANG_VI} from "@/lib/constants.js";

export default () => {
    const { i18n } = useTranslation();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuCheckboxItem
                    checked={ i18n.language === LANG_EN }
                    onCheckedChange={() => i18n.changeLanguage(LANG_EN)}
                >
                    English
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={ i18n.language === LANG_VI }
                    onCheckedChange={() => i18n.changeLanguage(LANG_VI)}
                >
                    Vietnamese
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}