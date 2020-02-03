import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

const App = () => {
    return <div style={{width: '100vw', height: '100vh', color: 'red'}}>
        scafoldded react app, bbbhh
        <Button onClick={() => alert('hi')}>test</Button>
    </div>
}

ReactDOM.render(
    <App /> ,
    document.getElementById("root")
)