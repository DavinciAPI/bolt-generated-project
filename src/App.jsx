import React, { useState } from 'react';
    import './App.css';

    const App = () => {
      const [prompt, setPrompt] = useState('');
      const [image, setImage] = useState(null);

      const generateImage = async () => {
        const response = await fetch('https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ inputs: prompt })
        });

        const result = await response.blob();
        setImage(URL.createObjectURL(result));
      };

      return (
        <div className="app">
          <h1>Kids-Friendly Image Generator</h1>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt"
          />
          <button onClick={generateImage}>Generate Image</button>
          {image && <img src={image} alt="Generated" />}
        </div>
      );
    };

    export default App;
