import { faker } from '@faker-js/faker';

export default {
  user: function () {
    const data = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password({ length: 6 }),
    };
    return data;
  },
  incorrectUser: function(){
    const data = {
      nome: '',
      email: 'teste',
      senha: faker.internet.password({ length: 3 })
    }
  }
};