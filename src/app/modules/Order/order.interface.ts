import { Types } from "mongoose"

export type TProductInfo = {
    id : Types.ObjectId,
    maxQuantity : number,
    quantity : number
}

export type TCreateOrder = {
    name : string,
    address : string,
    districtName : string,
    email ?: string,
    phone : string,
    subdistrict : string,
    totalPrice : string,
    products : TProductInfo[]
}