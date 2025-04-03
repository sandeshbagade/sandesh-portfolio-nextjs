# Adding Your Profile Image to the Portfolio

To add your profile image to your portfolio website, follow these steps:

## Method 1: Direct File Upload (Recommended)

1. Create a folder named `images` inside the `public` directory of your project:

   ```bash
   mkdir -p public/images
   ```

2. Save your profile image as `profile.jpg` in the `public/images` folder.

3. If your image is not already in this directory, you can copy it there from your downloads or other location:

   ```bash
   cp /path/to/your/image.jpg public/images/profile.jpg
   ```

4. The Hero component has already been updated to use this image. If you push these changes, the image will appear on your website.

## Method 2: Using GitHub and Vercel (If method 1 doesn't work)

1. Fork a temporary GitHub repository to host your image
2. Upload your image to this repository
3. Use a service like Statically.io to serve your image:
   ```
   https://cdn.statically.io/gh/YOUR_USERNAME/YOUR_REPO/main/YOUR_IMAGE.jpg
   ```
4. Edit the Hero.tsx file to use this URL:
   ```jsx
   <Image
     src='https://cdn.statically.io/gh/YOUR_USERNAME/YOUR_REPO/main/YOUR_IMAGE.jpg'
     alt='Sandesh Bagade'
     fill
     sizes='(max-width: 768px) 256px, 320px'
     className='object-cover'
     priority
   />
   ```

## Troubleshooting

If your image doesn't appear:

- Make sure it's named exactly `profile.jpg`
- Make sure it's located at `public/images/profile.jpg`
- Check the browser console for any errors
- The Hero component includes a fallback to show your initials "SB" if the image fails to load

## Image Optimization

For best results:

- Use a square image (1:1 aspect ratio)
- Optimize your image for web (reduce file size to under 500KB if possible)
- The image will be displayed in a circular container with dimensions of 320x320px on desktop and 256x256px on mobile

Your portfolio will now display your professional photo instead of the initials placeholder!
