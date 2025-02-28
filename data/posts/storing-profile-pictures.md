---
title: "storing profile pictures."
date: "2023-10-01"
status: "seedling"
---

NOTE: I'M BACK AND I DON'T THINK YOU NEED BACKBLAZE, PROBABLY YOU CAN JUST DO IT WITH UPLOADTHING, BUT UPLOADTHING IS BEING AN ABSOLUTE NIGHTMARE SO I WILL UPDATE THIS WHEN IT STOPS BEING WORSE THAN CLOUDINARY SOMEHOW.

so after spending several days on a wild goose chase trying to figure out best practice for storing profile pictures, i think i've finally got it. emphasis on think, because it really has been the wildest of goose chases. this time, i'm going to write it all out for you here to save you the trouble, if you happen to be in the very exact same boat as me (which, if you are, hi! cozy in here, huh?).

we've got a next.js frontend and a nest.js backend, with mongodb for the server. for a hot minute there i was using cloudinary for my image hosting but this morning it broke and i have no desire to fix it because getting it working in the first place was terrible and frankly the gdpr issues with my use of it are not ideal. so i'm going to do it properly this time.

here's how. we're going to use [upload thing](https://docs.uploadthing.com/) for the frontend stuff like the upload components. we're going to use [backblaze](https://www.backblaze.com/) to hold the images. and then we're going to link to those images in the mongo database.

let's hope it works.

**step one: uploadthing.**

[upload thing](https://docs.uploadthing.com/) is a helpful util that will basically handle the frontend stuff for you. it gives you upload buttons and components, so all you have to do is put it on your page, hook it up to your backend, and you're good to go.

to start off, you need to make an account and get your api keys.

then install:

```
npm install uploadthing @uploadthing/react
```

and add your env token:

```
UPLOADTHING_TOKEN=... # A token for interacting with the SDK
```

honestly all of this is in the documentation, so you can just follow that.

so with uploadthing, you have fileroutes, which are kinda likes apis but for your image uploads. you can set a bunch of important details here like max image size and max number of images to upload. since my project (album archive) has two types of images - profile pictures and lists - i am going to set up two fileroutes.

once you've done that, you can get the components set up. the code is super simple and lovely.


```js
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
```


and just like that, you have the upload button and dropzone. just render them in your (client!!) component and you're good to go. delightful.

**step two: backblaze.**

so once we have uploadthing working, we need somewhere to put the images. that kinda helps. you can do this with aws or azure or google cloud, but they all require billing info and i'm not about to do that, so i'm going with [backblaze](https://www.backblaze.com/) for my image hosting.

set up your account, make yourself a bucket, and grab your api keys. well you need to generate them first, but once you've done that, go and grab them.

do a quick npm install (or whatever your poison is).

```
npm install @backblaze/b2
```

then in your uploadthing route, you can just add the backlaze logic to the upload like this.

```js
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { B2 } from "@backblaze/b2";

const uploadthing = createUploadthing();

const b2 = new B2({
  applicationKeyId: process.env.B2_KEY_ID,
  applicationKey: process.env.B2_APP_KEY,
});

export const ourFileRouter = {
  profileImage: uploadthing({
    onUploadComplete: async (file) => {
      await b2.authorize();
      const response = await b2.uploadFile({
        bucketId: process.env.B2_BUCKET_ID,
        fileName: file.fileName,
        data: file.file,
        contentType: file.file.type,
      });

      console.log("file uploaded to backblaze:", response);
    },
  }).singleFile(),
};

export default uploadthing.router(ourFileRouter);

```

**step three: mongodb.**

so once uploadthing and backblaze have done their thing, you just need to hook it up to your database. i'm using mongo here but it'll work with whatever. live your dream.

basically once we upload to backblaze, we need it to return the link to the image. then we can store that in our database, and when you want to recall the image later on, you just grab the link through your api!

and that is it. now i am going to go away and actually do all of this, and i will update this once i know if it works. adios.
