import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<News pageSize={9} q="general" />} />
          <Route exact path="/foryou" element={<News key="world" pageSize={9} q="world" />} />
          <Route exact path="/business" element={<News key="business" pageSize={9} q="business" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={9} q="cricket" />} />
          <Route exact path="/politics" element={<News key="politics" pageSize={9} q="politics" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} q="entertainment" />} />
          <Route exact path="/science" element={<News key="science" pageSize={9} q="science" />} />
          <Route exact path="/health" element={<News key="health" pageSize={9} q="health" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={9} q="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
