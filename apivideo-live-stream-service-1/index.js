const ApiVideoClient = require("@api.video/nodejs-client");
const API_KEY = process.env["API_KEY"];
const liveStreamName = "My Live Stream";

async function createLiveStream() {
  const client = new ApiVideoClient({ apiKey: API_KEY });
  const result = await client.liveStreams.create({
    name: liveStreamName,
  });
  return result;
}

async function addThumbnail(liveStreamID, filePath) {
  const client = new ApiVideoClient({ apiKey: API_KEY });
  const result = await client.liveStreams.uploadThumbnail(
    liveStreamID,
    filePath
  );
  return result;
}

createLiveStream()
  .then((res) => {
    console.log(
      "Created a live stream resource successfully. Below is the livestream resource"
    );
    console.log(res);
    const liveStreamID = res["liveStreamId"];
    const filePath = "thumbnailImage.jpg";
    addThumbnail(liveStreamID, filePath)
      .then((res) => console.log("Added Thumbnail"))
      .catch((err) =>
        console.log(
          `Encountered following error ${err} while adding thumbnail to live stream`
        )
      );
  })
  .catch((err) =>
    console.log(
      `Encountered following error ${err} while creating live stream resource`
    )
  );
