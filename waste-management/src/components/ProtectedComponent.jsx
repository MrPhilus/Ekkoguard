import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/identityService"
import Modal from "./modal/Index"

const ProtectedComponent = ({ children }) => {
    const isLoggedIn = isAuthenticated()

    if (!isLoggedIn) return (
        <Modal
            modalTitle={ "Access denied!" }
        >
            <p><Link to={ "/login" }>Log in</Link> to gain access</p>
        </Modal>
    )

    return (
        children
    )
}
export default ProtectedComponent