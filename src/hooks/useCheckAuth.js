import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { logout, login} from '../store/auth/authSlice'
import { FirebaseAuth } from '../firebase/config'

const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { uid, email, password, photoURL } = user;
            dispatch(login({ uid, email, password, photoURL }));
        });
    }, []);
  return {
    status
  }
}

export default useCheckAuth