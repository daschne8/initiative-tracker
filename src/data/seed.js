import {v4 as uuidv4} from 'uuid';
let faker = require('faker')

export const seedChars = [
  {name: "Thor", initiative: 14, dexterity: 8, moved: false, uuid: uuidv4()},
  {name: "Stabs McKenzie", initiative: 20, dexterity: 20, moved: false, uuid: uuidv4()},
  {name: "Sparkles", initiative: 9, dexterity: 8, moved: false, uuid: uuidv4()},
  {name: "Swedish Chef", initiative: 9, dexterity: 14, moved: false, uuid: uuidv4()},
  {name: "Thug 1", initiative: 9, dexterity: 14, moved: false, uuid: uuidv4()},
  {name: "Thug 2", initiative: 9, dexterity: 13, moved: false, uuid: uuidv4()},
  {name: "Thug 3", initiative: 7, dexterity: 0, moved: false, uuid: uuidv4()},
  {name: "Lady Boom Boom", initiative: 17, dexterity: 15, moved: false, uuid: uuidv4()},
]
