const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Anderson',
    email: 'andersonsilvapp@gmail.com',
    phone: '1232323232',
    category_id: v4(),

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
