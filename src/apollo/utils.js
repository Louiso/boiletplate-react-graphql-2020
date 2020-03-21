export const mergeResolvers = resolversArray => {
  let ResolverFinal = {}
  resolversArray.forEach(resolver => {
    const {
      Mutation: MutationFinal,
      Query: QueryFinal,
      ...RestFinal
    } = ResolverFinal
    const { Mutation, Query, ...rest } = resolver

    ResolverFinal = {
      Mutation: {
        ...MutationFinal,
        ...Mutation
      },
      Query: {
        ...QueryFinal,
        ...Query
      },
      ...RestFinal,
      ...rest
    }
  })

  return ResolverFinal
}
