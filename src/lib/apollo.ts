import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovfn2317gz01xshd937y3m/master",
  cache: new InMemoryCache(),
});
