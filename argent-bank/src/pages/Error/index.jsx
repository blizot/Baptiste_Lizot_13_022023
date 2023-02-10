import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Header />
        <main className='error'>
          <h1 className='error__title'>{error.status === 404 ? error.status : 'Oops!'}</h1>
          <p>{error.status === 404 ? 'This page doesn\'t exist' : 'Sorry, an unexpected error has occured:'}</p>
          {error.status !== 404 && <p className='error__message'>{error.statusText || error.message}</p>}
          <a href='./' className='error__link primary-button'>Go back to home page</a>
        </main>
        <Footer />
      </>
    )
  } else {
    return <p className='error__message--colored'>Oops!</p>
  }
}

export default Error