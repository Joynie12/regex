export default class Validator {
    validateUsername(username) {
      const regex = /^[a-zA-Z0-9_-]+$/;
      const invalidStartEndRegex = /^[0-9_-]|[-_]$/;
      const invalidConsecutiveDigitsRegex = /\d{4}/;
      
      if (!regex.test(username)) {
        return false;
      }
      
      if (invalidStartEndRegex.test(username)) {
        return false;
      }
      
      if (invalidConsecutiveDigitsRegex.test(username)) {
        return false;
      }
      
      return true;
    }
  }
  