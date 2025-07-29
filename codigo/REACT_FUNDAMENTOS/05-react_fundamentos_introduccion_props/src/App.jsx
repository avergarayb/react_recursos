import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import reactImage from './assets/react-logo-xs.png'

const reactTitles = ['React Fundamentals', 'React Basics', 'React Hooks', 'React Router', 'React Context', 'React Testing Library']

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {

  const titleWinner = reactTitles[getRandomIntInRange(0, 5)];

  return (
    <div>
      <img src={reactImage} className="logo react" alt="React logo" />'
      <h1>{titleWinner}</h1>
      <p>
        ¡Fundamentals core of React that you need to know to develop
        any app with this famous library!
      </p>
    </div>
  )
}

function CoreConcepts(props) {
  return (
    <div>
      <img src={props.src} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section id='coreConcepts'>
        <h2>Main Features</h2>
        <div>
          <CoreConcepts src={reactImage} title="Reuse" description="React components are super reusable" />
          <CoreConcepts src={reactImage} title="Props" description="Props allow you to pass data and event handler to components" />
          <CoreConcepts src={reactImage} title="State" description="State lets components manage and respond to user input or events " />
        </div>
        
      </section>

      <main>
        <h2>React Overview</h2>
      </main>
    </>
  )
}

export default App
