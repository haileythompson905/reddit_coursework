const Sub = ({ sub }) => {

  const { id, name, created_at } = sub
  return (
    <>
      <h3>{name}</h3>
      <p>
        Created: {created_at}, id: {id}
      </p>
      <a href="/">Back</a>
      <br />
      <a href={`/subs/${id}/topics`}>Go to topics</a>
    </>
  )
}

export default Sub;