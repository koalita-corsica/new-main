export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f620b8c5b825f387bcc8aa6',
                  title: 'Sanity Studio',
                  name: 'new-main-studio',
                  apiId: 'bc216468-0215-4434-a4b9-63854dd9e7a7'
                },
                {
                  buildHookId: '5f620b8ca289193766b866c6',
                  title: 'Portfolio Website',
                  name: 'new-main',
                  apiId: '6aec2476-2672-48fa-8f04-a1e573e8089f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koalita-corsica/new-main',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://new-main.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
