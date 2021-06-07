import React, { FC } from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ApplyGlobalStyles } from "../lib/theme/styles";
import { OneDarkTheme } from "../lib/theme/one-dark";
import { GlobalIcons } from "../components/structures/GlobalStyles";
import { StyledIcon } from "../components/util/StyledIcon";
import { mdiDiscord, mdiGithub } from "@mdi/js";
import { useRouter } from "next/router";

const App: FC<AppProps> = (p) => {
    const router = useRouter();

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
                <GlobalIcons>
                    <StyledIcon
                        path={mdiGithub}
                        size={2}
                        onClick={() =>
                            router.push("https://github.com/floffah/patchnotes")
                        }
                    />
                    <StyledIcon
                        path={mdiDiscord}
                        size={2}
                        onClick={() =>
                            router.push("https://discord.gg/bc8Y2y9")
                        }
                    />
                </GlobalIcons>
            </ApplyGlobalStyles>
        </>
    );
};

export default App;
