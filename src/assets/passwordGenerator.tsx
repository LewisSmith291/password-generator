import React, { useCallback } from 'react'

export const PasswordGenerator = useCallback(() => {

  return (
    <div id="password-gen" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg m-5">
      <input type="text" className="bg-gray-800 dark:bg-white p-1 size-10/10 rounded-lg"></input>
    </div>
  )
},[]);
