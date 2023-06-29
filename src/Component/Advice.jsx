import React, { useEffect, useState } from 'react'
import './Advice.css'
import image from './Images/icon-dice.svg'
import axios from 'axios'


const Advice = () => {
    const [data, SetData] = useState('')
    
    const getAdvice = () => {
        const url = 'https://api.adviceslip.com/advice'
        axios.get(url)
        .then(res => {
            SetData(res.data.slip)
            // console.log(res.data.slip)
        })
    }
    
    useEffect(()=>{
        getAdvice()
    }, [])

    const nextAdvice = (e) => {
        // at
        e.preventDefault()
        getAdvice()
    }
  return (
    <div>
        {
            
                <div className="container" >
                    <div className="card">
                        <h2>Advice #{data.id}</h2>
                        <p className='advice'> "{data.advice}"</p>
                        <span className='desktop'>
                            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>                
                        </span>
                        <span className='mobile'>
                            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                        </span>
                    </div>
                    <div className="button">
                        <button onClick={nextAdvice} >
                            <img src={image} alt="here" />
                        </button>
                    </div>
                </div>

            // ))
        }
    </div>
  )
}

export default Advice