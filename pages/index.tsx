import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { exampleOperations } from '../redux/ducks/example'
import { GetServerSideProps } from 'next'

const Index = ({ users }) => {

  const dispatch = useDispatch()
  const setUsers = (data) => dispatch(exampleOperations.setUsers(data))
  
  useEffect(() => {
    setUsers(users)
  }, [dispatch, users])

  return (
    <>
      <h1>Index</h1>
      <Link href='/about'>About</Link>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  let data = []

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    data = await res.json()
  } catch (err) {
    console.error(err)
  }

  // Pass data to the page via props
  return { props: { users: data }}
}

export default Index
