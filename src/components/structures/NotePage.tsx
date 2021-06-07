import React, { FC } from "react";
import { Note } from "../../lib/util/note";
import {
    NotePageBackContainer,
    NotePageBodyContainer,
    NotePageContainer,
    NotePageHeader,
    NotePageID,
    NotePageVersion,
} from "./NotePage.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiArrowLeftCircle } from "@mdi/js";
import { useRouter } from "next/router";
import Embed from "../display/Embed";

const NotePagePage: FC<{ note: Note }> = (p) => {
    const router = useRouter();

    return (
        <>
            <NotePageBackContainer onClick={() => router.push("/")}>
                <StyledIcon path={mdiArrowLeftCircle} />
                <p>Back</p>
            </NotePageBackContainer>
            <NotePageContainer>
                <NotePageHeader>{p.note.name}</NotePageHeader>
                <NotePageVersion>{p.note.version}</NotePageVersion>
                <Embed>
                    <NotePageBodyContainer>{p.note.body}</NotePageBodyContainer>
                </Embed>
                <NotePageID>id: {p.note.id}</NotePageID>
            </NotePageContainer>
        </>
    );
};

export default NotePagePage;
