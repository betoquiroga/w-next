/* eslint-disable @typescript-eslint/no-empty-interface */
import { ComponentType, useEffect } from "react"
import { getToken, logout } from "@helpers/auth.helper"
import axios from "axios"
import { WW_API_DOMAIN, WW_PROTOCOL } from "../constants/domains"

interface AuthProps {}

const withAuth = <P extends AuthProps>(WrappedComponent: ComponentType<P>) => {
  const hocComponent = (props: P) => {
    useEffect(() => {
      axios
        .get(`${WW_PROTOCOL}://${WW_API_DOMAIN}/users/validate`, {
          headers: {
            Authorization: getToken(),
          },
        })
        .catch(() => {
          logout()
        })
    }, [])

    return <WrappedComponent {...props} />
  }

  return hocComponent
}

export default withAuth
