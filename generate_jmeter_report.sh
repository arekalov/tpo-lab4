#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARG="${1:-load}"

JMETER_HOME="${JMETER_HOME:-${SCRIPT_DIR}/../apache-jmeter-5.6.3}"
JMETER_BIN="${JMETER_HOME}/bin/jmeter"

usage() {
  echo "Использование: $0 [ load | stress | путь/к/плану.jmx ]" >&2
  echo "  load   (по умолчанию) — Load.jmx   → results/load-result-ДАТА-ВРЕМЯ/" >&2
  echo "  stress              — Stress.jmx или Test.jmx → results/stress-result-ДАТА-ВРЕМЯ/" >&2
  exit 1
}

JMX=""
PREFIX=""

if [[ "${ARG}" == "-h" || "${ARG}" == "--help" ]]; then
  usage
fi

# Явный путь к .jmx
if [[ -f "${ARG}" ]]; then
  JMX="$(cd "$(dirname "${ARG}")" && pwd)/$(basename "${ARG}")"
elif [[ -f "${SCRIPT_DIR}/${ARG}" ]]; then
  JMX="${SCRIPT_DIR}/${ARG}"
else
  key="$(printf '%s' "${ARG}" | tr '[:upper:]' '[:lower:]')"
  case "${key}" in
    load)
      JMX="${SCRIPT_DIR}/Load.jmx"
      PREFIX=load-result
      ;;
    stress|test)
      if [[ -f "${SCRIPT_DIR}/Test.jmx" ]]; then
        JMX="${SCRIPT_DIR}/Test.jmx"
      else
        JMX="${SCRIPT_DIR}/Stress.jmx"
      fi
      PREFIX=stress-result
      ;;
    *)
      echo "Неизвестный аргумент: ${ARG}" >&2
      usage
      ;;
  esac
fi

# Префикс каталога по имени файла, если зашли по пути
if [[ -z "${PREFIX}" ]]; then
  base="$(basename "${JMX}" .jmx)"
  case "$(printf '%s' "${base}" | tr '[:upper:]' '[:lower:]')" in
    load) PREFIX=load-result ;;
    stress|test) PREFIX=stress-result ;;
    *)
      echo "По имени файла не понятно: load или stress. Ожидается Load.jmx / Stress.jmx / Test.jmx, получено: ${JMX}" >&2
      exit 1
      ;;
  esac
fi

if [[ ! -x "${JMETER_BIN}" ]]; then
  echo "Не найден JMeter: ${JMETER_BIN}" >&2
  echo "Установи JMETER_HOME или положи apache-jmeter-* в $(cd "${SCRIPT_DIR}/.." && pwd)" >&2
  exit 1
fi

if [[ ! -f "${JMX}" ]]; then
  echo "Нет файла плана: ${JMX}" >&2
  exit 1
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_ROOT="${SCRIPT_DIR}/results/${PREFIX}-${STAMP}"
JTL="${OUT_ROOT}/samples.jtl"
HTML_DIR="${OUT_ROOT}/html-dashboard"

mkdir -p "${OUT_ROOT}"
mkdir "${HTML_DIR}"

echo "JMeter:  ${JMETER_BIN}"
echo "План:    ${JMX}"
echo "Префикс: ${PREFIX}"
echo "JTL:     ${JTL}"
echo "Отчёт:   ${HTML_DIR}"
echo

# -j /dev/null — не создавать jmeter.log в каталоге проекта
"${JMETER_BIN}" -n -t "${JMX}" -l "${JTL}" -e -o "${HTML_DIR}" -j /dev/null

echo
echo "Готово. Открой в браузере:"
echo "  file://${HTML_DIR}/index.html"
