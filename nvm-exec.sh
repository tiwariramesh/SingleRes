#!/bin/bash
# Helper script to load nvm and run commands

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20 > /dev/null 2>&1

# Execute the command passed as arguments
exec "$@"
