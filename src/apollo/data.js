import { mongoObjectId } from "utils"

const data = {
  curses: [ {
    __typename: 'Curse',
    _id: mongoObjectId(),
    dates: [ {
      __typename: 'Schedule',
      _id: mongoObjectId(),
      day: {
        __typename: 'Day',
        _id: mongoObjectId(),
        code: 1,
        name: 'Lunes'
      },
      hours: [ 8,11 ]
    },{
      __typename: 'Schedule',
      day: {
        __typename: 'Day',
        _id: mongoObjectId(),
        code: 2,
        name: 'Martes'
      },
      hours: [ 14,17 ]
    } ],
    name: 'Biologia'
  } ]
}
export default data
