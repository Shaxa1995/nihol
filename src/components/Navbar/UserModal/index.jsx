import { Modal } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { switchProfileModalVisibility } from "../../../redux/modalSlice";

const UserModal = () => {
    const { profileModalVisibility } = useSelector((state) => state.modal);
    const dispatch = useDispatch()
    
  return (
      <Modal title='Profile'
          open={profileModalVisibility} okText='Save'
          okButtonProps={{ disabled: true }}
          onCancel={()=> dispatch(switchProfileModalVisibility())}
      >
      UserModal
    </Modal >
  )
}

export default UserModal
