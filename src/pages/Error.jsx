import React from 'react'
import { BreadCrumb,} from '../components'

export default function Error() {
  return (
    <main className="flex flex-col">
    <BreadCrumb page={"/"} title={"Page NOT Found"} />

    </main>
  )
}
