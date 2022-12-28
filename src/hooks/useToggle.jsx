import React from "react";

const useToggle = () => {
    const [status, setStatus] = React.useState(false);
    function toggleStatus() {setStatus(prevStatus => !prevStatus)};
    return {status, toggleStatus};
}

export default useToggle;