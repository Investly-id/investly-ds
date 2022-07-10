import React, { useCallback, useEffect } from 'react'
import { RNView, Typography, Loading, Button } from 'investly-ds'

const App = () => {
  useEffect(() => {
    console.log('')
  })

  const showLoading = useCallback(() => {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 2000)
  }, [])

  return (
    <RNView>
      <Button onPress={showLoading}>asdasd</Button>
      <Loading />
    </RNView>
  )
}

export default App
