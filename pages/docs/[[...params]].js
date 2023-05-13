import React from 'react'
import { useRouter } from 'next/router'

function Docs() {
  const router=useRouter()
  const {params=[]}=router.query
  if(params.length===1)
  return(<div>
    Document for feature {params[0]}
  </div>)
  if(params.length===2)
  return(
    <div>
        Document for feature {params[0]} and concept {params[1]}
    </div>
  )
  return (
    <div>Documentation page</div>
  )
}

export default Docs