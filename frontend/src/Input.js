import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { guessWord } from './actions'

const Input = (props) => {
    const dispatch = useDispatch()

    const success = useSelector(state => state.success)

    const [ currentGuess, setCurrentGuess ] = React.useState('')

    if(success){
        return <div data-test='component-input' />
    }

    return (
        <div data-test='component-input'>
            <form className='form-inline'>
                <input 
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholder='enter guess'
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                />
                <button 
                    data-test='submit-button' 
                    className='btn btn-primary mb-2'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(guessWord(currentGuess))
                        setCurrentGuess('')
                    }}
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Input