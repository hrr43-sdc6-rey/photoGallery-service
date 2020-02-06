# Photo-Gallery-Service

### Start Up
1. Run `npm install`
2. Run `npm run start` to start up server
3. Run `npm run build` to start up webpack

### To Add this Service to your Proxy Server
1. Git clone repo into your directory
2. Go to your proxy's `index.html`
    2A. Add this div within the body:
    <div id="photo-gallery"></div>
    2B. Add this script tag at the end of the body:
    <script src="http://localhost:3003/bundle.js"></script>
3. In your terminal, cd into the photo-gallery-service directory.
   Run these commands:
      `npm install`
      `npm run start`
      `npm run build`

