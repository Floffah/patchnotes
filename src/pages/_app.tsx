import React, { FC } from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ApplyGlobalStyles } from "../lib/theme/styles";
import { OneDarkTheme } from "../lib/theme/one-dark";

const App: FC<AppProps> = (p) => {
    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Patch Notes"
                description="A list of patch notes as if there were patch notes"
                openGraph={{
                    locale: "en",
                    url: "https://patchnotes.floffah.dev",
                    title: "Patch Notes",
                    description:
                        "A list of patch notes as if there were patch notes",
                    site_name: "Patch Notes",
                }}
            />
            <ApplyGlobalStyles theme={OneDarkTheme}>
                <p.Component {...p.pageProps} />
            </ApplyGlobalStyles>
        </>
    );
};

export default App;
