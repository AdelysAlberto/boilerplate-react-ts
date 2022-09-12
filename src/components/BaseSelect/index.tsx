import { FC } from 'react'

import styles from './styles/baseInput.module.scss'

const BaseSelect: FC<{ options: any[], onChange: any, defaultValue?: string }> = ({ options, onChange, defaultValue }) => {

  const country = [
    { value: 'CO', label: 'Colombia' },
    { value: 'PE', label: 'Peru' },
    { value: 'AR', label: 'Argentina' },
    { value: 'CL', label: 'Chile' },
    { value: 'US', label: 'USA' },
    { value: 'BR', label: 'Brasil' },
    { value: 'UY', label: 'Uruguay' },
  ]

  return (
    <div className={`${styles.input} `}>
      <div className={styles.input__base}>
        <select onChange={(e) => onChange(e.target.value)} defaultValue='CO' >
          {country && country.map((opt, key) => (
            <option key={key} value={opt['value']} >{opt['label']}</option>
          ))}
        </select>
      </div>
    </div>

  );
}

export default BaseSelect;