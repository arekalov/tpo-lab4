#!/usr/bin/env bash
# JMeter: http://127.0.0.1:8079/...  →  stload.se.ifmo.ru:8080 через ifmo
ssh -f -N \
  -o ServerAliveInterval=30 \
  -o ServerAliveCountMax=10 \
  -L 8079:stload.se.ifmo.ru:8080 \
  ifmo
