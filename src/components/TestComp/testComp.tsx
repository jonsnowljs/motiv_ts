import { Button, createTheme, ThemeProvider } from '@mui/material'
import React, { FC } from 'react'

const testComponentTheme = createTheme({

})

export interface testCompProps {

}

export const testComp: FC<testCompProps> = (props) => {
  return (
    <ThemeProvider theme={testComponentTheme}>
      <Button variant='outlined'>Test</Button>
    </ThemeProvider>
  )
}

testComp.defaultProps = {

}

export default testComp