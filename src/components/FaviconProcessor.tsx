import React, { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '../utils/backgroundRemoval';

const FaviconProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    const processFavicon = async () => {
      if (processed || isProcessing) return;
      
      try {
        setIsProcessing(true);
        console.log('Loading favicon image...');
        
        // Load the current favicon
        const img = await loadImageFromUrl('/lovable-uploads/38075dbd-446c-4369-87e1-fb287880f16f.png');
        
        console.log('Removing background...');
        const transparentBlob = await removeBackground(img);
        
        // Create a new URL for the processed image
        const transparentUrl = URL.createObjectURL(transparentBlob);
        
        // Update the favicon in the document
        const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
        if (link) {
          link.href = transparentUrl;
          console.log('Favicon updated with transparent version');
        }
        
        setProcessed(true);
      } catch (error) {
        console.error('Failed to process favicon:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    // Process favicon when component mounts
    processFavicon();
  }, [processed, isProcessing]);

  return null; // This component doesn't render anything visible
};

export default FaviconProcessor;