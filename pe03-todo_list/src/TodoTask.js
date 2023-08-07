import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
    const [text, setText] = useState('');
    return (
        <div className='input-container'>
            <input 
                placeholder="Enter task description"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <input-button onClick={() => {
                setText('');
                onAddTodo(text);
            }}>
                Add
            </input-button>
        </div>
    )
}