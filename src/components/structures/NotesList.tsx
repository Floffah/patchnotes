import React, { FC } from "react";
import { NoteListContainer, NotesListInnerScroll } from "./NotesList.styles";
import ListedPatchNote from "../display/ListedPatchNote";
import { useTheme } from "../../lib/theme/theme";
import { shift } from "../../lib/theme/resolve";

const NotesList: FC = (_p) => {
    const theme = useTheme();

    return (
        <NoteListContainer>
            <NotesListInnerScroll>
                <ListedPatchNote
                    title="Example Patch"
                    version="20.20.06.06"
                    id={1}
                />
                {/*<Embed>*/}
                <p
                    style={{
                        margin: "auto auto auto 5px",
                        color: shift(theme.shiftfront, 0.3, theme.back),
                    }}
                >
                    You&apos;ve reached the end
                </p>
                {/*</Embed>*/}
            </NotesListInnerScroll>
        </NoteListContainer>
    );
};

export default NotesList;
