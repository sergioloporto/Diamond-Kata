QUnit.test("check validation 1", function (assert) {
  let input = document.getElementById("input");
  input.value = "abc";
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "");
});

QUnit.test("check validation 2", function (assert) {
  let input = document.getElementById("input");
  input.value = "[";
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "");
});

QUnit.test("check validation 3", function (assert) {
  let input = document.getElementById("input");
  input.value = null;
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "");
});

QUnit.test("Check diamond 1", function (assert) {
  let input = document.getElementById("input");
  input.value = "A";
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "A<br>");
});

QUnit.test("Check diamond 2", function (assert) {
  let input = document.getElementById("input");
  input.value = "B";
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "_A_<br>B_B<br>_A_<br>");
});

QUnit.test("Check diamond 3", function (assert) {
  let input = document.getElementById("input");
  input.value = "C";
  input.onkeyup();
  let diamond = document.getElementById("diamond");
  let result = diamond.innerHTML;
  assert.equal(result, "__A__<br>_B_B_<br>C___C<br>_B_B_<br>__A__<br>");
});
