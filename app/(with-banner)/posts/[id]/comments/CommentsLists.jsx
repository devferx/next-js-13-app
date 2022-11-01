'use client'

import { use } from 'react'
import Image from 'next/image'

const fetchComments = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export function CommentsList ({ id }) {
  const comments = use(fetchComments(id))

  return comments.map(comment => (
    <li key={comment.id}>
      <Image
        width={50}
        height={50}
        src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
        alt={comment.name}
      />
      <h4>{comment.name}</h4>
      <small>{comment.body}</small>
    </li>
  ))
}
