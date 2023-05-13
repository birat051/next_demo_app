import { useRouter } from "next/router"

function ReviewId() {
  const router=useRouter()
  const {id , reviewId}=router.query
  return (
    <div>Review number {reviewId} for product {id}</div>
  )
}

export default ReviewId