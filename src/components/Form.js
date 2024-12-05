import React from 'react'
import { motion } from "motion/react"

export default function Form({ handleSubmit, formData, setFormData }) {
    return (
      

        <form onSubmit={handleSubmit} className='flex flex-col pt-2'>
            
            <div className='flex'>
            <div className='flex-row w-1/2'>
            <p>지출 항목</p>
            
          
                <input 
                    type='text'
                    name='title'
                    placeholder='예)렌트비'
                    value={formData.title}
                    onChange={(e) => setFormData({
                        ...formData,
                        title: e.target.value
                    })}
                    className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
                />
                </div>
                <div className='flex-row w-1/2'>
            <p>비용 항목</p>
        
            <input
              type="number"
              name="expenses"
              placeholder="비용"
              value={formData.expenses}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  expenses: e.target.value,
                })
              }
              step="100" // 숫자 단위를 100으로 설정
              className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
            />

                </div>
            </div>
            <div className='flex'>
                <motion.button
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    type='submit'
                    className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200 flex items-center gap-2'
                >
                    제출
                    <img 
                        alt="Thumbs Up SVG Vector Icon" 
                        width="20" 
                        height="20" 
                        decoding="async" 
                        src="https://www.svgrepo.com/show/384403/accept-check-good-mark-ok-tick.svg"
                        className="inline-block"
                    />
                </motion.button>
            </div>
        </form>
       
    )
}