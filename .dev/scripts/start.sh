#!/usr/bin/env bash

echo Restoring development workspace
npm run dev-ws > /dev/null 2>&1

npx vercel dev || echo server exited

echo Restoring content workspace
npm run content-ws > /dev/null 2>&1