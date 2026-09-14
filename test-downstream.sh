#!/usr/bin/env bash
# Runs the lint script of SinonJS projects against this checkout of the config.
# Each project is linted with its own locked config first, so failures that
# already exist are reported apart from failures caused by this checkout.
#
# Usage: ./test-downstream.sh [project...]

set -uo pipefail

# Projects that depend on @sinonjs/eslint-config v7.
projects=("$@")
if [ ${#projects[@]} -eq 0 ]; then
  projects=(sinon nise samsam referee fake-timers)
fi

root="$(cd "$(dirname "$0")" && pwd)"
work="$root/tmp"
export HUSKY=0

cd "$root" || exit 1
mkdir -p "$work"
tarball="$work/$(npm pack --ignore-scripts --silent --pack-destination "$work")" || exit 1
echo "Packed $tarball"

failures=()

for project in "${projects[@]}"; do
  dir="$work/$project"
  echo
  echo "=== $project"

  rm -rf "$dir"
  if ! git clone --quiet --depth 1 "https://github.com/sinonjs/$project.git" "$dir" ||
    ! (cd "$dir" && npm ci --ignore-scripts --no-audit --no-fund); then
    failures+=("$project: could not clone or install")
    continue
  fi

  echo "--- $project: lint with its locked config"
  if ! (cd "$dir" && npm run lint); then
    failures+=("$project: lint already fails with its locked config")
    continue
  fi

  echo "--- $project: lint with this checkout"
  if ! (cd "$dir" &&
    npm install --no-save --ignore-scripts --no-audit --no-fund "$tarball" &&
    npm run lint); then
    failures+=("$project: lint fails with this checkout")
  fi
done

echo
if [ ${#failures[@]} -gt 0 ]; then
  printf 'FAILED %s\n' "${failures[@]}"
  exit 1
fi
echo "All projects pass: ${projects[*]}"
