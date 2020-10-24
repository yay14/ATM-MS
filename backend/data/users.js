import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    phone: 9022117012,
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Shreya Raj',
    email: 'shreya@example.com',
    phone: 8540115312,
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Shreoshi Roy',
    email: 'shreoshi@example.com',
    phone: 8912324666,
    password: bcrypt.hashSync('1234', 10),
  },
]

export default users