import React, { FC } from "react";
import request from "graphql-request";
import gql from "graphql-tag";
import { Note } from "../../lib/util/note";
import { APIUrl } from "../../lib/util/urls";
import { NextSeo } from "next-seo";
import { GetServerSideProps } from "next";
import NotePagePage from "../../components/structures/NotePage";

const NotePage: FC<{ note: Note }> = (p) => {
    return (
        <>
            <NextSeo
                title={`${p.note.name} (${p.note.version})`}
                description={`Click this link to view the patch notes "${p.note.version} ${p.note.name}"`}
            />
            <NotePagePage note={p.note} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (!context.params || !context.params.id) return { notFound: true };

    const id = parseInt(context.params.id as string);
    if (isNaN(id)) return { notFound: true };

    let data: any;

    try {
        data = await request(
            APIUrl,
            gql`
                query GetNote($id: Int!) {
                    getNote(id: $id) {
                        id
                        name
                        body
                        tags {
                            name
                        }
                        version
                    }
                }
            `,
            {
                id,
            },
        );
    } catch (e) {
        return { notFound: true };
    }

    return {
        props: {
            note: {
                ...data.getNote,
            },
        },
    };
};

export default NotePage;
