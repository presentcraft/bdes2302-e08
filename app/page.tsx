export const instant = false;

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: images } = await supabase.from('images').select()

  return (
    <ul className="text-center space-y-5 py-5">
      {images?.map((image) => (
        <li key={image.id}>
          <h1 className="font-bold mb-3">{image.name}</h1>
          <img className="h-30 w-30 object-cover mx-auto" src={image.url} />
        </li>
      ))}
    </ul>
  )
}