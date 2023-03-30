import './index.css'

const TodoItem = props => {
  const {todoList, deleteItem} = props
  const {id, title} = todoList

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <div>
      <li className="item-card">
        <p className="title">{title}</p>
        <button className="delete-btn" type="button" onClick={onDeleteItem}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
