import React from 'react';

function LoginBtn({name , onClick}) {
    return (
       <button className="px-4 py-1 text-xs bg-secondary font-semibold text-primary rounded-md hover:bg-orange-600 shadow-[0_4px_4px_0_rgba(207,207,207,1)]" onClick={onClick}>
                {name}
              </button>
    );
}

export default LoginBtn;