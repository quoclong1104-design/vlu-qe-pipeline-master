const login = require("./auth");

test("Smoke Test - Đăng nhập đúng với admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});
