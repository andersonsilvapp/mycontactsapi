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

  findByEmail(email) {
    return new Promise((resolve) => {
      const result = contacts.find((contact) => contact.email === email);
      resolve(result);
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
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
