import Gallery from '@/src/components/Gallery';
import MainLayout from '@/components/MainLayout';

export default function GalleryPage() {
  return (
    <MainLayout>
      <div>
        <h1>相册</h1>
        <Gallery />
      </div>
    </MainLayout>
  );
}