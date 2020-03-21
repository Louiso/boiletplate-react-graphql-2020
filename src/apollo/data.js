import { mongoObjectId } from "utils"

const products = [
  {
    __typename: "Product",
    _id: mongoObjectId(),
    exchangeRate: {
      __typename: "ExchangeRate",
      _id: mongoObjectId(),
      label: "Soles",
      simbol: "S/"
    },
    price: 10.5,
    productBase: {
      __typename: "ProductBase",
      _id: mongoObjectId(),
      brand: {
        __typename: "Brand",
        _id: mongoObjectId(),
        logo:
          "https://i.pinimg.com/originals/42/02/a0/4202a0fa91cf73d74c88d4a00f39f1d0.jpg",
        title: "Inka Kola"
      },
      imageSelected:
        "https://lh3.googleusercontent.com/proxy/UV-1jsen1j8D533ycT3u8R4C91dCMuNz_9RcTwCSm1252uhmp48GDifCZvY1HeGFJdu3wb6EJgwYvG-EeHpbUJjFGD-HmM-lqsnyqeEqdvcf34zEYQRQ3khb0c2DTil_5GVMbY1-50O8fZ1S1DoZ_DhJA_DZifzhAEHmpQ",
      images: [
        "https://lh3.googleusercontent.com/proxy/UV-1jsen1j8D533ycT3u8R4C91dCMuNz_9RcTwCSm1252uhmp48GDifCZvY1HeGFJdu3wb6EJgwYvG-EeHpbUJjFGD-HmM-lqsnyqeEqdvcf34zEYQRQ3khb0c2DTil_5GVMbY1-50O8fZ1S1DoZ_DhJA_DZifzhAEHmpQ"
      ],
      retornable: false,
      title: "Inka Kola 3L"
    },
    provider: {
      __typename: "Provider",
      _id: mongoObjectId()
    }
  }
]

const warehouses = [
  {
    __typename: "Warehouse",
    _id: mongoObjectId(),
    notifications: 4,
    title: "Almacen principal"
  },
  {
    __typename: "Warehouse",
    _id: mongoObjectId(),
    notifications: 1,
    title: "Almacen trasero"
  }
]

const data = {
  products,
  warehouses
}
export default data
