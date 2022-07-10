import React from 'react'

import { ModalLoading, ModalLoadingHandle } from '../Modal'

let loadingRef: ModalLoadingHandle

export function Loading() {
  const setRef = React.useCallback((r: ModalLoadingHandle) => {
    loadingRef = r
  }, [])
  return <ModalLoading ref={setRef} />
}

Loading.show = () => {
  loadingRef?.show()
}
Loading.hide = () => {
  loadingRef?.hide()
}

export default Loading
