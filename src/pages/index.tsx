import React, { FC } from "react";
import { NextSeo } from "next-seo";
import NotesList from "../components/structures/NotesList";
import { IndexHeader } from "../components/structures/IndexPage.utils";

const Index: FC = (_p) => {
    return (
        <>
            <NextSeo title="Home" />
            <IndexHeader>Patch Notes</IndexHeader>
            <NotesList />
        </>
    );
};

export default Index;
