import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { CategoriesCollection, categoriesSlug } from './collections/Categories'
import { MediaCollection } from './collections/Media'
import { PostsCollection, postsSlug } from './collections/Posts'
import { TagsCollection, tagsSlug } from './collections/Tags'
import { MenuGlobal } from './globals/Menu'
import categories from '../live-preview/collections/Categories'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [
    PostsCollection,
    MediaCollection,
    TagsCollection,
    CategoriesCollection,
    // ...add more collections here
  ],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    for (let index = 0; index < 50; index++) {
      await payload.create({
        collection: tagsSlug,
        data: {
          title: `Tag ${index + 1}`,
        },
      })
    }

    for (let index = 0; index < 50; index++) {
      await payload.create({
        collection: categoriesSlug,
        data: {
          title: `Category ${index + 1}`,
        },
      })
    }

    await payload.create({
      collection: postsSlug,
      data: {
        text: 'example post',
      },
    })
  },
})
