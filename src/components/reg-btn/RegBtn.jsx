import React from 'react';

function RegBtn({ name , onClick}) {
    return (
        <button className="px-2 py-1 text-[12px] text-primary font-[520] border border-secondary rounded-md hover:bg-orange-50 shadow-[0_4px_4px_0_rgba(207,207,207,1)]" onClick={onClick}>
            {name}
        </button>
    );
}

export default RegBtn;