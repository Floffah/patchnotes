import React, { FC } from "react";
import { NoteListContainer, NotesListInnerScroll } from "./NotesList.styles";
import Embed from "../display/Embed";
import ListedPatchNote from "../display/ListedPatchNote";

const NotesList: FC = (_p) => {
    return (
        <NoteListContainer>
            <NotesListInnerScroll>
                <ListedPatchNote title="Example Patch" version="20.20.06.06" />
                <Embed>
                    <p style={{ margin: "auto" }}>
                        You&apos;ve reached the end
                    </p>
                </Embed>
            </NotesListInnerScroll>
        </NoteListContainer>
    );
};

export default NotesList;
