import React, { Component } from 'react';
import './App.scss';

import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


class App extends Component {

  state = {
    skills: [
      { name: 'HTML5', level: 8},
      { name: 'CSS', level: 5},
      { name: 'JavaScript', level: 10},
      { name: 'ReactJS', level: 8 },
      { name: 'AngularJS', level: 8 },
      ]
  };


  render() {

    const {skills} = this.state;
    return (
      <div className="App">
        <Hero />
        <About />
        <Skills data={skills} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
