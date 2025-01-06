import ConcretePrototype from './ConcretePrototype';

const main = () => {
  const prototype = new ConcretePrototype('First concrete');
  console.log(`Prototype: \n${JSON.stringify(prototype, null, 2)}`);
  const clone = prototype.clone();
  console.log(`Clone: \n${JSON.stringify(clone, null, 2)}`);
};
main();
