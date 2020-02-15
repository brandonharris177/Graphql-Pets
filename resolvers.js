/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

//  arguments on resolver
//  first _ (top level resolver),
//  second _ _ ( arguemnts, pagination, filtering),
//  third context {} (gives you access to other things like models)
//  demo(_, _ _, {models})

module.exports = {
    //must match schema Query / user
    Query: {
      userList(_,__,context){
        return context.models.User.findOne()
      },
      petsList(_, __,context){
          return context.models.Pet.findMany()
      },
      //input comes from schema
      onePet(_, {input}, context){
          return context.models.Pet.findOne(input)
      }
      
    },
    // Mutation: {
      
    // },
    // Pet: {
    //   img(pet) {
    //     return pet.type === 'DOG'
    //       ? 'https://placedog.net/300/300'
    //       : 'http://placekitten.com/300/300'
    //   }
    // },
    // User: {
      
    // }
  }