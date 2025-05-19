#!/bin/bash

# Exit on error
set -e

# Check if node_modules exists and is non-empty
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "Dependencies already installed."
fi

# Start proxy server
echo "Starting proxy in background..."
nohup node server.js > proxy.log 2>&1 & disown
echo "Proxy server started. Logs are in proxy.log"