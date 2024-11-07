import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import Button from '../Button/Button'
import Logo from '../Header/Logo/Logo'

export const SwitcherForm = () => {
  console.log('Swhitcher Rander')
  const { isLogin, toggleLogin } = useContext(AuthContext)

  return (
    <article
      className={isLogin ? 'artLogin' : 'artReg'}
      style={{
        backgroundImage: isLogin
          ? `url('https://res.cloudinary.com/digcf0lad/image/upload/v1730026023/Background_Image_1_vcjlfr.webp')`
          : `url('https://res.cloudinary.com/digcf0lad/image/upload/v1727533147/18a4e9bd9160b9fd063c2d8ff65121d6_fj5g5p.jpg')`,
        backgroundSize: 'cover',
        width: '50%'
      }}
    >
      {' '}
      <div className='switchertTP'>
        <Logo />
        <h3 className='switchert'>{isLogin ? 'Welcome Back' : 'Join Us'}</h3>
        <div className='switcherP'>
          {isLogin ? (
            <>
              <p>
                Log in to create your event, see what your friends are up to,
                and join the excitement in your city.
              </p>

              <p className='switcherP-final'>Not registered? Join Us</p>
            </>
          ) : (
            <>
              <p>
                Connect with people who share your interests. Create and join
                events around you, and start building your community today.
              </p>
              <p className='switcherP-final'>
                If you are registered, go to Login.
              </p>
            </>
          )}
        </div>
        <Button
          fnc={toggleLogin}
          children={isLogin ? 'Go to Register' : 'Go to Login'}
        />
      </div>
    </article>
  )
}