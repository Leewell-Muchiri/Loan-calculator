import React from 'react'
import "./LoanCalculator.css"

const LoanCalculator = () => {
  return (
    <div className='calc-container'>
        <h1>Loan Calculator</h1>

        <form>
            <div className='form-item'>
                <label>Loan Amount</label>
                <div>
                    <input type="number" name="loanAmount" placeholder='0' />
                </div>
            </div>

            <div className='form-item'>
                <label>Payment Frequency</label>
                <div>
                    <input type="number" name="paymentFrequency" placeholder='0' />
                </div>
            </div>   

            <div className='form-item'>
                <label>Loan Period</label>
                <div>
                    <input type="number" name="loanPeriod" placeholder='0' />
                </div>
            </div>   

            <div className='form-item'>
                <label>Interest Type</label>
                <div>
                    <input type="number" name="interestType" placeholder='0' />
                </div>
            </div>   

            <div className='form-item'>
                <label>Start Date</label>
                <div>
                    <input type="number" name="startDate" placeholder='0' />
                </div>
            </div> 

            <div className='form-action'>
                <input type='submit' value="Calculate" className='calculate-button' />
            </div>             
        </form>
    </div>
  )
}

export default LoanCalculator