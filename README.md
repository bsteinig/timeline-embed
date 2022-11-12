# Timeline Embed

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Mantine](https//mantine.dev).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Embedding

To embed the timeline, you can use the following code:

```html
<script src="https://bsteinig.github.io/timeline-embed/index.js" defer></script>
<div id="react-timeline-js" data-subreddit="GOOGLE_SHEETS_ID_HERE"></div>
```

## JSON Format

The JSON format is as follows:

```json
{
  "events": [
    {
        "start_date": {
        "year": "NUMBER", // Required, unless type is "title"
        "month": "NUMBER",
        "day": "NUMBER",
        "time": "UTC Time"
        },
        "end_date": {
        "year": "NUMBER",
        "month": "NUMBER",
        "day": "NUMBER",
        "time": "UTC Time"
        },
        "display_date": "STRING",
        "text": {
            "headline": "STRING",
            "text": "STRING"
        },
        "media": {
            "url": "STRING", // link to: youtube, vimeo, soundcloud, dailymotion, instagram, twit pic, twitter status, google plus status, wikipedia, or an image
            "caption": "STRING", 
            "credit": "STRING"
        },
        "type": "STRING", // title
        "background": "STRING", // color or url to image
    },
  ]
}
```