import React from 'react'
import { NavLink, useLocation } from 'react-router'

const Breadcrumb = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    console.log(pathSegments);
    
  return (
    <div className="mt-5">{
        pathSegments.map((segment, index) => (
            <span className={index === pathSegments.length - 1 ? 'text-[#28643B] font-medium' : 'text-[#666876] font-medium'} key={index}>
                <NavLink className="px-3" to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}</NavLink>
                {index !== pathSegments.length - 1 && ' > '}
            </span>
        ))
    }
    </div>
  )
}

export default Breadcrumb