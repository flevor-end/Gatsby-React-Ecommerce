import React, { useState } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  StyledProductDetail,
  QtySelect,
  Button,
} from "../styles/components"
import { SEO, Stars } from "./"

export default function ProductDetail({
  unit_amount,
  price: id,
  product: { name, metadata },
}) {
  const formatePrice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatePrice}</b>
        <Stars />
        {metadata.wear && <h3>Color: Azul</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onclick={() => setSize(1)}>S</SizeButton>
            <SizeButton onclick={() => setSize(2)}>xS</SizeButton>
            <SizeButton onclick={() => setSize(3)}>M</SizeButton>
            <SizeButton onclick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disable value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
