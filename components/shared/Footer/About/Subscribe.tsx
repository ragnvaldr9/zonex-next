import { FC } from 'react'

import css from './about.module.scss'

type TSubscribe = {
  formTitle: string
  note: string
  placeholder: string
  buttonText: string
}

const Subscribe: FC<TSubscribe> = ({ formTitle, note, placeholder, buttonText }) => {
  return (
    <>
      <form className={css.subscribeForm}>
        <h4 className={css.subscribeFormTitle}>{formTitle}</h4>
        <label className={css.subscribeFormLabel}>
          <input type='emali' className={css.subscribeFormInput} placeholder={placeholder} />
        </label>
        <button className={css.subscribeFormButton}>{buttonText}</button>
      </form>
      <span className={css.subscribeFormNote}>{note}</span>
    </>
  )
}

export { Subscribe }
