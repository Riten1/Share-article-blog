import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

const AllPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  return (
    <div className='w-full py-8'>
      <Container>
        <div>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 w-1/2'>
            <PostCard post={post} />
          </div>
        )) }
        </div>
       
      </Container>
    </div>
  )
}

export default AllPost