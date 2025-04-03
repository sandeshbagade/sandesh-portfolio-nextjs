# Adding Your Profile Image to the Portfolio

## Current Implementation

We've updated the Hero component to use your local profile image file `user_profile.jpeg` placed in the images subdirectory of the public folder. The image is now displayed in the circular container, replacing the "SB" text placeholder.

```jsx
<Image
  src='/images/user_profile.jpeg'
  alt='Sandesh Bagade'
  fill
  sizes='(max-width: 768px) 256px, 320px'
  className='object-cover'
  priority
/>
```

This implementation uses your image file directly from the project's public directory structure.

## Image File Location

The image should be located at:

```
public/images/user_profile.jpeg
```

Make sure the file exists at this location and has the correct permissions.

## Alternative Methods

If you want to use a different image or a different approach, you can use one of the following methods:

### Method 1: Using a Different Local Image

1. Place your preferred image in the `public/images` directory
2. Update the Hero component to use this image:

   ```jsx
   <Image
     src='/images/your-image-name.jpg'
     alt='Sandesh Bagade'
     fill
     sizes='(max-width: 768px) 256px, 320px'
     className='object-cover'
     priority
   />
   ```

### Method 2: Using an Image from GitHub or Another Hosting Service

If you want to host the image externally:

1. Upload your image to GitHub or another image hosting service
2. Get the direct URL for the image
3. Update the Hero component to use this URL:
   ```jsx
   <Image
     src='YOUR_IMAGE_URL'
     alt='Sandesh Bagade'
     fill
     sizes='(max-width: 768px) 256px, 320px'
     className='object-cover'
     priority
   />
   ```

## Troubleshooting

If your image doesn't appear:

- Make sure the file exists at `public/images/user_profile.jpeg`
- Check that the filename and extension are exactly as specified (case sensitive)
- Check the browser console for any errors
- The Hero component includes a fallback to show your initials "SB" if the image fails to load

## Image Optimization

For best results:

- Use a square image (1:1 aspect ratio)
- Optimize your image for web (reduce file size to under 500KB if possible)
- The image will be displayed in a circular container with dimensions of 320x320px on desktop and 256x256px on mobile

Your portfolio now displays your professional photo instead of the initials placeholder!
