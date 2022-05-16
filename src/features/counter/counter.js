
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { increment, 
    decrement,
reset,
increAmount,
decreAmount
 } from './counterSlice'



const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()

    const [incre_Amount, setIncre_Amount] = useState(0);
    const addVal = Number(incre_Amount) || 0;
    const minusVal = Number(incre_Amount) || 0;

    const resetVal = () => {
        setIncre_Amount(0);
        dispatch(reset())
    }
  return  (<div className='flex flex-col justify-center 
  items-center' >
        <h1 className='text-3xl font-bold'>Counter</h1>
        <section className=' flex  flex-col
         items-center'>
             <div className=' rounded-full w-24 h-24
              bg-emerald-600 m-6'>
            <p className='text-4xl font-extrabold mt-8 ml-9 font-sans'>{count}</p></div>
            <div className='flex ml-10 items-center '>
                <button className='mr-10 w-20 h-10 rounded-3xl bg-yellow-200' onClick={() => dispatch(increment(count))}>+</button>
                <button className='mr-10 w-20 h-10 rounded-3xl bg-yellow-200' onClick={() => dispatch(decrement(count))}>-</button>
            </div>
            <input className="rounded-3xl ring-2 border-2 shadow-lg h-10 w-3/4 my-4
            content-center items-center p-5 ring-emerald-500 active:ring-emerald-100 outline-none bg-green-200" type="text"
             value={incre_Amount} onChange={(evt) => {setIncre_Amount(evt.target.value)}}/>
            <div className='flex ml-10 items-center mt-4'>
                <button className='mr-10 w-20 h-10 rounded-3xl bg-yellow-200' onClick={() => dispatch(increAmount(addVal))}>Add</button>
                <button className='mr-10 w-20 h-10 rounded-3xl bg-yellow-200' onClick={() => dispatch(decreAmount(minusVal))}>Minus</button>
            </div>
            <button className='my-4 w-20 h-10 rounded-3xl bg-yellow-200' onClick={resetVal}>Reset</button>

        </section>
    </div>)
  
}

export default Counter