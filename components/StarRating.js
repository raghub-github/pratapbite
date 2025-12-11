"use client";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ 
  value = 0, 
  onChange, 
  readOnly = false, 
  size = 'md',
  showLabel = false 
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const handleClick = (rating) => {
    if (!readOnly && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating) => {
    if (!readOnly) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(0);
    }
  };

  const displayValue = hoverValue || value;

  return (
    <div className="flex items-center gap-2">
      <div 
        className="flex gap-1"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            disabled={readOnly}
            className={`
              ${readOnly ? 'cursor-default' : 'cursor-pointer transition-transform hover:scale-110'}
              ${sizeClasses[size]}
            `}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            <FaStar
              className={`
                ${star <= displayValue 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300 fill-gray-300'
                }
                transition-colors duration-150
              `}
            />
          </button>
        ))}
      </div>
      {showLabel && value > 0 && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {value} {value === 1 ? 'star' : 'stars'}
        </span>
      )}
    </div>
  );
}

