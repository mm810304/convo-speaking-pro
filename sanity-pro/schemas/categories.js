export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'category_name',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'number',
      title: 'Category Number',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'category_name',
        maxLength: 200,
      },
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
}