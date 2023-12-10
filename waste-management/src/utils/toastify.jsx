import { BsCheckCircleFill, BsCircleHalf, BsExclamationTriangleFill, BsInfoCircleFill, BsXCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";

export const showToast = (
    message = '',
    type = '',
    title = type ?? '',
) => {
    toast.dismiss();
    switch (type?.toLowerCase()) {
        case "success":
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-success capitalize` }><BsCheckCircleFill />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `bg-success px-2 absolute inset-0`,
                    closeButton: false,
                    hideProgressBar: true,
                });
            break;
        case "info":
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-info capitalize ` }><BsInfoCircleFill />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `bg-info px-2 absolute inset-0`,
                    closeButton: false,
                    hideProgressBar: true,
                });
            break;
        case "loading":
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-info capitalize` }><BsCircleHalf className=" capitalizeanimate-spin" />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `bg-info px-2 absolute inset-0`,
                    closeButton: false,
                    hideProgressBar: true,
                });
            break;
        case "warn":
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-warning capitalize` }><BsExclamationTriangleFill />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `bg-warning px-2 absolute inset-0 shadow-none`,
                    closeButton: false,
                    hideProgressBar: true,

                });
            break;
        case "error":
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-error capitalize` }><BsXCircleFill />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `px-2 absolute inset-0`,
                    closeButton: false,
                    hideProgressBar: true,
                });
            break;
        default:
            toast(
                <div className={ `ml-4` }>
                    <strong className={ `flex items-center gap-1 text-info-content capitalize` }><BsInfoCircleFill />{ title }</strong>
                    <p>{ message }</p>
                </div>,
                {
                    bodyClassName: `bg-info px-2 absolute inset-0`,
                    closeButton: false,
                    hideProgressBar: true,
                });

            break;
    }
};