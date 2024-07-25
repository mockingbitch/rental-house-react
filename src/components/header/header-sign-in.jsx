import {useEffect, useState} from "react";
import {
    logoIcon, hamburgerIcon, githubIcon, twitterIcon
} from "@/assets/images/icon";
import {
    Sheet,
    SheetTrigger,
} from '@/components/ui/sheet';
import {Button} from "@/components/ui/button";
import MenuBar from "@/components/menu/menu-bar";
import clsx from "clsx";
import {MENU_NAVIGATION_SIDE, MOBILE_WIDTH} from "@/lib/constants.js";
import NightModeButton from "@/components/button/night-mode-button";
import SearchForm from "@/components/search/search-form.jsx";
import SidebarContent from "@/components/menu/content/sidebar-content.jsx";
import LanguageMode from "@/components/language/language-mode.jsx";
import {HomeAccountMenu} from "@/components/menu/home-account-menu.jsx";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <>
            <header
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <img src={ logoIcon } width={20} height={20} alt='Logo'/>
                            <span className="hidden font-bold sm:inline-block">Rentalhouse</span>
                        </a>
                        <nav className="flex items-center gap-4 text-base lg:gap-6">
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/docs"
                            >Docs</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/docs/components"
                            >Components</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/themes"
                            >Themes</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/examples"
                            >Examples</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/blocks"
                            >Blocks</a>
                            <a
                                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                                href="https://github.com/shadcn-ui/ui"
                            >GitHub</a>
                        </nav>
                    </div>
                    <Sheet key={ MENU_NAVIGATION_SIDE }>
                        <SheetTrigger asChild>
                            <Button className={clsx('outline-0', width >= MOBILE_WIDTH ? 'hidden' : '')} variant="outline">
                                <img src={ hamburgerIcon } width={20} height={20} alt='Hamburger menu'/>
                            </Button>
                        </SheetTrigger>
                        <MenuBar side={ MENU_NAVIGATION_SIDE } contentComponent={ SidebarContent } />
                    </Sheet>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <SearchForm />
                        </div>
                        <nav className="flex items-center">
                            <div className="mx-2">
                                <HomeAccountMenu/>
                            </div>
                            <div className="mx-2">
                                <LanguageMode/>
                            </div>
                            <div className="mx-2">
                                <NightModeButton/>
                            </div>
                        </nav>
                    </div>
                </div>
                <Sheet key="left"/>
            </header>
        </>
    );
}

export default Header;