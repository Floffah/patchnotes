import React, { FC, useState } from "react";
import Embed from "./Embed";
import {
    LPNBody,
    LPNIcons,
    LPNTitle,
    LPNVersion,
} from "./ListedPatchNote.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiArrowRight, mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { useRouter } from "next/router";
import { Note } from "../../lib/util/note";
import ReactMarkdown from "react-markdown";

export interface ListedPatchNoteProps {
    note: Note;
}

const ListedPatchNote: FC<ListedPatchNoteProps> = (p) => {
    const router = useRouter();
    const [bodyVisible, setBodyVisible] = useState(false);

    return (
        <Embed>
            <LPNVersion>{p.note.version}</LPNVersion>
            <LPNTitle>{p.note.name}</LPNTitle>
            <LPNIcons>
                <StyledIcon
                    path={bodyVisible ? mdiChevronUp : mdiChevronDown}
                    onClick={() => setBodyVisible(!bodyVisible)}
                />
                <StyledIcon
                    path={mdiArrowRight}
                    onClick={() => {
                        router.push("/note/[id]", "/note/" + p.note.id);
                    }}
                />
            </LPNIcons>
            <LPNBody style={{ display: bodyVisible ? "block" : "none" }}>
                <ReactMarkdown>{p.note.body}</ReactMarkdown>
            </LPNBody>
        </Embed>
    );
};

export default ListedPatchNote;
