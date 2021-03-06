import React, {useState} from 'react'
import Board from './components/Board/Board'
import backImg from './assets/images/back.png'
import brett from './assets/images/brett.jpg'
import cujo from './assets/images/cujo.jpeg'
import kath from './assets/images/kathchook.jpg'
import kel from './assets/images/kel.png'
import kim from './assets/images/kim.png'
import marion from './assets/images/marion.png'
import pruetrude from './assets/images/prue-trude.jpg'
import sharon from './assets/images/sharon.jpg'
import { render } from '@testing-library/react'


function App() {
  const cards = buildCards()
  return (
    <div className="App">
      <Board cards={cards} />
      <button onClick={refreshPage}>New Game!</button>
    </div>
  )
}

function buildCards() {
  let id = 0
  const images = {kath, kim, kel, brett, sharon, marion, pruetrude, cujo}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return shuffle(cards)
}

function refreshPage() {
    window.location.reload(false);
};


function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}



export default App