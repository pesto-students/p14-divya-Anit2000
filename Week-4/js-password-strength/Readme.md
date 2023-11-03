### JavaScript password strength

==Sandbox solution link==
<https://codesandbox.io/s/solitary-forest-y9wnr6?file=/src/index.mjs:0-268>

---

**Please Complete Below assignment and upload github link of that solution after completion**

Write a function called isStrongPassword() in script.js that has a single password parameter. The function should return true only if all the following conditions are true:

The password is at least 8 characters long.
The password does not contain the string "password".
The password contains at least one uppercase character.
If any of the above conditions are false, isStrongPassword() should return false. Below are example calls to isStrongPassword():

isStrongPassword("Qwerty"); // false - Too short isStrongPassword("passwordQwerty") // false - Contains "password" isStrongPassword("qwerty123") // false - No uppercase characters isStrongPassword("Qwerty123") // true

To test your code in your web browser, call isStrongPassword() from the JavaScript console.
