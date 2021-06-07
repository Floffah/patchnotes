import React, { Component, ReactNodeArray } from "react";
import { NoteListContainer } from "./NotesList.styles";
import { shift } from "../../lib/theme/resolve";
import request from "graphql-request";
import gql from "graphql-tag";
import { APIUrl } from "../../lib/util/urls";
import { Note } from "../../lib/util/note";
import { ThemeContext } from "styled-components";
import ListedPatchNote from "../display/ListedPatchNote";

export default class NotesList extends Component<
    any,
    { notes: ReactNodeArray; cursor?: number; morePages?: boolean }
> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;

    constructor(p: any) {
        super(p);

        this.state = {
            notes: [],
            morePages: true,
        };
    }

    async fetchPage(cursor?: number) {
        const data = await request(
            APIUrl,
            gql`
                query FetchPage($afterCursor: Int) {
                    notes(first: 10, afterCursor: $afterCursor) {
                        edges {
                            node {
                                body
                                id
                                name
                                tags {
                                    name
                                }
                                version
                            }
                        }
                        pageInfo {
                            hasNextPage
                            endCursor
                        }
                    }
                }
            `,
            {
                cursor,
            },
        );

        return {
            nodes: data.notes.edges.map((edge: any) => edge.node),
            ...data.notes.pageInfo,
        } as { nodes: Note[]; hasNextPage: boolean; endCursor: number };
    }

    async renderNewPages() {
        const nextPages = await this.fetchPage(this.state.cursor);

        const nextNotes: ReactNodeArray = [];

        if (nextPages.nodes.length > 0) {
            for (const note of nextPages.nodes) {
                nextNotes.push(
                    <ListedPatchNote
                        note={note}
                        key={this.state.notes.length + nextNotes.length}
                    />,
                );
            }
        }

        this.setState({
            cursor: nextPages.endCursor,
            morePages: nextPages.hasNextPage,
            notes: nextNotes,
        });
    }

    onScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
            this.renderNewPages();
    };

    componentDidMount() {
        this.renderNewPages();

        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        return (
            <NoteListContainer>
                {this.state.notes}
                {this.state.morePages ? undefined : (
                    <p
                        style={{
                            margin: "auto auto auto 5px",
                            color: shift(
                                this.context.shiftfront,
                                0.3,
                                this.context.back,
                            ),
                        }}
                    >
                        You&apos;ve reached the end
                    </p>
                )}
            </NoteListContainer>
        );
    }
}
