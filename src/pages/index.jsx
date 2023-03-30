import { useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'

export default function Home() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log(user)
      } else {
        // User is signed out
        console.log('User is signed out')
      }
    })
  }, [])

  const signInEP = () => {
    createUserWithEmailAndPassword(auth, 'd.s.h.cheung@gmail.com', '12345678').then((result) => {
      const { user } = result

      console.log(user)
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage)
    })
  }

  const signInGP = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { user } = result

      console.log(user)
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage)
    })
  }

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Denis',
        last: 'Cheung',
        born: 1990,
        age: 32,
        height: 173
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data())
    })
  }

  return (
    <div>
      <h1 className="text-center my-5">Home Page | Test</h1>
      <button onClick={signInEP} type="button">Email Sign in</button>
      <button onClick={signInGP} type="button">Google Sign in</button>

      <button onClick={addUser} type="button">Add User</button>
      <button onClick={getUsers} type="button">Get Users</button>
    </div>
  )
}
