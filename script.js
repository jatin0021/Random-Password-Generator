const passwordBox = document.getElementById("password");
      const length = 12;

      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const number = "0123456789";
      const symbols = "!@#$%^&*()_-+=<>{}[]|";
      const allChars = uppercase + lowercase + number + symbols;

      function createPassword() {
        let password = "";
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
        while (length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
      }

      async function copyPassword() {
        try {

            const passwordText = passwordBox.value; 
            
            await navigator.clipboard.writeText(passwordText);
    
            console.log('Password copied to clipboard');
            alert('Password copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy password:', err);
            alert('Failed to copy password.');
        }
    }