import React from 'react'

const useDownload = ({imageUrl, fileName}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return handleDownload
}

export default useDownload