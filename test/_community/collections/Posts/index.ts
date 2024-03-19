import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      access: {
        create: () => true,
        update: () => false,
      },
      relationTo: mediaSlug,
      type: 'upload',
    },
    {
      name: 'relations',
      type: 'relationship',
      relationTo: ['tags', 'categories'],
      hasMany: true,
      admin: {
        sortOptions: {
          tags: 'title:desc',
          categories: 'title:desc',
        },
      },
    },
  ],
  slug: postsSlug,
}
