import { mongoObjectId } from "utils"

const data = {
  curses: [{
    __typename: 'Curse',
    _id: mongoObjectId(),
    dates: [{
      day: {
        code: 1,
        name: 'Lunes'
      },
      hours: [8,11]
    },{
      day: {
        code: 2,
        name: 'Martes'
      },
      hours: [14,17]
    }],
    name: 'Biologia'
  }]
}
export default data
