import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloClient } from "apollo-client"
import resolverHome from "./home/resolvers"
import { mergeResolvers } from "./utils"
import data from "./data"

const resolversArray = [resolverHome]
const resolvers = mergeResolvers(resolversArray)

const cache = new InMemoryCache({
  resolvers
})

const client = new ApolloClient({
  cache,
  link: new HttpLink(),
})

cache.writeData({
  data
})

window.cache = cache.optimisticData.data

export { client }
