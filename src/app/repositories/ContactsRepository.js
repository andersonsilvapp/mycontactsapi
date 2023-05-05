const { v4 } = require('uuid');

const db = require('../../database');

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

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
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
