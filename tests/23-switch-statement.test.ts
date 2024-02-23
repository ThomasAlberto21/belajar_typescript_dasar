describe('Switch Statement', () => {
  it('should be able to use switch statement', () => {
    function sayHello(language: string): string {
      switch (language) {
        case 'en':
          return 'Hello';
        case 'es':
          return 'Hola';
        case 'fr':
          return 'Bonjour';
        default:
          return 'Hello';
      }
    }

    console.log(sayHello('en')); // Hello
    console.log(sayHello('es')); // Hola
    console.log(sayHello('fr')); // Bonjour
    console.log(sayHello('de')); // Hello
  });
});
