import { PlusCircle } from 'phosphor-react';

import styles from './addNewTask.module.css'

interface AddNewTaskProps {
  handleClickAdd: () => void
  inputValue: string
  setInputValue: (value: string) => void
}

export function AddNewTask({ handleClickAdd, inputValue, setInputValue }: AddNewTaskProps) {
  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleClickAdd()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={(e) => setInputValue(e.target.value)}
        value={inputValue} />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}