import * as React from 'react'
import RandomNumbers from './components/widgets/random-numbers'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App: React.FC = () => {

  return (
    <div>
      <RandomNumbers />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position='bottom-left'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        closeOnToastrClick
      />
    </div>
  )
}

export default App
