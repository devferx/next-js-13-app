// import { Counter } from './Counter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      {/* <h1>Posts</h1>
      <Counter /> */}
      <marquee style={{ backogrund: '#fff', color: 'purple' }}>
        Posts cada semana
      </marquee>
      {children}
    </div>
  )
}
