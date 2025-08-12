<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Figma Style Page</title>
<link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&display=swap" rel="stylesheet">
<style>
  body {
    margin: 0;
    background-color: #F66C6C;
    font-family: 'Inknut Antiqua', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  h1 {
    font-size: 48px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    margin-bottom: 30px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  button {
    background-color: #970C46;
    color: white;
    padding: 15px 40px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    width: 200px;
    text-align: center;
    transition: transform 0.15s ease, background-color 0.15s ease;
    position: relative;
    overflow: hidden;
  }

  /* Noise effect using a pseudo-element */
  button::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n" x="0" y="0"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(%23n)" opacity="0.15"/></svg>');
    background-size: cover;
    pointer-events: none;
  }

  button:hover {
    transform: scale(1.04);
    background-color: #7c093a;
  }

  button:active {
    transform: scale(0.98);
    background-color: #68082f;
  }
</style>
</head>
<body>
  <h1>My Heading</h1>
  <div class="button-container">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
  </div>
</body>
</html>