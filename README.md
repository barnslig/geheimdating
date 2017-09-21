# Geheimdating
Omegle-Style text only Tinder application to unawkwardly connect with strangers on an event.

## Prerequisites
- Get a decent editor
- Enable eslint support within your editor
- Enable editorconfig support within your editor
- Get node and yarn
- Get to know ES6 and GraphQL
- Don't forget to add yourself to the AUTHORS file when changing something

## Development setup
While developing, you might want to use the auto-reloading on-demand-transpiling server:

    yarn
    yarn start:dev

Now you might want to try out http://localhost:4000/graphql

## Production setup

    yarn --production
    yarn build
    yarn start

## Database migrations
There are [Sequelize-Based](http://docs.sequelizejs.com/manual/tutorial/migrations.html) Migrations within `src/database/migrations`. In order to create a new migration, use the `./gd` toolkit:

    ./gd create:migration
