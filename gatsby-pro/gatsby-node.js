const path = require('path');

async function turnLessonsIntoCategoryPages({ graphql, actions }) {
  const categoryLessonsTemplate = path.resolve('./src/templates/Lessons.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategories {
        nodes {
          id
          category_name
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `/${category.slug.current}`,
      component: categoryLessonsTemplate,
      context: {
        categoryName: category.category_name,
        categorySlug: category.slug.current,
        categoryId: category.id
      }
    });
  });
};

async function turnLessonIntoLessonPage({ graphql, actions }) {
  const lessonTemplate = path.resolve('./src/templates/Lesson.js');

  const { data } = await graphql(`
    query {
      lessons: allSanityLessons {
        nodes {
          id
          slug {
            current
          }
          category {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.lessons.nodes.forEach((lesson) => {
    actions.createPage({
      path: `/${lesson.category.slug.current}/${lesson.slug.current}`,
      component: lessonTemplate,
      context: {
        categorySlug: lesson.category.slug.current,
        lessonSlug: lesson.slug.current,
        lessonId: lesson.id
      }
    });
  })
}

exports.createPages = async (params) => {
  await Promise.all([
    turnLessonsIntoCategoryPages(params),
    turnLessonIntoLessonPage(params),
  ]);
};