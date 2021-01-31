export default {
  name: 'lessons',
  title: 'Lessons',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Lesson Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lesson_number',
      title: 'Lesson Number',
      description: 'This is for all lessons. Used to match with audio numbers.',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [
        {
          type: 'categories'
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200
      },
    },
    {
      name: 'dialogue',
      title: 'Lesson Dialogue',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'vocabulary',
      title: 'Lesson Vocabulary',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'full_audio',
      title: 'Full Audio',
      type: 'file',
      description: 'Audio for the whole conversation',
      validation: Rule => Rule.required(),
      options: {
        storeOriginalFilename: true
      },
    },
    {
      name: 'speak_part_one_audio',
      title: 'Speak As Character One Audio',
      description: 'Character one audio missing so user can say the lines instead',
      type: 'file',
      validation: Rule => Rule.required(),
      options: {
        storeOriginalFilename: true
      }
    },
    {
      name: 'speak_part_two_audio',
      title: 'Speak As Character Two Audio',
      description: 'Character two audio missing so user can say the lines instead',
      type: 'file',
      validation: Rule => Rule.required(),
      options: {
        storeOriginalFilename: true
      }
    },
    {
      name: 'lesson_image',
      title: 'Lesson Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      },
    },
    {
      name: 'character_one_image',
      title: 'Character One Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'character_one_name',
      title: 'Character One Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'character_two_image',
      title: 'Character Two Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'character_two_name',
      title: 'Character Two Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.category_name',
      lessonNumber: 'lesson_number'
    },
    prepare: ({ title, category, lessonNumber }) => {
      const sub = `${category} - Lesson ${lessonNumber}`;
      return {
        title: title,
        subtitle: sub
      }
    }
  }
}