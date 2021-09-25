import { useLazyQuery } from "@apollo/client"
import { LOGOUT } from "../Main/services/logout.query"
import SideMenuView from "./side-menu.view"

export const SideMenu = () => {
    const [onLogout] = useLazyQuery(LOGOUT)
    return (
        <SideMenuView />
    )
}