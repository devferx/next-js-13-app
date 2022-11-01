import { CommentsList } from './CommentsLists'

export default async function CommentsPage ({ params }) {
  const { id } = params

  return (
    <ul style={{ background: '#444', fontSize: '10px' }}>
      <CommentsList id={id} />
    </ul>
  )
}
