function login(username, password) {
    // Kiểm tra tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Kiểm tra tài khoản hợp lệ không
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = login;
