describe('built-in matchers', function() {
  describe('toBeTruthy', function() {
    it('passes if subject is true', function() {
      expect(true).toBeTruthy();
      expect(false).not.toBeTruthy();
    });
  });

  describe('toBeFalsy', function() {
    it('passes if subject is false', function() {
      expect(false).toBeFalsy();
      expect(true).not.toBeFalsy();
    });
  });

  describe('toBeDefined', function() {
    it('passes if subject is not undefined', function() {
      expect({}).toBeDefined();
      expect(undefined).not.toBeDefined();
    });
  });

  describe('toBeNull', function() {
    it('passes if subject is null', function() {
      expect(null).toBeNull();
      expect(undefined).not.toBeNull();
      expect({}).not.toBeNull();
    });
  });
});
