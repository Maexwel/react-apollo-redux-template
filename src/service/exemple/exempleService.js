import gql from 'graphql-tag'; //  nécessaire pour parser la query

export const EXEMPLE_QUERY = gql`
    query exemple {
        exemple(where{id: 1}){
            id
            text
        }
    }`

export const EXEMPLE_MUTATION = gql`
    mutation ($todo: String!, $isPublic: Boolean!) {
        insert_todos(objects: {title: $todo, is_public: $isPublic}) {
            affected_rows
            returning {
            id
            title
            created_at
            is_completed
            }
        }
    }`