import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { CircularProgress } from '@mui/material'
import News from './Articles'

const Search = () => {
  const { query } = useParams()
  const { data, loading, error } = useFetch(`/api/articles/search/?query=${query}`)

  return (
    <div>
      {loading && <div className='flex justify-center py-20 text-5xl'>
        <CircularProgress color="inherit" />
      </div>}
      {data && !error ? <News articles={data} /> : <div className='py-20 text-center opacity-20 text-4xl font-bold'>
        Not found
      </div>}
    </div>
  )
}

export default Search