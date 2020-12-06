export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fccd809505f01389c804d77',
                  title: 'Sanity Studio',
                  name: 'gatsbychurch-studio',
                  apiId: '40cd541c-7f8d-46d5-85f4-0580c1ae685a'
                },
                {
                  buildHookId: '5fccd80926e26c775e6fe4ff',
                  title: 'Blog Website',
                  name: 'gatsbychurch',
                  apiId: 'decfd817-884a-4b6d-8bc9-fc35418bc1fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atwilliams88dev/gatsbyChurch',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsbychurch.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
