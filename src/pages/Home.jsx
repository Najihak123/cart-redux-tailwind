//rafce

import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  return (

    <>
    <Header insideHome ={true}/>
    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img height={'200px'} width={'100%'} src="https://i.pinimg.com/550x/5f/55/ac/5f55acb354888bab138e6153a4b934f2.jpg" alt="no image" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>

          </div>

        </div>

      </div>
      
    </div>
    </>
  )
}

export default Home