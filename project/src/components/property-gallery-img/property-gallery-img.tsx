function PropertyGalleryImg({ url }: { url: string }) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={url} alt="" />
    </div>
  );
}

export default PropertyGalleryImg;
