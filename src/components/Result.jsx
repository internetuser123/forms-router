import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../App'
import styles from './Result.module.css'

const Result = () => {

  const {formData, setFormData} = useContext(FormContext)

  return (
    <div className={styles.container}>
      <div className={styles.resultContainer}>
        <h2>Confirm your information:</h2>
        <p>Name: {formData.formData.firstName}</p>
        <p>Last Name: {formData.formData.lastName}</p>
        <p>Phone: {formData.formData.phone}</p>
        <p>Email: {formData.formData.email}</p>
        <p>Adress: {formData.adress}</p>
        <p>Zipcode: {formData.zipcode}</p>
        <p>City: {formData.city}</p>
      </div>
    </div>
  )
  
}

export default Result