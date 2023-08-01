#!/bin/sh

# Start an infinite loop to keep synchronizing the files
while true; do
  # Use rsync to synchronize the host's assets/data folder to the container's /assets/data folder
  rsync -avz /path/to/applications/website/src/assets/data/ /assets/data/

  # Sleep for a certain duration before syncing again (e.g., every 5 seconds)
  sleep 5
done
