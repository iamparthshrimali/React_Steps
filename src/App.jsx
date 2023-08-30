import React, { useState } from 'react'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Enjoy",
 
];
const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className="close">
        {<div className={`arrow ${isOpen ? "up_arrow" : "down_arrow"} `} onClick={() => setIsOpen(isOpen => !isOpen)}></div>}
      </div>
      <Steps show={isOpen} />
    </>
  )
}


const Steps = ({ show }) => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step => step > messages.length - 1 ? step : step + 1)
  }

  const handlePrevious = () => {
    setStep(step => step > 1 ? step - 1 : step);
  }

  return (
    <>
      <div className={`steps ${show ? "display_block" : "display_none"} `}>
        <div className="numbers">
          {
            messages.map((_, i) => <div className={step >= i + 1 ? "active" : ""} key={i} onClick={() => setStep(i + 1)}>{i + 1}</div>)
          }

        </div>
        <StepMessage>
          {messages[step - 1]}

        </StepMessage>
        <div className="buttons">
          <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious} isDisabled={step < 2} >Previous</Button>
          <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext} isDisabled={step > messages.length - 1}>Next</Button>
        </div>
      </div>
    </>
  )
}



function Button({ onClick, isDisabled, children }) {
  return (
    <button
      className={`${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


const StepMessage = ({ children }) => <div className="message">{children}</div>


export default App