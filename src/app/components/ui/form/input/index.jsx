'use client'

import uiStyles from '../../ui.styles.module.css'
import styles from './styles.module.css'
import { useState } from 'react'
export const Input = props => {


    const { label, placeholder, variant, onChange = () => null, value } = props
    const fieldClass = variant === 'vertical' ? uiStyles.formFieldVertical : uiStyles.formField


    // const [focusMessage, setFocusMessage] = useState('');
    // const [blurMessage, setBlurMessage] = useState('');




    return (
        <div className={fieldClass}>
            <label className={uiStyles.fieldLabel}>
                {label}
            </label>
            <input
                className={styles.inputField}
              
                onChange={onChange}
                value={value}
                // onFocus={() => setFocusMessage('Write Your Name')}
                // onBlur={() => setBlurMessage('Please fill your name')}
            />
            {/* <p>{focusMessage}</p>
            <p>{blurMessage}</p> */}
        </div>
    )
}