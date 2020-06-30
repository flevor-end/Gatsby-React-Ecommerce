import React from "react"
import { productDetail } from "../components/ProductDetail"
import { ProductDetail } from "../components"

export default function Product({ pageContext }) {
  return <ProductDetail {...pageContext} />
}
