import Link from 'next/link'
import { useDispatch } from 'react-redux'
import Example from '../components/Example'
import { exampleOperations } from '../redux/ducks/example'

const About = ({ data }) => {

  const dispatch = useDispatch()

  const someAction = (txt) => dispatch(exampleOperations.exampleAction(txt))

  return (
    <>
      <h1>About</h1>
      <Link href="/">Index</Link>
      <button onClick={() => someAction('Update store')}>Action</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue ligula, dictum eget eleifend vitae, mattis id augue. Proin tristique mattis interdum. Ut luctus, enim a semper sodales, ante metus tristique est, vitae dignissim ex tortor vel justo. Integer vestibulum mollis metus nec tincidunt. Maecenas sed metus non magna rutrum molestie. Nam porta justo nec velit fringilla, non aliquet est efficitur. Quisque sollicitudin, felis eu pulvinar feugiat, elit nibh maximus ligula, ultricies luctus quam sapien sed lacus.</p>
      <Example />
    </>
  )
}

export default About
