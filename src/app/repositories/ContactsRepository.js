const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Anderson',
    email: 'andersonsilvapp@gmail.com',
    phone: '1232323232',
    category_id: uuid(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
