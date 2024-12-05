import React, { useState, useCallback } from'react';
import { motion } from 'framer-motion';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';
import Notification from './components/Notification';
import { INITIAL_FORM_DATA, getInitialTodoData } from './constants';
import { calculateTotal } from './utils/calculations';
import { createTodoHandlers } from './handlers/todoHandlers';

export default function App() {
  const [todoData, setTodoData] = useState(getInitialTodoData());
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [notification, setNotification] = useState(null);
  
  const showNotification = useCallback((message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const handlers = createTodoHandlers(todoData, setTodoData, showNotification, setFormData);

  return (
    <div className='flex-col place-items-center place-content-center w-screen h-screen bg-blue-100'>
      <Notification message={notification} />
      <div className='text-2xl font-bold'>예산 계산기</div>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4'>
        <main>
          <Form 
            handleSubmit={(e) => handlers.handleSubmit(e, formData)} 
            formData={formData} 
            setFormData={setFormData} 
          />
          <section className='bg-white'>
            <Lists 
              handleClick={handlers.handleDelete} 
              todoData={todoData} 
              setTodoData={setTodoData}
            />
            <motion.button
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={handlers.handleRemoveAll}
              className="px-4 py-2 mt-4 text-red-500 border border-red-500 rounded hover:text-white hover:bg-blue-200 flex items-center gap-2"
            >
              Delete All
              <img 
                        alt="Thumbs Up SVG Vector Icon" 
                        width="20" 
                        height="20" 
                        decoding="async" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/No-Symbol.svg/600px-No-Symbol.svg.png"
                        className="inline-block"
                    />
            </motion.button>
          </section>
        </main>
      </div>
      <h2 className="text-right mt-4">총지출: {calculateTotal(todoData)}원</h2>
    </div>
  );
}

