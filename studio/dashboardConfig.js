export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea74862be844edd61507e93',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7m6fn9eg',
                  apiId: '9d8cebf8-e0e9-4152-b6c0-46409b62f881'
                },
                {
                  buildHookId: '5ea74863a72f5be933578a41',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z5suhv8a',
                  apiId: '7dd438b8-0feb-4e0a-9a30-6b30e1896925'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tcharyga/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z5suhv8a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
