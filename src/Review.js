import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0) //=> 0 because 0 represents 1st item in array & I want to show first review by default
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      // if number is greater than last index of array, send it to 0 index.
      return 0
    }

    if (number < 0) {
      // if number is less than 0, send it to the last item of the array.
      return people.length - 1
    }

    return number // else, just return the number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    // function to generate random person from the list
    let randomNumber = Math.floor(Math.random() * people.length)
    // console.log(randomNumber)
    if (randomNumber === index) {
      randomNumber = index + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
