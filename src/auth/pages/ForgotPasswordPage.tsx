import {FC} from 'react'
import { LayoutAuth } from '../layout/LayoutAuth'
import {Link} from "react-router-dom"

export const ForgotPasswordPage:FC = ():JSX.Element => {
  return (
    <LayoutAuth titlePage='Recover Password' typePage='auth'>
      <div className='flex justify-center'>
        <Link className='text-blue-500 font-semibold text-md' to="/auth/signin">Back to Login</Link>
      </div>
    </LayoutAuth>
  )
}
