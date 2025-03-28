interface IGraphqlClient {

    query(gql: string, variables: string): Promise<string>;
    mutation(gql: string, variables: string): Promise<string>;

}