import Validator from '../validator';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('#validateUsername()', () => {
    it('should return true for a valid username', () => {
      expect(validator.validateUsername('john_doe123')).toBe(true);
      expect(validator.validateUsername('jane-doe')).toBe(true);
    });

    it('should return false for an invalid username with invalid characters', () => {
      expect(validator.validateUsername('john@doe')).toBe(false);
      expect(validator.validateUsername('jane.doe')).toBe(false);
    });

    it('should return false for an invalid username starting or ending with invalid characters', () => {
      expect(validator.validateUsername('123john')).toBe(false);
      expect(validator.validateUsername('john123_')).toBe(false);
      expect(validator.validateUsername('-john-')).toBe(false);
    });

    it('should return false for an invalid username with consecutive digits', () => {
      expect(validator.validateUsername('johndoe1234')).toBe(false);
      expect(validator.validateUsername('janedoe_5678')).toBe(false);
    });
  });
});

  