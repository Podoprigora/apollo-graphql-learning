import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export interface GraphQLProviderProps {
  children?: React.ReactNode;
}

const client = new ApolloClient({
  uri: 'http://localhost:5020/',
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export const GraphQLProvider = (props: GraphQLProviderProps) => {
  const { children } = props;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
