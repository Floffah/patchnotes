import React, { FC } from "react";
import { Note } from "../../lib/util/note";
import {
    NotePageBackContainer,
    NotePageContainer,
    NotePageHeader,
    NotePageID,
    NotePageVersion,
} from "./NotePage.styles";
import Embed from "../display/Embed";
import { StyledIcon } from "../util/StyledIcon";
import { mdiArrowLeftCircle } from "@mdi/js";
import { useRouter } from "next/router";

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
                    <p style={{ margin: "0" }}>{p.note.body}</p>
                </Embed>
                <NotePageID>id: {p.note.id}</NotePageID>
            </NotePageContainer>
        </>
    );
};

export default NotePagePage;
