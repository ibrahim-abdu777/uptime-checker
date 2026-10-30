const test = require("node:test");
const assert = require("node:assert");
const { report } = require("../src/cli");
test("report counts pass/fail", () => {
  assert.strictEqual(report([{ ok: true }, { ok: true }, { ok: false }]), "pass=2 fail=1");
});
