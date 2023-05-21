import {useRouter} from 'next/router'
import { useState } from 'react'


function UserData({user,previewMode}) {
  const router=useRouter()
  const [previewModeEnabled, setpreviewModeEnabled] = useState(previewMode)
  const enablePreview=(event)=>{
    event.preventDefault()
    setpreviewModeEnabled(!previewModeEnabled)
    router.push('/api/preview?redirect=/userdata')
  }
  const disablePreview=(event)=>{
    event.preventDefault()
    setpreviewModeEnabled(!previewModeEnabled)
    router.push('/api/disable-preview')
  }
  return (
    <div>
        <h1>User is {user}</h1>
        {!previewModeEnabled && <button onClick={enablePreview}>Enable Preview Mode</button>}
        {previewModeEnabled && <button onClick={disablePreview}>Disable Preview Mode</button>}
    </div>
  )
}

export default UserData

export async function getStaticProps(context)
{
    let user='Static generated user'
    const previewModeEnabled=context.preview??false
    if(context.preview)
    user=context.previewData.user
    return {
        props: {
            user: user,
            previewMode: previewModeEnabled
        }
    }
}