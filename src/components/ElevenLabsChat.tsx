
import React, { useEffect } from 'react';

// Declare the custom elevenlabs-convai element to fix TypeScript error
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      }
    }
  }
}

interface ElevenLabsChatProps {
  onConversationComplete?: () => void;
}

const ElevenLabsChat: React.FC<ElevenLabsChatProps> = ({ onConversationComplete }) => {
  useEffect(() => {
    // Load ElevenLabs widget script
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md mb-4">
        <h2 className="text-xl font-medium mb-2">Chat with Romy</h2>
        <p className="text-sm text-gray-600 mb-4">
          Romy will help discover your interests and find local communities that match them.
        </p>
      </div>

      {/* ElevenLabs widget container */}
      <div className="elevenlabs-chat-container w-full h-[400px] mb-6">
        <elevenlabs-convai agent-id="agent_01jveywkg9fgktmrcbwhw989eb"></elevenlabs-convai>
      </div>

      <button 
        onClick={onConversationComplete}
        className="bg-brain-blue hover:bg-brain-blue/90 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all mt-6"
      >
        Finish Conversation
      </button>
    </div>
  );
};

export default ElevenLabsChat;
