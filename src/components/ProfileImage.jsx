import myPhoto from '../assets/my-photo.png';

function ProfileImage() {
  const imageStyle = {
    width: '300px',      // The fixed width of your container
    height: '400px',     // The fixed height of your container
    objectFit: 'cover',  // Ensures the container is filled
    objectPosition: 'top', // Shifts the focus to the top (preserving headroom)
    borderRadius: '8px'
  };

  return (
    <div className="image-container">
      <img src={myPhoto} alt="Profile" style={imageStyle} />
    </div>
  );
}

export default ProfileImage;