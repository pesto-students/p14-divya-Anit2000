function isStrongPassword(password) {
    let lengthRegex = /(?=.*?[A-Z]).{8,}$/;
    let passContainRegex = /^.*password.*$/i;
    if (lengthRegex.test(password) && !passContainRegex.test(password)) return true;
    return false;
}
console.log(isStrongPassword("testString"));
