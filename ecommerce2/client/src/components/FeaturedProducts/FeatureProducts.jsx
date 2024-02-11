import React from 'react'
import "./FeatureProducts.scss"
import { Key } from '@mui/icons-material'
import { Card } from '@mui/material'

const FeatureProducts = () => {
  return (
    <><div className='top'>
          <h1>{type} products</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, aliquid? Fugiat, doloremque iusto perspiciatis distinctio, harum consequuntur molestias accusantium iure amet modi reprehenderit beatae voluptates ex temporibus cupiditate minus nisi.</p>
      </div><div className='bottom'>
              {data.map(items => {
                  <Card item={item} key={item.id} />
              })}
          </div></>
  )
}



export default FeatureProducts