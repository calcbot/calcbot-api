export const graphqlQuery = async ({ query, variables = {} }) => {
    return (await (await fetch(`https://graphql.calc.bot/v1/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-hasura-admin-secret': process.env.DB_PASSWORD },
        body: JSON.stringify({ query, variables }),
    })).json())?.data;
}