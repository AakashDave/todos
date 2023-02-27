import React from 'react'
import Todo from './component/Todo'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className='container'>
            <Todo />
        </section>
      </main>
    </>
  )
}

export default App
