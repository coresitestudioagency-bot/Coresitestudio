#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
echo "Preview ready: Bloom & Petal/dist/index.html (linked from explore.html)"
