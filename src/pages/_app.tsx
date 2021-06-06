import React, { FC } from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ApplyGlobalStyles } from "../lib/theme/styles";
import { OneDarkTheme } from "../lib/theme/one-dark";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const App: FC<AppProps> = (p) => {
    const apollo = new ApolloClient({
        uri: "/api/graphql",
        cache: new InMemoryCache(),
    });

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
            <ApolloProvider client={apollo}>
                <ApplyGlobalStyles theme={OneDarkTheme}>
                    <p.Component {...p.pageProps} />
                </ApplyGlobalStyles>
            </ApolloProvider>
        </>
    );
};

export default App;
