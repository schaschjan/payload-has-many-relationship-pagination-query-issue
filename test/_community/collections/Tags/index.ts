import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const tagsSlug = 'tags'

export const TagsCollection: CollectionConfig = {
  slug: tagsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
