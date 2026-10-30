const { counter } = require("okmetrics");
const checks = { passed: counter(), failed: counter() };
function report(list) {
  for (const item of list) (item.ok ? checks.passed : checks.failed).inc();
  return `pass=${checks.passed.value()} fail=${checks.failed.value()}`;
}
module.exports = { report };
if (require.main === module) console.log(report([{ ok: true }, { ok: false }]));
