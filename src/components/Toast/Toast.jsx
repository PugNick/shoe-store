import './Toast.css';

function Toast({ message, type = "success", show }) {
    if (!show) return null;

    return (
        <div className={`toast ${type}`}>
            {message}
        </div>
    );
}

export default Toast