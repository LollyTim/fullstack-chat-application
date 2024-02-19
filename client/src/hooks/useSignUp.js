import React, { useState } from 'react'

const useSignUp = () => {
 const [loading, setLoading] = useState(false)

 const signup = async ({fullName, username, password, comnfirmPassword, gender}) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      comnfirmPassword,
      gender,
    });
    if(!success) return;
 }
}

export default useSignUp

const handleInputErrors = () => {
     if(!fullName || !username || !password || !comnfirmPassword || !gender)
}