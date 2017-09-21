#!/bin/sh

case $1 in
  create:migration)
    if [ -z $2 ]; then
      echo "Usage: ${0} create:migration create_users";
    else
      MIGRATION_IDENTIFIER="$(date +'%Y%m%d%H%M%S')_$(echo $2 | tr '[:upper:]' '[:lower:]' | tr -s ' ' | tr ' ' '_')"
      MIGRATION_FILENAME="src/database/migrations/${MIGRATION_IDENTIFIER}.js"
      cat > $MIGRATION_FILENAME <<EOL
import Sequelize from 'sequelize';

export const up = queryInterface => ();

export const down = queryInterface => ();
EOL
      echo "Migration ${MIGRATION_FILENAME} successfully created."
    fi
    ;;
  *)
    ;;
esac
