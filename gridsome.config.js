// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'Blog/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
      },
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        // resources: '@/path/to/resources.scss',

        // // or array of paths
        // resources: ['@/path/to/first-resources.sass', '@/path/to/second-resources.scss'],

        // or from the npm package
        resources: [ './src/assets/style/components/_variables.scss', './src/assets/style/components/_mixins.scss' ]
      }
    },
  ],
  templates: {
    BlogPost: '/blog/:title',
    Tag: '/tag/:id',
  },
}
