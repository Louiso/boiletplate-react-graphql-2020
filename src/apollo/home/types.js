import { gql } from "apollo-boost"

export const GET_SCHEDULES = gql`
  query {
    getSchedules{
      code,
      sections{
        n,
        type,
        schedules{
          classroom,
          date{day,hours},
          teacher
        }
      }
    }
  }
`