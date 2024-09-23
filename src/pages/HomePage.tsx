import React from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";
import Provider from "@/components/providers/Provider";
export default function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center gap-2">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <LangToggle />
                <ToggleTheme />
                <Separator />
                <Link to={'/registration'}>registration</Link>
            </div>
        </>
    );
}
