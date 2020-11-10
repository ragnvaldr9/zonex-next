import { useSelector } from 'react-redux'

const Example: React.FC = () => {
  const users = useSelector((state) => state.example.users)
  console.log('Render')
  return (
    <>
      {users.map((u: any) => (
        <div style={{ marginBottom: '40px' }} key={u.id}>
          <p>
            <b>Name:</b> {u.name}
          </p>
          <p>
            <b>Phone:</b> {u.phone}
          </p>
          <p>
            <b>Website:</b> {u.website}
          </p>
        </div>
      ))}
    </>
  )
}

export default Example
