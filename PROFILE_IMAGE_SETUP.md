# Profile Picture Setup

## Instructions:

1. **Save your PNG image** as `profile-picture.png` in the `public/` directory
2. **Image Requirements:**
   - Format: PNG (recommended) or JPG
   - Size: 288x288 pixels or larger (square aspect ratio)
   - File name: `profile-picture.png`

## Current Setup:

The Hero component is already configured to display your profile picture in the circular area on the landing page.

### File Location:
```
public/profile-picture.png
```

### Image Properties:
- Displayed in a circular frame
- Size: 240px on mobile, 288px on larger screens
- Optimized with Next.js Image component
- High priority loading for better performance

## To Use Your Image:

1. Drag and drop your PNG file into the `public/` folder
2. Rename it to `profile-picture.png`
3. The image will automatically appear in the circular hero section

## Alternative Image Names:

If you prefer a different filename, update the `src` path in:
`src/components/Hero.tsx` at line ~95:

```tsx
src="/your-image-name.png"
```

The image will be automatically cropped to fit the circular frame and optimized for web performance.
