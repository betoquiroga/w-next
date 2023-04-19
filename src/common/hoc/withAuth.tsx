/* eslint-disable @typescript-eslint/no-empty-interface */
import { useRouter } from "next/navigation"
import { ComponentType, useEffect } from "react"
import { getToken, logout } from "@helpers/auth.helper"
import axios from "axios"
import { WW_API_DOMAIN } from "../constants/domains"

interface AuthProps {}

const withAuth = <P extends AuthProps>(WrappedComponent: ComponentType<P>) => {
  const hocComponent = (props: P) => {
    const router = useRouter()
    useEffect(() => {
      axios
        .get(`http://${WW_API_DOMAIN}/users/validate`, {
          headers: {
            Authorization: getToken(),
          },
        })
        .then((r) => console.log(r))
        .catch(() => {
          router.push("/login")
          logout()
        })
    }, [])

    return <WrappedComponent {...props} />
  }

  return hocComponent
}

export default withAuth
