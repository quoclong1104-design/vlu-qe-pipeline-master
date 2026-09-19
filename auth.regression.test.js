const login = require("./auth");

test("Regression - Mật khẩu sai", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Regression - Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression - Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "@#$%^&*")).toBe(false);
});

test("Regression - Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});
