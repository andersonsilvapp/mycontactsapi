const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Anderson',
    email: 'andersonsilvapp@gmail.com',
    phone: '1232323232',
    category_id: v4(),

  },
  {
    id: v4(),
    name: 'Manoel Gomes',
    email: 'manoelgomes@gmail.com',
    phone: '5698788855',
    category_id: v4(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const result = contacts.find((contact) => contact.id === id);
      resolve(result);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
