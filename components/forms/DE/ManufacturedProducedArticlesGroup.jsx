import { Typography } from '@mui/material'
import React from 'react'

const ManufacturedProducedArticlesGroup = ({drawbackSet, actionIndicatorSet }) => {
  return (
    <div>
      {drawbackSet && actionIndicatorSet ? (
        <Typography variant='p' color='red'>This form is requires</Typography>
      ) : null}
      <h4>Form Comes here</h4>
    </div>
  );
}

export default ManufacturedProducedArticlesGroup