import 'dotenv/config.js'
import "../../config/dataBase.js"
import User from '../User.js'
import bcryptjs from "bcryptjs";

let users = [
    {
        username: "user1",
        password: "password1",
        email: "user1@example.com",
        phone: 1234567890,
        address: "Madrid, España",
        online: false,
    },
    {
        username: "user2",
        password: "password2",
        email: "user2@example.com",
        phone: 2345678901,
        address: "Barcelona, España",
        online: false,
    },
    {
        username: "user3",
        password: "password3",
        email: "user3@example.com",
        phone: 3456789012,
        address: "Bogotá, Colombia",
        online: false,
    },
    {
        username: "user4",
        password: "password4",
        email: "user4@example.com",
        phone: 4567890123,
        address: "Buenos Aires, Argentina",
        online: false,
    },
    {
        username: "user5",
        password: "password5",
        email: "user5@example.com",
        phone: 5678901234,
        address: "Lima, Perú",
        online: false,
    },
    {
        username: "user6",
        password: "password6",
        email: "user6@example.com",
        phone: 6789012345,
        address: "Caracas, Venezuela",
        online: false,
    },
    {
        username: "user7",
        password: "password7",
        email: "user7@example.com",
        phone: 7890123456,
        address: "Santiago, Chile",
        online: false,
    },
    {
        username: "user8",
        password: "password8",
        email: "user8@example.com",
        phone: 8901234567,
        address: "Quito, Ecuador",
        online: false,
    },
    {
        username: "user9",
        password: "password9",
        email: "user9@example.com",
        phone: 9012345678,
        address: "Montevideo, Uruguay",
        online: false,
    },
    {
        username: "user10",
        password: "password10",
        email: "user10@example.com",
        phone: 1234567809,
        address: "San José, Costa Rica",
        online: false,
    }
]

async function hashPasswords(data) {
    let hashes
   hashes = await data.map(res=>
  {
      let passwordH = bcryptjs.hashSync(res.password, 10);
      return{...res, password: passwordH}
   })
    return hashes;
}
let usersHashes = await hashPasswords(users)

User.insertMany(usersHashes);