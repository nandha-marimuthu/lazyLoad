import bcrypt from 'bcryptjs'


const users=[
  {
    name:'Admin User',
    email:'admin1@vugha.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true
  },
  {
    name:'Rohit',
    email:'rohit@vugha.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false
  },
  {
    name:'Bansie',
    email:'bansie@vugha.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false
  },
 
]
export default users